# RESme
Monorepo for all resme software. Please put indiviudal systems in their own folder. Please fork big changes and ask for review.

# Front
- Search Query 
  - (str filters) -> list
- Sign-up
- Login
- Logout
- Get saved papers 
  - (user ID) -> list (from database)
- Add saved papers
  - (user ID, Paper ID) -> list (from database)
## UML Diagram
![CapstoneUML drawio](https://user-images.githubusercontent.com/59324140/193092660-a1c0e398-ba30-4bfe-a52d-1999c06d45fd.png)

# Back
- Search
  - (str, filters) -> Elastic list -> ElasticToDocs
- ElasticToDocs
  - (Elastic list) -> List
- RelatedToDocs 
  - (Graph list) -> List
- GPT3
  - Get summary and cache
  - Get feature paper 
  - (Paper text) -> String
- GetRawPapers
- Build knowledge graph
  - Get Paper UID
  - use ArXiv X UID
  - Store graph
## Diagram of backend
![CapstoneDrawing](https://user-images.githubusercontent.com/59324140/193089770-f5841c2a-b9b0-4ec8-aad4-a419ff66e5ce.png)
