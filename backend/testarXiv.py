from cgitb import text
import urllib.request as libreq
import feedparser
from MySQLdb import _mysql
from elasticsearch import Elasticsearch, helpers


ml_papers = ["2209.15635,2209.15634,2209.15626,2209.15621,2209.15616,2209.15595"]
api_url = f"http://export.arxiv.org/api/query?id_list=2209.15635,2209.15634,2209.15626,2209.15621,2209.15616,2209.15595"

file = open("testpdf.pdf","rb")
print(file.read(4000))
file.close()

db = _mysql.connect(host="104.197.102.114",user="resme-db",
                  passwd="Qx?a\Mvsej]8G:sA",db="resme-db")

es = Elasticsearch(
    cloud_id = "resme-es:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJDkyOGE0YWRmNDE5NDRjOGRiNWFiYmIxODI0NjljYWIwJDBlMDVmMTM0YjYyNTRjZjJiY2QzNWUxZWI1ZjljOTZl",
    http_auth = ("elastic", "BrcPc3rYsJEm1PosU3wQorKU")
)

print(es.info())



# with libreq.urlopen(api_url) as arxiv_res:
#     paper_info = feedparser.parse(arxiv_res.read())
#     for i in range(len(paper_info.entries)):
#         print (paper_info.entries[i].title)
    

    # response = libreq.urlopen(paper_info.entries[0].links[1]['href']+'.pdf')
    # file = open("testpdf.pdf", 'wb')
    # file.write(response.read())
    # file.close()
    #binary_pdf = response.read(9)
    #text_pdf = binary_pdf.decode('unicode_escape')
    #print (binary_pdf.decode('utf-8'))


# loop over all our data and store into database
        #  db.query("""SELECT spam, eggs, sausage FROM breakfast
        #   WHERE price < 5""")
#         es.index(
        #  index='lord-of-the-rings',
        #  document={
        #   'character': 'Aragon',
        #   'quote': 'It is not this day.'
        #  })