import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

export const Home = () => {
  return (
    <Container
      maxWidth={"md"}
      sx={{
        display: "flex",
        marginTop: "20px",
      }}
    >
      <Box width={"100%"} display={"flex"} alignItems={"center"}>
        <Button variant="contained" endIcon={<AddIcon />}>
          New Task
        </Button>
        <Box maxWidth={"100%"} textAlign={"center"} bgcolor={"primary.main"}>
          <Typography variant="h5" color={"#fff"}>
            Tasks List
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
