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
   git clone https://github.com/AnshumanPadhi97/task-management-app.git
   cd task-management-app/backend
   ```

2. Install the required Python packages:

   ```bash
    pip install -r requirements.txt
   ```

3. Update the db_connection function in app.py with your database credentials.

4. Run the Flask app:
   
   ```bash
    python app.py
   ```
   
   The backend will be available at: http://localhost:5000
