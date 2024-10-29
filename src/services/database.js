import axios from 'axios';

const baseUrl = "http://localhost:3001/api/tasks";

// get all task
const getAllTask = () => {
  const request = axios.get(baseUrl).then(response => response.data);
  return request;
}


// get task by id
const getTask = (id) => {
  const request = axios.get(`${baseUrl}/${id}`).then(response => response.data);
  return request;
}


// add new task
const addTask = (task) => {
  const request = axios.post(`${baseUrl}`, task).then(response => response.data);
  return request;
}


// delete task by id
const deleteTask = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`).then(response => response.data);
  return request;
}


// update task by id
const updateTask = (task) => {
  const request = axios.put(`${baseUrl}/${task.id}`, task).then(response => response.data);
  return request;
}


export { getAllTask, getTask, addTask, deleteTask, updateTask };