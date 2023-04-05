import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MuiRating = () => {
  const [rating, setRating] = useState<number | null>(3);
  console.log({ rating });
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRating(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={rating}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        highlightSelectedOnly
      />
    </Stack>
  );
};
