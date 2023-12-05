import React from "react";
import { Box, Container, Typography } from "@mui/material";

const TaskList = ({ children, title }) => {
  console.log("render TaskList");

  return (
    <Container>
      <Box textAlign={"center"} bgcolor={"primary.main"} padding={1}>
        <Typography variant="h5" color={"#fff"}>
          {title}
        </Typography>
      </Box>
      <Box border={"2px solid #ddd"} borderTop={"none"}>
        {children}
      </Box>
    </Container>
  );
};

export default TaskList;