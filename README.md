# FULL STACK REST API

## Description
This project is a web application built using Node.js/Express/MongoDB-memory-server and [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) and User authentication to help to identify verified users before allowing them access/managing todos item. It includes features such as user authentication, dashboard for displaying todos, weather page, and basic navigation. The backend API for managing todos is assumed to be available at ``` http://localhost:8080/api``` and the client side is built in React.js/Tailwindcss
Because it uses an In-memory Database, the server only keeps your data in memory while the server is up and running, which means
yoou'll be required to restart the server each time you want to make certain operation with the API.


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
