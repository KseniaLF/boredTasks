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
import { activities as items } from "../constants/activities";

export const MyListSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemsPerPage = 3;

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const getVisibleItems = () => {
    const startIndex =
      (activeIndex + items.length - Math.floor(itemsPerPage / 2)) %
      items.length;
    const endIndex = (startIndex + itemsPerPage) % items.length;
    if (startIndex < endIndex) {
      return items.slice(startIndex, endIndex);
    } else {
      return [...items.slice(startIndex), ...items.slice(0, endIndex)];
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
          <Grid item key={index}>
            <ListItem
              sx={{
                width: 250,
                height: 140,
                ...(index === 1 && {
                  width: 500,
                  height: "100%",
                }),
              }}
            >
              <Box
                onClick={() => {
                  console.log(item);
                }}
              >
                <Card
                  sx={{
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
                    <Typography mb={1}>{item.description}</Typography>

                    {index === 1 && (
                      <img
                        style={{ borderRadius: 2 }}
                        width={"100%"}
                        src="https://cdn.pixabay.com/photo/2023/05/28/13/15/helicopter-8023696_1280.jpg"
                        alt={item.type}
                      />
                    )}
                  </CardContent>

                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button size="small">{item.type}</Button>
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
