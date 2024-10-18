from flask import Flask, request, jsonify
from flask_cors import CORS
import pyodbc
from flasgger import Swagger

app = Flask(__name__)

CORS(app, supports_credentials=True)

swagger = Swagger(app)


def db_connection():
    conn = None
    try:
        server = ''  # put your server name here
        database = ''  # put your database name here
        user = ''  # put your sql authentication credentials here
        password = ''
        connectionString = (
            f"DRIVER={{ODBC Driver 17 for SQL Server}};"
            f"SERVER={server};"
            f"DATABASE={database};"
            f"UID={user};"
            f"PWD={password}"
        )
        conn = pyodbc.connect(connectionString)
    except Exception as e:
        print(e)
    return conn


@app.before_request
def before_request():
    headers = {'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
               'Access-Control-Allow-Headers': 'Content-Type'}
    if request.method.lower() == 'options':
        return jsonify(headers), 200


@app.route('/api/v1/tasks/', methods=['GET'])
def tasks():
    """Retrieve a list of tasks.
    ---
    responses:
      200:
        description: A list of task objects retrieved successfully
        schema:
          type: array
          items:
            type: object
            properties:
              id:
                type: integer
                example: 1
              taskname:
                type: string
                example: "Sample Task"
              taskdetails:
                type: string
                example: "Details of the sample task."
    """
    conn = db_connection()
    cursor = conn.cursor()
    cursor = conn.execute("SELECT * FROM Tasks")
    tasks = []
    for row in cursor.fetchall():
        tasks.append({
            'id': row[0],
            'taskname': row[1],
            'taskdetails': row[2]
        })
    conn.close()
    return jsonify(tasks), 200


@app.route('/api/v1/tasks/', methods=['POST'])
def save_tasks():
    """Create a new task.
    ---
    parameters:
      - name: task
        in: body
        required: true
        schema:
          type: object
          properties:
            taskName:
              type: string
              example: "Sample Task"
            taskDetails:
              type: string
              example: "Details of the sample task."
    responses:
      201:
        description: Task created successfully
        schema:
          type: object
          properties:
            message:
              type: string
              example: "Task with name: Sample Task has been saved successfully"
      400:
        description: Bad request if task data is missing
        schema:
          type: object
          properties:
            error:
              type: string
              example: "Missing taskName or taskDetails"
    """
    conn = db_connection()
    cursor = conn.cursor()
    data = request.get_json()
    task_name = data.get("taskName")
    task_details = data.get("taskDetails")
    cursor.execute(
        """INSERT INTO Tasks (TaskName, TaskDetails) VALUES (?, ?)""", (task_name, task_details))
    conn.commit()
    conn.close()
    return f"Task with name: {task_name} has been saved successfully", 201


@app.route('/api/v1/tasks/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def manage_task(id):
    """Manage Task API endpoint for retrieving, updating, and deleting a task.
    ---
    parameters:
      - name: id
        in: path
        type: integer
        required: true
    responses:
      200:
        description: Task object retrieved or task deleted successfully
        schema:
          type: object
          properties:
            taskname:
              type: string
              example: "Sample Task"
            taskdetails:
              type: string
              example: "Details of the sample task."
      201:
        description: Task updated successfully
        schema:
          type: string
          example: "Task has been updated successfully"
      404:
        description: Task not found
    """
    conn = db_connection()
    cursor = conn.cursor()

    if id == 0:
        return "404, NOT FOUND"

    if request.method == 'GET':
        task = None
        cursor = cursor.execute(f"select * from Tasks where id={id}")
        rows = cursor.fetchall()
        for r in rows:
            task = r

        if task is None:
            return "404, NOT FOUND"

        conn.close()
        return jsonify({"taskname": task[1], "taskdetails": task[2]}), 200
    elif request.method == 'PUT':
        data = request.get_json()
        task_name = data.get("taskName")
        task_details = data.get("taskDetails")
        cursor.execute(
            "UPDATE Tasks SET TaskName = ?, TaskDetails = ? WHERE id = ?", task_name, task_details, id)
        conn.commit()
        conn.close()
        return "Task has been updated successfully", 201
    elif request.method == 'DELETE':
        conn.execute(f"""delete from Tasks where id={id}""")
        conn.commit()
        conn.close()
        return "The task has been deleted successfully", 200


if __name__ == '__main__':
    app.run(debug=True)
