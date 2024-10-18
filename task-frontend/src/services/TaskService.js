import axios from "axios";

const base_url = "http://localhost:5000/api/v1/tasks";

export const listTasks = () => axios.get(base_url);

export const saveTask = (task) => axios.post(base_url, task);

export const getTask = (id) => axios.get(`${base_url}/${id}`);

export const updateTask = (id, task) => axios.put(`${base_url}/${id}`, task);

export const deleteTask = (id) => axios.delete(`${base_url}/${id}`);
