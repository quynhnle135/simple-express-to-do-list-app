# Simple To Do List App with Express

This project is a simple To Do List application built with Express.js for the backend and plain JavaScript, HTML, and CSS for the frontend. It allows users to create, view, update, and delete tasks. The application serves as a basic example of how to integrate a frontend with a backend using an API.

<br>

## Technology Stack
- <b>Backend:</b> Node.js, Express.js
- <b>Frontend:</b> HTML, CSS, JavaScript
- <b>Middleware:</b> body-parser, serve-static

<br>

## Set Up
To run this project, follow these steps:

1. Clone the repository

```bash
git clone https://github.com/quynhnle135/simple-express-to-do-list-app.git
cd simple-express-to-do-list-app
```

2. Install the necessary packages:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

This will start the server on <b>http://localhost:3000</b>. The API endpoints will be available at <b>http://localhost:3000/tasks</b>.

<br>

## API Endpoints
The server defines the following REST API endpoints:

- <b>GET /tasks</b>: Retrieve all tasks.
- <b>GET /tasks/:id</b>: Retrieve a task by its ID.
- <b>POST /tasks</b>: Create a new task.
- <b>PUT /tasks/:id</b>: Update a task by its ID.
- <b>DELETE /tasks/:id</b>: Delete a task by its ID.

<br>

## Screenshots

Before adding tasks:
![before](screenshots/before_adding_tasks.png)

After adding tasks:
![after](screenshots/after_adding_tasks.png)

Completed some tasks:
![completed](screenshots/completed_some_tasks.png)