import { Alert } from "@mui/material";

export const AlertComponent = ({ text }) => {
  return <Alert severity="success">{text}</Alert>;
};
