import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width={"300px"}>
      <Card elevation={4}>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            obcaecati nostrum quibusdam explicabo pariatur voluptatem
            perferendis eum ex quo voluptatum.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
