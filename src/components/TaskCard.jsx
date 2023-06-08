import { Box, Button, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";

export const TaskCard = ({ task, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          width: 400,
          height: "100%",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow:
              "0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <CardContent sx={{ textAlign: "center", p: 1 }}>
          <Typography>{task.activity}</Typography>

          {imageUrl && <img src={imageUrl} alt={task.type} width={"100%"} />}
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small">
            {hovered ? `Add to the collection` : task.type}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
