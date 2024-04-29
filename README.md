FULL STACK REST API

## Summary
A basic REST API using Node.js/Express/mongodb-memory-server for the server-side, & React.js/TailwindCSS for the client-side
Because we're using In-memory Database, the server only keep your data in memory while the server is up and running, which means
You'll be required to restart the server each time you want to make certain operation with the API

<p>Step-by-step guide on how to get this application up and running on your local machine</p>

## clone or download

```terminal
$ git clone https://github.com/christiangubana/rest-api.git
```

## project structure
```terminal
LICENSE
package.json
server/
   package.json
   .env (create this file in the root directory of the server folder, this is where you'll pass all the secret keys, like the weather API KEY)
client/
   package.json

   -------------------
   
   └── rest-api/
    ├── client/
    └── server/
    └── test-unity/
...
```

## Usage (Prerequisites)

Make sure you have Node installed in your machine

- [Node](https://nodejs.org/en/download/current) ^20.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client // go to client folder
$ npm i // npm install packages
$ npm run dev // to port on http://localhost:3000/
```

## Server-side usage(PORT: 8080)

### Prepare the connection with In-Memory-Database - mongodb-memory-server

#### IMPORTANT NOTE 
This project required a MongoDB connection setup. Setup the connection based on the environments below.
You should at least have 10 GB of free disk space plus whatever space is necessary to hold your MongoDB data. At least 4 GB of RAM.
``````

### Start

```terminal
// in the root level
$ cd server
$ npm i // npm install packages
$ npm start or nodemon // run it locally
```

This is spin your server side project in the terminal and you should be able to see something like:


```terminal
MongoDB successfully connected to mongodb://127.0.0.1:46629/
Server running on http://localhost:8080
```

You should be able to access in the browser via
 http://localhost:8080/api



## How to test all the API endpoints, you can either use: 

- [Thunder Client](https://www.thunderclient.com/)
- [Postman](https://www.postman.com/ )


a. User Endpoints

// GET: http://localhost:8080/api/user // Get user
// POST: http://localhost:8080/api/add // Create user

b. Todos Endpoints
// GET: http://localhost:8080/api/todos // Get all todos
// POST: http://localhost:8080/api/todos // Create todos
// GET: http://localhost:8080/api/todos/:id // Get todos by ID
// PUT: http://localhost:8080/api/todos/:id // Update todo by ID
// DELETE: http://localhost:8080/api/todos/:id // Delete todo by ID

c. Weather Endpoint
   GET: http://localhost:8080/api/weather?city=London (change London to any City you want)

### Instruction on how to make use of GET user API
This api endpoint requires that you pass the username & password in the headers before you can access it

1. Go on Postman
   a. click Authorization
   b. under Type, select and choose ```Basic Auth```
   c. you'll see username & password
   d. inside username put ``testuser``
   e. inside password put ```testpassword``

This application only accept one single user, and those are the credentials.


## Update

```Testing all the API works well on Postman and Thunder Client 
 One improvement is needed with the Edit functionality on the Client side where, you can easily edit the item and it get updated, but you response return as failed, and Not Found 
 ``````


## How to run the unity tests
```terminal
$ cd server // go to server folder
$ npm run test // to execute the unity test
```


# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: ^1.6.8 | "chai": "^5.1.0",
chart.js": "^3.1.0 | cors": "^2.8.5
react: "^18.2.0 | dotenv": "^16.4.5
react: ^16.2.0 | express": "^4.18.3
react-chartjs-2: "^3.0.0 |  "mocha": "^10.4.0",
react-dom: "^18.2.0 | jsonwebtoken": "^9.0.2
react-router-dom: ^6.22.3 | mongoose": "^8.2.2
react-toastify": ^10.0.52 | mongoose-unique-validator": "^5.0.0
react-dom: "^18.2.0 | "mongodb-memory-server": "^9.2.0"

## Tool used

Language: 

 └── client side: JavaScription, React.js TailwindCSS
 |
 └── server side: Node.JS, Express.JS, Mongodb-memory-server

IDE: Visual Studio

OS: Windows 11 Pro 64-bit


### License
[MIT](https://github.com/christiangubana/rest-api.git)
