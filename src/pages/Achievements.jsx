import { useEffect, useState } from "react";
import { getAchievements } from "../services/DB";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Achievements = () => {
  const [achives, setAchives] = useState([]);

  const theme = useTheme();

  useEffect(() => {
    const fetch = async () => {
      const data = await getAchievements("resolved");
      setAchives(data);
    };
    fetch();
  }, []);

  return (
    <>
      <Typography variant="h5" mt={3} mb={3}>
        Achievements
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {achives.map((achive) => (
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
    </>
  );
};

export default Achievements;
