import { Box, Typography } from "@mui/material";
import { MySlider } from "../components/Slider";
import { TaskCard } from "../components/TaskCard";
import { useEffect, useState } from "react";
import { getTask, getImg } from "../services/fetchBoredApi";
import { Loader } from "../components/Loader";

const Home = () => {
  const [task, setTask] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [taskType, setTaskType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetch = async () => {
      const data = await getTask();
      console.log(data);
      setTask(data);

      if (data) {
        const img = await getImg(data.activity);
        if (img) {
          setImageUrl(img.urls.regular);
        }
      }

      setIsLoading(false);
    };

    fetch();
  }, []);

  useEffect(() => {
    if (taskType) {
      setIsLoading(true);
      const fetch = async () => {
        const data = await getTask(taskType.type);
        setTask(data);

        if (data) {
          const img = await getImg(data.activity);
          if (img) {
            setImageUrl(img.urls.regular);
          }
        }

        setIsLoading(false);
      };

      fetch();
    }
  }, [taskType]);

  return (
    <Box mt={2}>
      <MySlider setTaskType={setTaskType} />

      <Typography component="h2" variant="h6" mt={1}>
        Random task:
      </Typography>

      {isLoading && <Loader />}

      {task && !isLoading && (
        <TaskCard task={task} imageUrl={imageUrl} setTaskType={setTaskType} />
      )}
    </Box>
  );
};

export default Home;
