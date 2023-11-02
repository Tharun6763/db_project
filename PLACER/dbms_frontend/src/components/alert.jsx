import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function BasicAlerts({ message, severity }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={severity}>{message}</Alert>
    </Stack>
  );
}   
