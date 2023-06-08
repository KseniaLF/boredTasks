import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/material";
import { handleUpdateResolveStatus } from "../helpers/handleUpdateResolveStatus";
import { useState } from "react";

export const CardList = ({ tasks, setTasks }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <List
        sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {tasks.map(({ _id: id, ...item }) => (
          <ListItem
            sx={{
              width: 300,
              height: 300,
            }}
            key={id}
          >
            <Card
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => handleUpdateResolveStatus(id, setTasks)}
              sx={{
                height: "100%",
                width: "100%",

                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  p: 1,
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 1, pb: 0 }}>
                  <Typography mb={1}>{item.activity}</Typography>

                  <img src={item.image} alt={item.type} height={150} />
                </CardContent>

                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Button size="small">
                    {hovered && hovered === id
                      ? `Mark as completed`
                      : item.type}
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
