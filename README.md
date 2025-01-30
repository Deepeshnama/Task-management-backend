# Task Management Backend

This repository contains the backend for the Task Management application.

## Routes

main route   ==>   https://task-management-backend-6m0b.onrender.com

### GET   https://task-management-backend-6m0b.onrender.com/api/tasks/getAllTasks

- Description: Fetch all tasks.
- Response: JSON array of task objects.

### POST  https://task-management-backend-6m0b.onrender.com/api/tasks/createTask

https://task-management-backend-6m0b.onrender.com/api/tasks/createTask

- Description: Create a new task.
- Request Body: JSON object containing task details.
- Response: JSON object of the created task.

### PUT  https://task-management-backend-6m0b.onrender.com/api/tasks/:id

- Description: Update an existing task by ID.
- Request Body: JSON object containing updated task details.
- Response: JSON object of the updated task.

### DELETE  https://task-management-backend-6m0b.onrender.com/api/tasks/:id
- Description: Delete a task by ID.
- Response: Status message indicating success or failure.

## Installation

1. Clone the repository:
