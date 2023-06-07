import { Box, Button, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export const TaskCard = ({ task, imageUrl }) => {
  return (
    <Box mt={2}>
      <Card
        sx={{
          height: "100%",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow:
              "0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <CardContent sx={{ textAlign: "center", p: 1, pb: 0 }}>
          <Typography>{task.activity}</Typography>

          {imageUrl && <img src={imageUrl} alt={task.type} width={300} />}
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small">{task.type}</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
