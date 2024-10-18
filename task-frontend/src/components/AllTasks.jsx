import React, { useEffect, useState } from "react";
import { listTasks, deleteTask } from "../services/TaskService";
import { useNavigate } from "react-router-dom";

function AllTasks() {
  const [tasks, setTasks] = useState([]);

  const navigator = useNavigate();

  const handleAddTask = () => {
    navigator("/add-task");
  };

  const handleUpdateTask = (taskid) => {
    navigator(`/edit-task/${taskid}`);
  };

  const handleDeleteTask = (taskid) => {
    deleteTask(taskid).then((res) => {
      reloadTasks();
    });
  };

  const reloadTasks = () => {
    listTasks()
      .then((res) => {
        setTasks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    reloadTasks();
  }, []);

  return (
    <div className="container">
      <h2>List of Tasks</h2>
      <button className="btn btn-primary mb-3" onClick={() => handleAddTask()}>
        Add Task
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Task Name</th>
            <th>Task Details</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.taskname}</td>
              <td>{task.taskdetails}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleUpdateTask(task.id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllTasks;
