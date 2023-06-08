import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 3,
      }}
    >
      <CircularProgress />
    </Box>
  );
};
