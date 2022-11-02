'''
*** Purpose of this file ***
Main: extract metadata from papers and store them in ES
Secondary: define an explicit mapping for how the data will be stored in ES 
           store metadata in a csv file
           call GTP-3 API to get summary of the paper
Both main and secondary purposes only need to run once (unless new papers are added)
'''

import os
import openai
import feedparser
import urllib.request as openurl
from PyPDF2 import PdfReader
from elasticsearch import Elasticsearch

from constants import openai_key, es_cloud_id, es_auth_pw, es_auth_user, es_index, categories

def define_ES_mapping ():
    '''
    Expected mapping:
    title
    link
    release_date
        day, month, year
    last_updated_date
        day, month, year
    authors => list of objects with "name" attribute
    paper_id
    category => list with one or more categories
    summary
    paper
    '''
    es_client = Elasticsearch(
        cloud_id = es_cloud_id,
        basic_auth = (es_auth_user, es_auth_pw)
    )

    mapping = {
        "mappings": {
            "properties": {
                "title": {
                    "type": "text"
                },
                "link": {
                    "type": "text"
                },
                "release_date": {
                    "type": "date"
                },
                "last_updated_date": {
                    "type": "date"
                },
                "authors": {
                    "type": "nested"
                },
                "paper_id": {
                    "type": "text"
                },
                "summary": {
                    "type": "text"
                },
                # "category": {
                #     "type": "array"
                # },
                "full_paper": {
                    "type": "text"
                }
            }
        }
    }
    response = es_client.options(ignore_status=400).indices.create(
        index = es_index,
        body = mapping
    )

    print_ES_response(response)

def print_ES_response (response):
    if 'acknowledged' in response:
        if response['acknowledged'] == True:
            print ("INDEX MAPPING SUCCESS FOR INDEX:", response['index'])

    # catch API error response
    elif 'error' in response:
        print ("*** ERROR:", response['error']['root_cause'])
        print ("*** TYPE:", response['error']['type'])

    # print out the response:
    print ('\nResponse:', response)

# ----------------------------------------------------------------------------------

papers_separator = 60

def get_paper_codes (file_name, paper_codes_list):
    '''
    Purpose: Store all the paper codes in paper_codes_list
    '''
    file_with_paper_codes = open(file_name, "r")
    for line in file_with_paper_codes:
        # store the paper codes from the txt file in a list
        if "2" in line:
            line = line.replace("\n","")
            line = line.replace(" ", "")
            paper_codes_list.append(line)

def call_arXiv (paper_codes):
    '''
    Purpose: Call arXiv to get details of a list of paper codes 
    '''
    api_url = f"http://export.arxiv.org/api/query?id_list={paper_codes}"
    with openurl.urlopen(api_url) as arxiv_res:
            papers_info = feedparser.parse(arxiv_res.read())
    return papers_info

def get_gtp3_summary (abstract):
    '''
    Purpose: Get a paper's abstract and return a summarized version from gtp3
    '''
    openai.api_key = openai_key
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt=f"Summarize the following in one or two sentences:\n{abstract}",
        temperature=0.7,
        max_tokens=256,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )

    summary = clean_text(response['choices'][0]['text'])
    return summary

def save_to_ES (doc):
    '''
    Purpose: Receive paper's metadata and store it in ES
    '''
    es_client = Elasticsearch(
        cloud_id = es_cloud_id,
        basic_auth = (es_auth_user, es_auth_pw)
    )

    res = es_client.index(index=es_index, document=doc, id=doc['paper_id'])
    if res['_shards']['failed'] != 0:
        print (f"***ERROR: Paper with ID {doc['paper_id']} failed to be created")
        print (res)

def create_metadata_dict (arxiv_res, es_doc):
    '''
    Purpose: Get arXiv response and populate JSON that'll go to ES
    '''
    es_doc["title"] = clean_text(arxiv_res.title)
    es_doc["link"] = arxiv_res.links[1]['href']
    es_doc["release_date"] = arxiv_res.published[:10]
    es_doc["last_updated_date"] = arxiv_res.updated[:10]
    es_doc["authors"] = arxiv_res.authors
    es_doc["paper_id"] = get_paper_id(arxiv_res.id)
    try:
        es_doc["category"] = categories[arxiv_res.arxiv_primary_category['term']]
    except KeyError:
        es_doc["category"] = ""
    es_doc["summary"] = get_gtp3_summary(arxiv_res.summary)
    es_doc["full_paper"] = get_full_paper(arxiv_res.links[1]['href'])

def get_full_paper (link):
    '''
    Purpose: Save a paper locally, extract the text, and return it
    '''
    # Save paper
    if 'abs' in link:
        link = correct_link(link)
    response = openurl.urlopen(link+'.pdf')
    file = open('Research Papers/'+get_paper_id(link)+'.pdf', 'wb')
    file.write(response.read())
    file.close()

    # Extract text
    paper = ''
    try:
        reader = PdfReader('Research Papers/'+get_paper_id(link)+'.pdf')
        for i in range(len(reader.pages)):
            page = reader.pages[i]
            paper += page.extract_text()
            if i == 0:
                # remove unnecessary information from first page
                paper = paper[:-40]
            if 'references\n[1]' in paper or 'REFERENCES\n[1]' in paper:
                ref_index = paper.find("references\n[1]")
                if ref_index == -1:
                    ref_index = paper.find("REFERENCES\n[1]")
                paper = paper[:ref_index]
                break
    except:
        print (f"****ERROR: Could not read paper {link}****")
    return paper

def get_paper_id (paper_link):
    # Purpose: Return paper id from link
    return paper_link.split('/')[-1] if 'v' not in paper_link.split('/')[-1] else paper_link.split('/')[-1][:-2]

def clean_text (string):
    # Purpose: Return a str with no \n's or extra spaces
    return " ".join(''.join(string.splitlines()).split())

def correct_link (link):
    # Purpose: Get a link with 'abs' inside and switch it to pdf
    link_list = link.split('/')
    link_list[-2] = 'pdf'
    return '/'.join(link_list)

def get_data_to_ES (file_name):
    '''
    Purpose: Get paper details, store them in ES, and save papers as pdf's
    '''
    os.makedirs("Research Papers", exist_ok=True)

    all_paper_codes = []
    get_paper_codes(file_name, all_paper_codes)
    
    total_papers = len(all_paper_codes)
    loop_range = total_papers//papers_separator if total_papers%papers_separator == 0 else total_papers//papers_separator + 1

    for i in range(1,papers_separator):
        # get a subset of the paper codes in the form of a coma separated string
        paper_codes = ",".join(all_paper_codes[(i-1)*loop_range:i*loop_range])
        papers_metadata = call_arXiv(paper_codes)       
        
        for j in range(len(papers_metadata.entries)):
            paper_dict = {}
            create_metadata_dict(papers_metadata.entries[j], paper_dict)
            save_to_ES(paper_dict)
            
#define_ES_mapping()

get_data_to_ES("data_pipeline/initialFileCodes.txt")

# test_index = 'search-rp-metadata'
# es_client = Elasticsearch(
#         cloud_id = es_cloud_id,
#         basic_auth = (es_auth_user, es_auth_pw)
# )

# doc = {
#     "title": "FOTS: Fast Oriented Text Spotting with a Unified Network",
#     "link": "https://arxiv.org/pdf/1801.01671.pdf",
#     "released_date": "2022-08-22",
#     "last_updated_date": "2022-09-10",
#     "authors": [
#         {"name": "Xuebo Liu"},
#         {"name": "Ding Liang"},
#         {"name": "Shi Yan"},
#         {"name": "Dagui Chen"},
#         {"name": "Yu Qiao"},
#         {"name": "Junjie Yan"}
#     ],
#     "paper_id": "1801.01671",
#     "summary": "The paper discusses a new method for text detection and recognition that is faster and more accurate than previous methods. The method, called Fast-Oriented Text Spotting (FOTS), uses a convolution-sharing strategy to improve performance. Experiments on three datasets show that FOTS outperforms previous methods, including a real-time-oriented text spotting system",
#     "category": ["Computer Vision and Pattern Recognition"]

# }

# res = es_client.index(index=test_index, document=doc, id=1801.01671)
# print (res)


# os.makedirs("Research Papers", exist_ok=True)
# reader = PdfReader("C:/Users/calin/OneDrive - Texas Tech University/Documents/TTU/2022/Fall/Capstone Project/testpdf.pdf")
# # page = reader.pages[0]
# # print (page.extract_text()[:-40])
# paper = ''
# for i in range(len(reader.pages)):
#     page = reader.pages[i]
#     paper += page.extract_text()
#     if i == 0:
#         # remove unnecessary information
#         paper = paper[:-40]
#     if 'references\n[1]' in paper or 'REFERENCES\n[1]' in paper:
#         ref_index = paper.find("references\n[1]")
#         if ref_index == -1:
#             ref_index = paper.find("REFERENCES\n[1]")
#         paper = paper[:ref_index]
#         break

# print (paper)
