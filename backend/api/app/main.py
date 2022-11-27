from constants import es_cloud_id, es_auth_pw, es_auth_user, es_index
from typing import Union

from fastapi import FastAPI
import fastapi
from requests import Response
from elasticsearch import Elasticsearch
from fastapi.middleware.cors import CORSMiddleware

from es_client import ElasticsearchResMe

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


@app.get("/")
def read_root():
    return {"Evan Is Cool"}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}


@app.get("/paper/{paper_id}")
def get_paper(paper_id: str):
    # todo call the db to get a paper's info
    return {"not implemented"}


@app.get("/bookmark/{user_id}", status_code=fastapi.status.HTTP_200_OK)
async def get_saved_papers(user_id: str, response: fastapi.Response):
    # todo call the db to get a paper's info
    return {"Not implemented"}


@app.post("/bookmark/{user_id}", status_code=fastapi.status.HTTP_201_CREATED)
def add_saved_paper(user_id: str, paper_id: Union[str, None], response: fastapi.Response):
    return {"Not implemented"}


@app.get("/search", status_code=fastapi.status.HTTP_200_OK)
def search_elastic(query: Union[str, None], response: fastapi.Response, start: int = 0, size: int = 10):
    if query == None or query.strip() == "":
        response.status_code = fastapi.status.HTTP_400_BAD_REQUEST
        return {"reason": "Try adding the query parameter and giving it a non empty"}

    es_client = ElasticsearchResMe(start, size)
    resp = es_client.search(query)
    return resp

@app.get("/autosuggest/{input}", status_code=fastapi.status.HTTP_200_OK)
def search_elastic(input: str, response: fastapi.Response, start: int = 0, size: int = 10):
    if input == None or input.strip() == "":
        response.status_code = fastapi.status.HTTP_400_BAD_REQUEST
        return {"reason": "Try adding the query parameter and giving it a non empty"}

    es_client = ElasticsearchResMe(start, size)
    resp = es_client.autosuggest(input)
    return resp