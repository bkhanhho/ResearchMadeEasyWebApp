from cgitb import text
import urllib.request as libreq
import feedparser

ml_papers = ["2209.15635,2209.15634,2209.15626,2209.15621,2209.15616,2209.15595"]
api_url = f"http://export.arxiv.org/api/query?id_list=2209.15635,2209.15634,2209.15626,2209.15621,2209.15616,2209.15595"

file = open("testpdf.pdf","rb")
print(file.read(4000))
file.close()

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
