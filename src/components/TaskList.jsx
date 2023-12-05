import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Task from "./Task";

const TaskList = () => {
  return (
    <Container>
      <Box textAlign={"center"} bgcolor={"primary.main"} padding={1}>
        <Typography variant="h5" color={"#fff"}>
          Tasks List
        </Typography>
      </Box>
      <Box>
        <Task />
      </Box>
    </Container>
  );
};

export default TaskList;
