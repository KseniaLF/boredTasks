import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { activities } from "../constants/activities";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export const CardBox = () => {
  return (
    <>
      <List
        sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {activities.map((item) => (
          <ListItem
            sx={{
              width: 250,
              height: 140,
            }}
            key={item.type}
          >
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
                <Typography>{item.description}</Typography>
              </CardContent>

              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button size="small">{item.type}</Button>
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
    </>
  );
};
