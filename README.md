# Task Management App 🗂️

A simple task management application built with Flask (backend) and React (frontend). This app allows users to create, read, update, and delete tasks.

## Table of Contents 📚

- [Features](#features) ✨
- [Getting Started](#getting-started) 🚀
  - [Database Setup](#database-setup) 🛠️
  - [Backend Setup](#backend-setup) 🔧
  - [Frontend Setup](#frontend-setup) 💻
- [API Documentation](#api-documentation) 📖
- [Libraries Used](#libraries-used) 📦

## Features ✨

- 🗂️ View a list of tasks.
- ➕ Create new tasks.
- ✏️ Update existing tasks.
- ❌ Delete tasks.
- 👩‍💻 User-friendly interface using React.

## Getting Started

### Database Setup

1. Run SQL Script
   ```bash
    Tasks.sql
   ```

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/AnshumanPadhi97/Tasks-Manager.git
   cd Tasks-Manager/backend
   ```

2. Install the required Python packages:

   ```bash
    pip install -r requirements.txt
   ```

3. Update the "db_connection" function in "app.py" with your database credentials.

4. Run the Flask app:

   ```bash
    python app.py
   ```

   The backend will be available at: http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
    cd Tasks-Manager/frontend
   ```

2. Install the required JavaScript packages:

   ```bash
    npm install
   ```

3. Run the React app:

   ```bash
    npm run dev
   ```

   The frontend will be available at http://localhost:3000

## API Documentation

The API is documented using Swagger. Access it at [http://localhost:5000/apidocs/](http://localhost:5000/apidocs/).

### Endpoints

- **GET /api/v1/tasks/**: Retrieve a list of tasks.
- **POST /api/v1/tasks/**: Create a new task.
- **GET /api/v1/tasks/<id>**: Retrieve a task by ID.
- **PUT /api/v1/tasks/<id>**: Update a task by ID.
- **DELETE /api/v1/tasks/<id>**: Delete a task by ID.

## Libraries Used

### Backend:

- Flask
- Flask-CORS
- PyODBC
- Flasgger
- SQL Server

### Frontend:

- React
- React Router DOM
- Axios
- Bootstrap

## Library Details

### Backend

#### Flask

Flask is a lightweight WSGI web application framework in Python. It is designed to make it easy to build web applications quickly and efficiently. Flask is known for its simplicity and flexibility, allowing developers to choose the tools they want to use.

- **Website**: [Flask](https://flask.palletsprojects.com/)

#### Flask-CORS

Flask-CORS is an extension for Flask that allows you to enable Cross-Origin Resource Sharing (CORS) in your Flask application. CORS is important when your frontend and backend are served from different origins.

- **Website**: [Flask-CORS](https://flask-cors.readthedocs.io/en/latest/)

#### PyODBC

PyODBC is a Python library that provides a convenient interface for accessing databases using ODBC (Open Database Connectivity). It allows you to connect to SQL databases, including SQL Server, and perform SQL queries from Python.

- **Website**: [PyODBC](https://github.com/mkleehammer/pyodbc)

#### SQL Server

SQL Server is a relational database management system developed by Microsoft. It is used to store and retrieve data as requested by other software applications, whether on the same computer or across a network.

- **Website**: [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

#### Flasgger

Flasgger is an extension for Flask that simplifies the process of adding Swagger UI documentation to your API. It allows you to document your API endpoints easily and provides an interactive interface for testing them.

- **Website**: [Flasgger](https://github.com/flasgger/flasgger)

### Frontend

#### React

React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, manage state efficiently, and handle user interactions.

- **Website**: [React](https://reactjs.org/)

#### React Router DOM

React Router DOM is a library that enables navigation among views in a React application. It allows developers to create dynamic routing and manage application state based on the URL.

- **Website**: [React Router](https://reactrouter.com/)

#### Axios

Axios is a promise-based HTTP client for JavaScript that can be used in both the browser and Node.js. It simplifies the process of making HTTP requests and handling responses.

- **Website**: [Axios](https://axios-http.com/)

### Bootstrap

Bootstrap is a popular front-end framework for developing responsive and mobile-first websites. It provides a collection of CSS and JavaScript components that enable developers to create modern, visually appealing UIs quickly.

- **Website**: [Bootstrap](https://getbootstrap.com/)
- **npm Package**: [Bootstrap on npm](https://www.npmjs.com/package/bootstrap)
