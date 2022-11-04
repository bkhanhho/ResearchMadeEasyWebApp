from constants import es_cloud_id, es_auth_pw, es_auth_user, es_index
from elasticsearch import Elasticsearch

class ElasticsearchResMe:
    def __init__(self):
        self.es_client = Elasticsearch(
            cloud_id = es_cloud_id,
            basic_auth = (es_auth_user, es_auth_pw)
        )
    def autosuggest(self, user_input):
        '''
        Purpose: Take user input and use match_phrase to get suggestions
        '''
        body = {
            "_source": "title",
            "query": {
                "match_phrase": {
                    "title": user_input
                }
            }
        }
        return self.es_client.search(index=es_index,body=body)

    def search(self, user_query, user_filters=None):
        '''
        Purpose: Take user query and filters and get results from ES
        '''
        if user_filters == None:
            body = {
                "_source": {
                    "excludes": ["full_paper"]
                },
                "query": {
                    "multi_match": {
                        "query": user_query,
                        "type": "most_fields",
                        "fields": ["title", "full_paper", "paper_id", "summary"],
                }
                }
            }
        else:
            body = {
                "_source": {
                    "excludes": ["full_paper"]
                },
                "query": {
                    "bool": {
                        "must:" [
                            "multi_match": {
                                "query": user_query,
                                "type": "most_fields",
                                "fields": ["title", "full_paper", "paper_id", "summary"],
                            },
                            {
                                "match": user_filters[0]
                            }
                        ]
                    }
                    
                }
            }
        return self.es_client.search(index=es_index,body=body)
