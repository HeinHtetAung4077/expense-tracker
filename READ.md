```bash
npm install express express-session graphql @apollo/server @graphql-tools/merge bcryptjs connect-mongodb-session dotenv graphql-passport passport mongoose
```
# graphql package => 
- It provides the functionality to define the GraphQL schema, parse and validate GraphQL queries, execute queries against the schema, and format the response. 
- GraphQL is not tied to any specific server or client framework; it's a standalone library that can be used in various JS env. 

# @apollo/server => 
- part of Apollo ecosystem and is used for building GraphQL servers in Node.js.
- Overall, @apollo/server simplifies the process of creating and maintaining GraphQL servers in Node.js environments. 

# What is GraphQL Schema?
- It defines the structure of the data that clients can query and operations that they can perform. A Schema in GraphQL typically consists of two main parts: typeDefs and Resolvers.

# What are TypeDefs? 
- Type Definitions define the shape of the data available in GraphQL API. They specify the types of the objects that can be queried and the relationships between them. 

# What are resolvers?
- Resolvers are the functions that determine how to fetch the data associated with each field in the schema. 

