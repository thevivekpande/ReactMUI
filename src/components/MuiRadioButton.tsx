import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";

export const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel>Years of experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="5-7" value="5-7" />
        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
};
