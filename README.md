# FULL STACK REST API

## Description
This project is a web application built using Node.js/Express/MongoDB-memory-server user authentication to help identify verified users before allowing them access/managing todos items. It includes features such as user authentication, the dashboard for displaying todos, the weather page, and basic navigation. The backend API for managing todos is assumed to be available at ``` http://localhost:8080/api``` and the client side is built in React.js/Tailwindcss
Because it uses an In-memory Database, the server only keeps your data in memory while the server is up and running, which means
you'll be required to restart the server each time you want to make certain operations with the API.


## Installation

To run this project on your local computer, follow these steps:

### 1. Clone the Repository

```terminal
$ git clone https://github.com/christiangubana/rest-api.git
```

### 2. Navigate to the Project Directory

```cd project-name``` 
The folder name is rest-api


## project structure

```terminal
   
   └── res-api/       
    ├── client/
    ├── server/
    └── docker-compose.yml
```

## 3. Install Dependencies

### Usage (Prerequisites)

Make sure you have Node installed in your machine

- [Node](https://nodejs.org/en/download/current) ^20.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

The client(frontend) and server(backend) run concurrently in a different terminal session, in order to make them talk to each other.


## 4. Configure Environment Variables

a. Create a .env file in the root of the client directory and add the following environment variables:
   
   1. ```REACT_APP_API_BASE_URL=http://localhost:8080/api```

   Replace http://localhost:8080/api with the base URL of your backend API.

b. Create a .env file in the root of the server directory and add the following environment variables:

   2. ```WEATHER_API_KEY=your-weather-api-key-goes-hear```

## 5. Start the Development server/client

### Client
```terminal
$ cd client 
$ npm i // npm install packages
$ npm run dev // to port on http://localhost:3000/

This command will start the development server and open the application in your default web browser.

```
### Server
```terminal
$ cd server 
$ npm i // npm install packages
$ npm start or nodemon // to port on http://localhost:8080/api
```

## Usage on client-side

- Upon starting the development server, navigate to http://localhost:3000 in your web browser.
- This application is for a single username, login with the following credentials.
- for username put 'testuser' & for password put 'testpassword'
- Once logged in, you will be redirected to the dashboard where you can view, add, edit, and delete todos.
- You can also navigate to the weather page to check the weather forecast.
- To log out, click on the "Logout" button in the navbar.

## Usage of APIs endpoints

### Usage (Prerequisites)

Make sure you have one of these tools

- [Thunder Client](https://www.thunderclient.com/)
- [Postman](https://www.postman.com/ )
   
a. User Endpoints

 POST: ```http://localhost:8080/api/add``` To create a user

 GET: ```http://localhost:8080/api/user``` To get user

b. Todos Endpoints

 GET: ```http://localhost:8080/api/todos```  To get all todos

 POST: ```http://localhost:8080/api/todos``` To create todos

 GET: ```http://localhost:8080/api/todos/:id``` To get todos by ID

 PUT: ```http://localhost:8080/api/todos/:id``` To update todo by ID

 DELETE: ```http://localhost:8080/api/todos/:id``` To Delete todo by ID

c. Weather Endpoint

GET: ```http://localhost:8080/api/weather?city=London``` (change London to any City you want)

* Authentication headers

          You mush be login with the right username & password to access these endpoints
          └── Follow these instruction to be authorized
                  └── In Postman/Thunder
                  └── Click Authorization
                  └── Select Basic Auth
                  └── Inside username type 'testuser'     
                  └── Inside password type 'testpassword'
                  └── Click Send.
                       

## How to run the unity tests
```terminal
$ cd server // go to server folder
$ npm run test // to execute the unity test
```

## Dependencies(tech-stacks)
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


## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature-name).
Create a new Pull Request.


## License

This project is licensed under the [ MIT License](https://github.com/christiangubana/rest-api.git)
