import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { updateResolveStatus } from "../services/DB";

export const CardList = ({ tasks }) => {
  const handleUpdateResolveStatus = (id) => {
    const fetch = async () => {
      const data = await updateResolveStatus(id, { resolved: true });
      console.log(data);
    };

    fetch();
  };

  return (
    <div style={{ position: "relative" }}>
      <List
        sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {tasks.map(({ _id: id, ...item }) => (
          <ListItem
            sx={{
              width: 250,
              height: 140,
            }}
            key={id}
          >
            <Card
              sx={{
                height: "100%",
                width: "100%",

                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
              onClick={() => handleUpdateResolveStatus(id)}
            >
              <CardContent sx={{ textAlign: "center", p: 1, pb: 0 }}>
                <Typography>{item.activity}</Typography>
              </CardContent>

              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button size="small">{item.type}</Button>
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
