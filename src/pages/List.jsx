import { Box, Button, Typography } from "@mui/material";
import { CardList } from "../components/Card";
import { MyListSlider } from "../components/MyListSlider";
import { useEffect, useState } from "react";
import { getTask } from "../services/DB";

const List = () => {
  const [active, setActive] = useState("slider");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getTask();
      setTasks(data);
    };

    fetch();
  }, []);

  return (
    <Box mt={2}>
      {active === "slider" ? (
        <Button onClick={() => setActive("list")}>open list</Button>
      ) : (
        <Button onClick={() => setActive("slider")}>open slider</Button>
      )}

      <Typography component="h2" variant="h5">
        Ideas in my list:
      </Typography>

      {active === "slider" && <MyListSlider />}
      {active === "list" && <CardList tasks={tasks} />}
    </Box>
  );
};

export default List;
