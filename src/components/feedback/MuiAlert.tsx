import React from "react";
import { Stack, Alert, AlertTitle, Button } from "@mui/material";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is an warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="success">This is an success alert</Alert>

      <Alert variant="outlined" severity="error">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an success alert
      </Alert>

      <Alert variant="filled" severity="error" onClose={() => alert("alert")}>
        <AlertTitle>error</AlertTitle> This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>info</AlertTitle> This is an info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        action={
          <Button color="inherit" size="small">
            Undo
          </Button>
        }
      >
        <AlertTitle>success</AlertTitle>
        This is an success alert
      </Alert>
    </Stack>
  );
};
