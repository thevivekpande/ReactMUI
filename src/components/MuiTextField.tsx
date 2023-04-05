import React, { useState } from "react";
import { Stack, TextField, InputAdornment, Box } from "@mui/material";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="name" />
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Form Input"
          size="medium"
          color="success"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone."
          }
        />
        <TextField
          label="password"
          type="password"
          size="medium"
          helperText="Do not share your password with anyone"
          disabled
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
