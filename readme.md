# Todo List Backend

This project is the backend for a Todo List application, designed to manage tasks and user accounts efficiently. It primarily focuses on RESTful API endpoints: `api/users` for user operations and `api/tasks` for task operations.

## Features

- User Registration and Authentication
- CRUD Operations for Tasks
- Task Assignment to Users
- Persistent Storage for Data using MongoDB

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following software installed:

- Node.js and npm (Node Package Manager)
- MongoDB (For the database)

### Installation

Steps to get your development environment running:

1. Clone the repository:
   ```bash
   git clone https://github.com/your_username/todo-list-backend.git
   ```

2. Install NPM packages:
    ```bash
    npm install
    ```
3. Create a .env file in the root directory and add necessary environment variables:
    ```bash
    PORT = 5001
    CONNECTION_STRING= "your mongo uri here"
    ACCESS_TOKEN_SECRET="secret code here"
    ```
4. Start the server:
   ```bash
   npm run dev
   ```

### API Endpoints

#### Users
```bash
POST  /api/users/register: Register a new user
POST  /api/users/login: Login a user
GET  /api/users/current: Retrieve logged in user's information
```
#### Tasks Endpoints
```bash
POST  /api/tasks: Create a new task for logged in user
GET  /api/tasks: Retrieve all tasks of logged in user
GET  /api/tasks/:id : Retrieve a specific task for logged in user
PATCH  /api/tasks/:id : Update a specific task of logged in user
PATCH  /api/tasks/complete/:id : Mark a specific task of logged in user as complete
DELETE /api/tasks/:id : Delete a specific task of logged in user
```

### Dependencies Used
- bcrypt
- dotenv
- express
- express-async-handler
- jsonwebtoken
- mongoose
- nodemon