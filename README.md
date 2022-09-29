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
  
*ADD DRAWING HERE*

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
