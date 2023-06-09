import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Grid, Hidden, Typography } from "@mui/material";
import { getTask } from "../services/DB";
import { formatDate } from "../helpers/formatDate";
import { Loader } from "../components/Loader";
import { useData } from "../hooks/useData";
import { useCallback } from "react";

const Completed = () => {
  const fetchDataCallback = useCallback(() => getTask("resolved"), []);
  const { data, isLoading } = useData(fetchDataCallback);

  return (
    <>
      <Typography variant="h5" mt={3}>
        Completed challenges:
      </Typography>

      {isLoading && <Loader />}

      {!isLoading && (
        <TableContainer component={Box} mt={2}>
          <Grid container>
            <Grid item xs={12}>
              <Hidden smDown>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography fontSize={16}>Title</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={16}>Type</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontSize={16}>When</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {data.map((row) => (
                      <TableRow
                        key={row["_id"]}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Typography fontSize={16}>{row.activity}</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography fontSize={16}>{row.type}</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography fontSize={16}>
                            {formatDate(row.updatedAt)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Hidden>

              <Hidden smUp>
                {data.map((row) => (
                  <Box key={row["_id"]} mt={2}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {row.activity}
                    </Typography>
                    <Typography>{row.type}</Typography>
                    <Typography>{formatDate(row.updatedAt)}</Typography>
                  </Box>
                ))}
              </Hidden>
            </Grid>
          </Grid>
        </TableContainer>
      )}
    </>
  );
};

export default Completed;
