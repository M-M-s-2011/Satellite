# Day 08: pg, Express Routing, REST

**You should be able to:**

- Describe the role of pg in our stack
- Define REST and its advantages
- Create and mount Express Routers
- Explain the role of body parsing middleware

## What role does node-postgres assume when communicating with postgres?

- Client: It is requesting something from the PostgreSQL server ☑️
- Server
- Neither

## What is REST?

- A node module for handling routes
    - Express
- A type of built-in express middleware for designing routers
    - Express Router
- An architectural style for designing web services ☑️
    - Helps answer the question on how to organize routes and how to map functionality to URIs and Methods:
        - Paths represent "nouns" or resources
        - HTTP “verbs” map to data operations
- A algorithm for parsing the text of an HTTP request
    - Body Parser

## Select all HTTP verbs

- GET
- POST
- PUT
- DELETE

## What is the express body parser and why do we use it?

It's a piece of middleware in which it extracts data from a form and makes it available to `req.body`. This is needed because data on the internet is not necessarily sent in whole but in packets.

PS: if you want to play around with why you need a body parser, get out [this repo](https://github.com/jbracht/body-parser-demo). It shows you what life is like with and without a body parser.
