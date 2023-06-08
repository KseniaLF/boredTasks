import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { activities as items } from "../constants/activities";
import { StyledLink } from "../constants/StyledLink";

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
    <div style={{ position: "relative" }}>
      <Typography component="h1" variant="h6">
        Choose fresh ideas to do:
      </Typography>

      <Grid container alignItems="center" justifyContent="center">
        {getVisibleItems().map((item, index) => (
          <Grid item key={index}>
            <ListItem
              sx={{
                width: 250,
                height: 140,
                ...(index === 1 && {
                  boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
                }),
              }}
            >
              <StyledLink
                onClick={() => {
                  console.log(123);
                  const randomParam = Math.random();
                  setTaskType({ type: item.type, randomParam });
                }}
              >
                <Card
                  sx={{
                    //   backgroundColor: "black",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow:
                        "0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", p: 1, pb: 0 }}>
                    <Typography>{item.description}</Typography>
                  </CardContent>

                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button size="small">{item.type}</Button>
                  </CardActions>
                </Card>
              </StyledLink>
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
    </div>
  );
};
