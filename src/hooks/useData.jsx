import { useState, useEffect } from "react";

export const useData = (fetchData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetch = async () => {
      try {
        const result = await fetchData();
        setData(result);

        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsLoading(false);
      }
    };

    fetch();
  }, [fetchData]);

  return { data, isLoading, setData };
};
