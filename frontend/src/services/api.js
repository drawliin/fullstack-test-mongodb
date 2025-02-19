// frontend/src/services/api.js
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4002/api';


export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(`${API_URL}/users`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/users/${id}`);
  return response.data;
};
