import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_DB_BASE_URL;

export const getTask = async (status) => {
  const query = status ? "true" : "false";
  const response = await axios.get(`/tasks?resolved=${query}`);
  return response.data;
};

export const addTask = async (body) => {
  const response = await axios.post(`/tasks`, body);
  return response.data;
};

export const updateResolveStatus = async (id, body) => {
  const response = await axios.patch(`/tasks/${id}/resolved`, body);
  return response.data;
};
