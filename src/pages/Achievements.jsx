import { getAchievements } from "../services/DB";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Loader } from "../components/Loader";
import { useData } from "../hooks/useData";

const Achievements = () => {
  const theme = useTheme();
  const { data, isLoading } = useData(getAchievements);

  return (
    <>
      <Typography variant="h5" mt={3} mb={3}>
        Achievements
      </Typography>

      {isLoading && <Loader />}

      {!isLoading && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {data &&
            data.map((achive) => (
              <Card
                sx={{
                  width: 150,
                  height: 150,
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  borderRadius: "50%",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={achive.type}
              >
                <CardContent sx={{ textAlign: "center", fontSize: 18 }}>
                  <Typography fontSize={16}>{achive.type}</Typography>
                  <Typography fontSize={20}>{achive.price}</Typography>
                </CardContent>
              </Card>
            ))}
        </Box>
      )}
    </>
  );
};

export default Achievements;
