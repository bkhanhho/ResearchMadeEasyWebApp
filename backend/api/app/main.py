from constants import openai_key, es_cloud_id, es_auth_pw, es_auth_user, es_index, categories
from typing import Union

from fastapi import FastAPI
import fastapi
from requests import Response
from elasticsearch import Elasticsearch

app = FastAPI()


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
def search_elastic(searchQuery: Union[str, None], response: fastapi.Response, first_index: int = 0, final_index: int = 10):
    if searchQuery == None:
        response.status_code = fastapi.status.HTTP_400_BAD_REQUEST
        return {"reason": "Try adding a query parameter called searchQuery and giving it a non empty"}
    if searchQuery.strip() == "":
        response.status_code = fastapi.status.HTTP_400_BAD_REQUEST
        return {"stop sending empty space"}
    # ? todo move to async search
    resp = es_client.search(index=es_index
, body={
        "query": {
            "bool": {
                "should": [{"match": {"title": searchQuery}}, {"match":{ "full_paper": searchQuery}}]
            }
        }
    })
    return resp

    # print("Got %d Hits:" % resp['hits']['total']['value'])
    # for hit in resp['hits']['hits']:
    #     print("%(timestamp)s %(author)s: %(text)s" % hit["_source"])

    return {
        "took": 5,
        "timed_out": False,
        "_shards": {
            "total": 1,
            "successful": 1,
            "skipped": 0,
            "failed": 0
        },
        "hits": {
            "total": {
                "value": 2,
                "relation": "eq"
            },
            "max_score": 1.3862942,
            "hits": [
                {
                    "_index": "search-rp-metadata",
                    "_id": "5",
                    "_score": 1.3862942,
                    "_source": {
                        "title": "Vertical Semi-Federated Learning for Efficient Online Advertising",
                        "link": "https://arxiv.org/pdf/2209.15635.pdf",
                        "released_date": "2022-09-30",
                        "last_updated_date": "2022-09-30",
                        "authors": [
                            {
                                "name": "Wenjie Li"
                            },
                            {
                                "name": "Qiaolin Xia"
                            },
                            {
                                "name": "Hao Cheng"
                            },
                            {
                                "name": "Kouyin Xue"
                            },
                            {
                                "name": "Shu-Tao Xia"
                            }
                        ],
                        "paper_id": "2209.15635",
                        "summary": "One or two sentences",
                        "category": ["Artificial Intelligence"]
                    }
                },
                {
                    "_index": "search-rp-metadata",
                    "_id": "3",
                    "_score": 1.1602942,
                    "_source": {
                        "title": "FOTS: Fast Oriented Text Spotting with a Unified Network",
                        "link": "https://arxiv.org/pdf/1801.01671.pdf",
                        "released_date": "2022-08-22",
                        "last_updated_date": "2022-09-10",
                        "authors": [
                            {
                                "name": "Xuebo Liu"
                            },
                            {
                                "name": "Ding Liang"
                            },
                            {
                                "name": "Shi Yan"
                            },
                            {
                                "name": "Dagui Chen"
                            },
                            {
                                "name": "Yu Qiao"
                            },
                            {
                                "name": "Junjie Yan"
                            }
                        ],
                        "paper_id": "1801.01671",
                        "summary": "One or two sentences",
                        "category": ["Computer Vision and Pattern Recognition"]
                    }
                }
            ]
        }
    }
