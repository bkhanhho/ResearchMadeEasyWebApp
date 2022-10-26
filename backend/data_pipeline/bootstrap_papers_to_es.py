'''
*** Purpose of this file ***
Main: extract metadata from papers and store them in ES
Secondary: define an explicit mapping for how the data will be stored in ES 
           store metadata in a csv file
           call GTP-3 API to get summary of the paper
Both main and secondary purposes only need to run once
'''

import urllib.request as openurl
from elasticsearch import Elasticsearch
import feedparser

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
        cloud_id = "resme-es:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJDkyOGE0YWRmNDE5NDRjOGRiNWFiYmIxODI0NjljYWIwJDBlMDVmMTM0YjYyNTRjZjJiY2QzNWUxZWI1ZjljOTZl",
        basic_auth = ("elastic", "BrcPc3rYsJEm1PosU3wQorKU")
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
        index = "es_resme_papers",
        body = mapping
    )

    if 'acknowledged' in response:
        if response['acknowledged'] == True:
            print ("INDEX MAPPING SUCCESS FOR INDEX:", response['index'])

    # catch API error response
    elif 'error' in response:
        print ("*** ERROR:", response['error']['root_cause'])
        print ("*** TYPE:", response['error']['type'])

    # print out the response:
    print ('\nResponse:', response)

papers_separator = 50
categories = {"cs.AI": "Artificial Intelligence", "cs.DC": "Distributed, Parallel, and Cluster Computing", "cs.CV": "Computer Vision and Pattern Recognition"}

def get_paper_codes (paper_codes_list):
    file_name = "initialFileCodes.txt"
    file_with_paper_codes = open(file_name, "r")
    for line in file_with_paper_codes:
        # store the paper codes from the txt file in a list
        if "2" in line:
            line = line.replace("\n","")
            line = line.replace(" ", "")
            paper_codes_list.append(line)

def call_arXiv (paper_codes):
    api_url = f"http://export.arxiv.org/api/query?id_list={paper_codes}"
    with openurl.urlopen(api_url) as arxiv_res:
            papers_info = feedparser.parse(arxiv_res.read())
    return papers_info

def get_data_to_ES ():
    all_paper_codes = []
    get_paper_codes(all_paper_codes)
    
    total_papers = len(all_paper_codes)
    loop_range = total_papers//papers_separator if total_papers%papers_separator == 0 else total_papers//papers_separator + 1

    for i in range(1,loop_range):
        # get a subset of the paper codes in the form of a coma separated string
        paper_codes = ",".join(all_paper_codes[(i-1)*loop_range:i*loop_range])
        papers_metadata = call_arXiv(paper_codes)       
        
        for j in range(len(papers_metadata.entries)):
            print (papers_metadata.entries[j].title)
            break

define_ES_mapping()

#get_data_to_ES()