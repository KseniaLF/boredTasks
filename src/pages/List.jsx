import { Box, Typography } from "@mui/material";
import { CardList } from "../components/Card";

const List = () => {
  return (
    <Box mt={2}>
      <Typography component="h2" variant="h5">
        Ideas in my list:
      </Typography>

      <CardList />
    </Box>
  );
};

export default List;
