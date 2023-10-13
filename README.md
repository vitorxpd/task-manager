# Task Manager

The Task Manager API is a versatile tool for efficiently managing your task list. It offers a range of essential features to help you keep your tasks organized and up-to-date.

## Endpoints

- **GET /tasks**
  - List all tasks.

- **GET /tasks/:id**
  - Retrieve a task by ID.

- **POST /tasks**
  - Create a new task. You need to send a text object in the request body containing the task's text.

- **PATCH /tasks/:id**
  - Update a task to mark it as completed or not. You need to send a done object in the request body with a boolean value.

- **DELETE /tasks/:id**
  - Delete a task by ID.
