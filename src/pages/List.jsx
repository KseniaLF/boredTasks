import { Box, Button, Typography } from "@mui/material";
import { CardList } from "../components/Card";
import { MyListSlider } from "../components/MyListSlider";
import { useState } from "react";
import { getTask } from "../services/DB";
import { Loader } from "../components/Loader";
import { useData } from "../hooks/useData";

const List = () => {
  const [active, setActive] = useState("slider");
  const { data, isLoading, setData } = useData(getTask);

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

      {isLoading && <Loader />}

      {active === "slider" && !isLoading && (
        <MyListSlider tasks={data} setTasks={setData} />
      )}
      {active === "list" && !isLoading && (
        <CardList tasks={data} setTasks={setData} />
      )}
    </Box>
  );
};

export default List;
