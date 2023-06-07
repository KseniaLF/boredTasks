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

export const MySlider = ({ setTaskType }) => {
  const [activePage, setActivePage] = useState(0);

  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 830px)");
  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;

  const handlePrevious = () => {
    setActivePage((prevPage) => (prevPage === 0 ? 0 : prevPage - 1));
  };

  const handleNext = () => {
    setActivePage((prevPage) =>
      prevPage === Math.ceil(items.length / itemsPerPage) - 1
        ? prevPage
        : prevPage + 1
    );
  };

  const startIndex = activePage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div style={{ position: "relative" }}>
      <Typography>Choose type of the activity:</Typography>

      <Grid container alignItems="center" justifyContent="center">
        {visibleItems.map((item, index) => (
          <Grid item key={index}>
            <ListItem
              sx={{
                width: 250,
                height: 140,
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

                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    size="small"
                    onClick={() => {
                      const randomParam = Math.random();
                      setTaskType({ type: item.type, randomParam });
                    }}
                  >
                    {item.type}
                  </Button>
                </CardActions>
              </Card>
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
        disabled={activePage === 0}
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
        disabled={activePage === Math.ceil(items.length / itemsPerPage) - 1}
      >
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
};
