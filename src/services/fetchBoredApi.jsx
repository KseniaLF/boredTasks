import axios from "axios";

export const getTask = async (taksType) => {
  const query = taksType && taksType !== "random" ? `?type=${taksType}` : "/";

  const response = await axios.get(
    `https://www.boredapi.com/api/activity${query}`
  );

  return response.data;
};

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export const getImg = async (title) => {
  if (UNSPLASH_KEY) {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?query=${title}&client_id=${UNSPLASH_KEY}`
    );
    return response.data;
  }
};
