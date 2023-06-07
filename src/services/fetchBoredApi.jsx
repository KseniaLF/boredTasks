import axios from "axios";

export const getTask = async () => {
  const response = await axios.get(`http://www.boredapi.com/api/activity/`);
  return response.data;
};

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export const getImg = async (title) => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/random?query=${title}&client_id=${UNSPLASH_KEY}`
  );
  return response.data;
};
