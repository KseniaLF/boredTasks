import { Box, Typography } from "@mui/material";
import { MySlider } from "../components/Slider";
import { TaskCard } from "../components/TaskCard";
import { useEffect, useState } from "react";
import { getTask, getImg } from "../services/fetchBoredApi";

const Home = () => {
  const [task, setTask] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [taskType, setTaskType] = useState(null);

  useEffect(() => {
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
    };

    fetch();
  }, []);

  useEffect(() => {
    if (taskType) {
      const fetch = async () => {
        const data = await getTask(taskType.type);
        setTask(data);

        if (data) {
          const img = await getImg(data.activity);
          if (img) {
            setImageUrl(img.urls.regular);
          }
        }
      };

      fetch();
    }
  }, [taskType]);

  return (
    <Box mt={2}>
      <MySlider setTaskType={setTaskType} />

      <Typography>Random task:</Typography>
      {task && <TaskCard task={task} imageUrl={imageUrl} />}
    </Box>
  );
};

export default Home;
