# Task Management API

This Task Management API was built using Node.js, Express, and MongoDB. It allows users to manage tasks and register/log in to access and manage tasks.

-----------------------

#### To start the backend =====>  npm start

-----------------------



### Base URL
([https://task-management-backend-6m0b.onrender.com](https://task-management-backend-6m0b.onrender.com))

------------------------

## Routes

### Task Routes

- **GET all tasks**  
  **Endpoint:** "/api/tasks/getAllTasks"
  **Description:** Fetches all tasks in the database.  
-----------------------------------------------

- **Create task**
- **Endpoint:** "/api/tasks/createTask" 
  **Description:** Create task in the database.

  ----------------------------------------------

  - **Get task by id**
- **Endpoint:** "/api/tasks/:id"
  **Description:** Fetches a task by its ID.

  -----------------------------------------------

  
  - **Update task**
- **Endpoint:** "/api/tasks/:id" 
  **Description:** Updates an existing task by its ID.

  ---------------------------------------------

- **Delete task**
- **Endpoint:** "/api/tasks/:id"
  **Description:** Delete a task by its ID.

  ---------------------------------------------


### User Routes

  
- **Register a user**
- **Endpoint:** "/api/users/register"
  **Description:** Registers a new user.

  ------------------------------------------

  - **Login a user**
- **Endpoint:** "/api/users/login"
  **Description:** Logs in an existing user and returns a JWT token.

