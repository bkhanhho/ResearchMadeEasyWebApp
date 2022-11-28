export async function getPaperFromBackend(paperId) {
  try {
    console.log("paper id is: ", paperId);
    const url = "http://127.0.0.1:8000/search?query=" + paperId;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log("successful result is: ", { url }, { result });

    return result["hits"]["hits"][0]["_source"];
  } catch (err) {
    console.log("fetch error is: ", err);
  }
}

export async function getRelatedPapers(title, abstract) {
  try {
    const url = 'http://127.0.0.1:8000/related?title=' + title + '&abstract=' + abstract;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log("successful result is: ", { url }, { result });

    return result['result']
  } catch (err) {
    console.error('getRelatedPapers fetch error: ', err)
  }
}