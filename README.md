# FULL STACK REST API

## Description
This project is a web application built using Node.js/Express/MongoDB-memory-server user authentication to help identify verified users before allowing them access/managing todos items. It includes features such as user authentication, the dashboard for displaying todos, the weather page, and basic navigation. The backend API for managing todos is assumed to be available at ``` http://localhost:8080/api``` and the client side is built in React.js/Tailwindcss.

Since we use an In-memory Database, the server only keeps your data in memory while the server is up and running, which means certain operations will start over every time the server is restarted.


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

* Create a .env file in the root of the server directory and add the following environment variables:

   ```WEATHER_API_KEY=your-weather-api-key-goes-hear```

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
- This application is for a single username, log in with the following credentials.
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

          You must be login with the right username & password to access these endpoints
          └── Follow these instructions to be authorized
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
