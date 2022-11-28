from constants import es_cloud_id, es_auth_pw, es_auth_user, es_index
from typing import Union

from fastapi import FastAPI
import fastapi
from requests import Response
from elasticsearch import Elasticsearch
from fastapi.middleware.cors import CORSMiddleware

from es_client import ElasticsearchResMe

# related papers
import json
import os
from sentence_transformers import SentenceTransformer, util

def setupSemanticSearch():
    #First, we load the papers dataset (with title and abstract information)
    dataset_file = 'emnlp2016-2018.json'

    if not os.path.exists(dataset_file):
        util.http_get("https://sbert.net/datasets/emnlp2016-2018.json", dataset_file)
    else:
        print("File already downlaoded")

    with open(dataset_file) as fIn:
        papers = json.load(fIn)

    print(len(papers), "papers loaded")

    #We then load the allenai-specter model with SentenceTransformers
    model = SentenceTransformer('allenai-specter')

    #To encode the papers, we must combine the title and the abstracts to a single string
    paper_texts = [paper['title'] + '[SEP]' + paper['abstract'] for paper in papers]
    print("loaded paper_texts")
    #Compute embeddings for all papers
    corpus_embeddings = model.encode(paper_texts, convert_to_tensor=True)
    print("Computed embeddings")

    
#We define a function, given title & abstract, searches our corpus for relevant (similar) papers
def search_papers(title, abstract):
    query_embedding = model.encode(title+'[SEP]'+abstract, convert_to_tensor=True)

    search_hits = util.semantic_search(query_embedding, corpus_embeddings)
    search_hits = search_hits[0]  #Get the hits for the first query

    print("Paper:", title)
    print("Most similar papers:")
    result = []
    for hit in search_hits:
        related_paper = papers[hit['corpus_id']]
        related_paper['score'] = hit['score']
        result.append(related_paper)
        print("{:.2f}\t{}\t{} {}".format(hit['score'], related_paper['title'], related_paper['venue'], related_paper['year']))
    return result


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connect to 'http://localhost:9200'
es_client = Elasticsearch(
    cloud_id=es_cloud_id,
    basic_auth=(es_auth_user, es_auth_pw)
)

# setupSemanticSearch()

@app.get("/")
def read_root():
    return {"Evan Is Cool"}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}


@app.get("/paper/{paper_id}")
def get_paper(paper_id: str):
    es_client = ElasticsearchResMe(0, 1)
    resp = es_client.get_paper_by_id(paper_id)
    return resp
    # todo call the db to get a paper's info
    # return {"not implemented"}


@app.get("/related/", status_code=fastapi.status.HTTP_200_OK)
async def get_related_papers(title: Union[str, None], abstract: Union[str, None], response: fastapi.Response):
    # todo call the db to get a paper's info
    if title == None or abstract == None:
        response.status_code = fastapi.status.HTTP_400_BAD_REQUEST
        return {"Bad response"}
    res = search_papers(title=title, abstract=abstract)
    return {"result": res}
    # return {"Not implemented"}

# @app.get("/bookmark/{user_id}", status_code=fastapi.status.HTTP_200_OK)
# async def get_saved_papers(user_id: str, response: fastapi.Response):
#     # todo call the db to get a paper's info
#     return {"Not implemented"}


# @app.post("/bookmark/{user_id}", status_code=fastapi.status.HTTP_201_CREATED)
# def add_saved_paper(user_id: str, paper_id: Union[str, None], response: fastapi.Response):
#     return {"Not implemented"}


@app.get("/search", status_code=fastapi.status.HTTP_200_OK)
def search_elastic(query: Union[str, None],  response: fastapi.Response, filters: Union[str, None] = None, start: int = 0, size: int = 10):
    if query == None or query.strip() == "":
        response.status_code = fastapi.status.HTTP_400_BAD_REQUEST
        return {"reason": "Try adding the query parameter and giving it a non empty"}

    es_client = ElasticsearchResMe(start, size)
    resp = es_client.search(query, user_filters=filters)
    return resp

@app.get("/autosuggest/{input}", status_code=fastapi.status.HTTP_200_OK)
def search_elastic(input: str, response: fastapi.Response, start: int = 0, size: int = 10):
    if input == None or input.strip() == "":
        response.status_code = fastapi.status.HTTP_400_BAD_REQUEST
        return {"reason": "Try adding the query parameter and giving it a non empty"}

    es_client = ElasticsearchResMe(start, size)
    resp = es_client.autosuggest(input)
    return resp