// frontend/src/services/api.js
import axios from "axios";
const port = process.env.PORT || 4002;
const API_URL = `http://localhost:${port}/api/users`;

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
