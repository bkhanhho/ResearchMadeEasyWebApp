from sentence_transformers import SentenceTransformer, util
import numpy as np


# todo choose model from this list that may better suite our needs https://docs.google.com/spreadsheets/d/14QplCdTCDwEmTqrn1LH4yrbKvdogK4oQvYO1K1aPR5M/edit#gid=0

model = SentenceTransformer('stsb-roberta-large')

#! Example For two sentances
# sentence1 = "I like Python because I can build AI applications"
# sentence2 = "I like Python because I can do data analytics"
# # encode sentences to get their embeddings
# embedding1 = model.encode(sentence1, convert_to_tensor=True)
# embedding2 = model.encode(sentence2, convert_to_tensor=True)
# # compute similarity scores of two embeddings
# cosine_scores = util.pytorch_cos_sim(embedding1, embedding2)
# print("Sentence 1:", sentence1)
# print("Sentence 2:", sentence2)
# print("Similarity score:", cosine_scores.item())



def findSemanticSimiliarity(sentences1: list[str], sentences2: list[str]):
    # encode list of sentences to get their embeddings
    embedding1 = model.encode(sentences1, convert_to_tensor=True)
    embedding2 = model.encode(sentences2, convert_to_tensor=True)
    # compute similarity scores of two embeddings
    cosine_scores = util.pytorch_cos_sim(embedding1, embedding2)
    for i in range(len(sentences1)):
        for j in range(len(sentences2)):
            print("Sentence 1:", sentences1[i])
            print("Sentence 2:", sentences2[j])
            print("Similarity Score:", cosine_scores[i][j].item())
            print()
    # todo here we would need to store the value for each pair with something like so
    # key => value , paperi-paperj => relateability score, 
    #todo what to return?
