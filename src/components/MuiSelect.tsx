import React from "react";
import { Box, TextField, MenuItem, Stack } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  const handleAntherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Stack spacing={2}>
      <Box width="250px">
        <TextField
          label="select country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
      <Box width="250px">
        <TextField
          label="select countries"
          select
          value={countries}
          onChange={handleAntherChange}
          SelectProps={{ multiple: true }}
          fullWidth
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};

// rafc
