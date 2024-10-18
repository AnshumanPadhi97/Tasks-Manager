import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { saveTask, getTask, updateTask } from "../services/TaskService";

function Task() {
  const [taskName, setTaskName] = useState("");
  const [taskDetails, setTaskDetails] = useState("");

  const navigator = useNavigate();

  //get id from url
  const { id } = useParams();

  //get task and show for edit
  useEffect(() => {
    if (!id) return;
    getTask(id).then((res) => {
      let { taskname, taskdetails } = res.data;
      setTaskName(taskname);
      setTaskDetails(taskdetails);
    });
  }, [id]);

  const handleTaskName = (e) => {
    let taskname = e.target.value;
    if (!taskname) {
      alert("Task name field is mandatory");
      return;
    }
    setTaskName(taskname);
  };

  const handleSaveTask = (e) => {
    e.preventDefault();

    if (!taskName) {
      alert("Please enter task name before saving the task");
      return;
    }

    const task = {
      taskName,
      taskDetails,
    };

    //if id present then update else create new
    if (id) {
      updateTask(id, task).then((res) => {
        navigator("/");
      });
    } else {
      saveTask(task).then((res) => {
        navigator("/");
      });
    }
  };

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="card">
          <h2 className="text-center">Add Task</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Task Name *: </label>
                <input
                  type="text"
                  placeholder="Enter name of task"
                  name="taskname"
                  value={taskName}
                  className="form-control"
                  onChange={handleTaskName}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Task Details: </label>
                <input
                  type="textarea"
                  placeholder="Enter task details"
                  name="taskdetails"
                  value={taskDetails}
                  className="form-control"
                  onChange={(e) => setTaskDetails(e.target.value)}
                />
              </div>
              <button className="btn btn-success" onClick={handleSaveTask}>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
