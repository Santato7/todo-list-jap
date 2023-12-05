import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = () => {
  const taskList = useSelector((state) => state.taskList.value);
  console.log("render TaskList");

  return (
    <Container>
      <Box textAlign={"center"} bgcolor={"primary.main"} padding={1}>
        <Typography variant="h5" color={"#fff"}>
          Tasks List
        </Typography>
      </Box>
      <Box border={"2px solid #ddd"} borderTop={"none"}>
        {taskList.map((task, index) => (
          <Task key={index} task={task} index={index} />
        ))}
      </Box>
    </Container>
  );
};

export default TaskList;
