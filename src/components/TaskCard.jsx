import { Box, Button, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import { addTask } from "../services/DB";

export const TaskCard = ({ task, imageUrl, setTaskType }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const taskData = {
      activity: task.activity,
      type: task.type,
      accessibility: task.accessibility,
      price: task.price,
      image: imageUrl,
    };

    const fetch = async () => {
      try {
        await addTask(taskData);

        const randomParam = Math.random();
        setTaskType({ type: task.type, randomParam });
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  };

  return (
    <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
        sx={{
          width: 400,
          height: "100%",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow:
              "0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <CardContent sx={{ textAlign: "center", p: 1 }}>
          <Typography mb={1}>{task.activity}</Typography>

          {imageUrl && <img src={imageUrl} alt={task.type} width={"100%"} />}
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small">{hovered ? `Add to my list` : task.type}</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
