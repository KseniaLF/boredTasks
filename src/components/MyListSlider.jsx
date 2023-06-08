import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  ListItem,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { handleUpdateResolveStatus } from "../helpers/handleUpdateResolveStatus";

export const MyListSlider = ({ tasks, setTasks }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const itemsPerPage = 3;

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const handlePrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + tasks.length) % tasks.length
    );
  };

  const getVisibleItems = () => {
    const startIndex =
      (activeIndex + tasks.length - Math.floor(itemsPerPage / 2)) %
      tasks.length;
    const endIndex = (startIndex + itemsPerPage) % tasks.length;
    if (startIndex < endIndex) {
      return tasks.slice(startIndex, endIndex);
    } else {
      return [...tasks.slice(startIndex), ...tasks.slice(0, endIndex)];
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        mt: 5,
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        {getVisibleItems().map((item, index) => (
          <Grid item key={item["_id"]}>
            <ListItem
              sx={{
                width: 250,
                height: 140,
                cursor: "pointer",

                ...(index === 1 && {
                  width: 500,
                  height: "100%",
                }),
              }}
            >
              <Box
                onClick={() => handleUpdateResolveStatus(item["_id"], setTasks)}
              >
                <Card
                  onMouseEnter={() => setHovered(item["_id"])}
                  onMouseLeave={() => setHovered(false)}
                  sx={{
                    p: 1,
                    ...(index === 1 && {
                      boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
                    }),
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow:
                        "0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", p: 1, pb: 0 }}>
                    <Typography mb={1}>{item.activity}</Typography>

                    {index === 1 && (
                      <img
                        style={{ borderRadius: 2 }}
                        width={"100%"}
                        src={item.image}
                        alt={item.type}
                      />
                    )}
                  </CardContent>

                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button size="small">
                      {hovered && hovered === item["_id"]
                        ? `Mark as completed`
                        : item.type}
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </ListItem>
          </Grid>
        ))}
      </Grid>

      <IconButton
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={handlePrevious}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={handleNext}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};
