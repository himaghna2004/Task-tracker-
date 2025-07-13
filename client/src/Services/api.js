import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const registerUser = async (email, password) => {
  return axios.post(`${API_BASE}/auth/register`, { email, password });
};

export const loginUser = async (email, password) => {
  return axios.post(`${API_BASE}/auth/login`, { email, password });
};

const authHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

export const fetchTasks = async (userId) => {
  return axios.get(`${API_BASE}/tasks/${userId}`, authHeaders());
};

export const createTask = async (task) => {
  return axios.post(`${API_BASE}/tasks`, task, authHeaders());
};

export const updateTask = async (id, task) => {
  return axios.put(`${API_BASE}/tasks/${id}`, task, authHeaders());
};

export const deleteTask = async (id) => {
  return axios.delete(`${API_BASE}/tasks/${id}`, authHeaders());
};
