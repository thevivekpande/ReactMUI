import React, { useState } from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

export const MuiChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip != chipToDelete));
  };
  return (
    <Stack spacing={1} direction={"row"}>
      <Chip label="chip" color="primary" size="small" />
      <Chip label="chip" color="primary" size="medium" icon={<FaceIcon />} />
      <Chip
        label="chip-outlined"
        color="secondary"
        size="medium"
        variant="outlined"
      />
      <Chip
        label="chip-outlined"
        color="secondary"
        size="medium"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="click" color="success" onClick={() => alert("Clicked")} />
      <Chip
        label="delete"
        color="error"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Deleted")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
