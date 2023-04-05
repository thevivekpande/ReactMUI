import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={8}>
      <Stack
        direction={"row"}
        spacing={2}
        sx={{ border: "1px solid" }}
        p={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          Some Text
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        >
          Some more text
        </Box>
      </Stack>
      <Grid container my={4} rowSpacing={1} columnSpacing={2}>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
      <Paper sx={{ padding: "20px" }} elevation={4}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem
        harum tempore aliquam voluptates placeat, facere blanditiis possimus
        iure delectus aspernatur? Fugiat iste harum commodi facilis eos iusto
        amet ipsam quis accusantium alias. Aperiam reprehenderit alias impedit,
        ipsam debitis nobis ducimus odio magni nam qui? Voluptatibus earum sit
        nemo blanditiis?
      </Paper>
    </Paper>
  );
};
