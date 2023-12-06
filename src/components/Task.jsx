import { Delete } from "@mui/icons-material";
import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import React from "react";
import { deleteTask, updateTaskStatus } from "../store/taskListSlice";
import { useDispatch } from "react-redux";

const Task = ({ task, index }) => {
  console.log("render Task");

  const dispatch = useDispatch();

  return (
    <Box display={"flex"} alignItems={"center"}>
      <Checkbox
        size="medium"
        color="success"
        checked={task.completed}
        onClick={() => dispatch(updateTaskStatus({ index: index }))}
      />
      <Typography variant="h6" fontWeight={400} color={"#000"} flexGrow={1}>
        {task.title}
      </Typography>
      <IconButton onClick={() => dispatch(deleteTask({ index: index }))}>
        <Delete />
      </IconButton>
    </Box>
  );
};

export default Task;
