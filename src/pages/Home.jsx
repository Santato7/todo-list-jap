import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Container } from "@mui/material";
import React from "react";
import TaskList from "../components/List";
import { useSelector } from "react-redux";
import Task from "../components/Task";

export const Home = () => {
  const taskList = useSelector((state) => state.taskList.value);

  return (
    <Container
      maxWidth={"md"}
      sx={{
        display: "flex",
        marginTop: 2,
      }}
    >
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={1}
      >
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          sx={{ borderRadius: 0 }}
        >
          New Task
        </Button>
        <TaskList title="Tasks List">
          {taskList.map((task, index) => (
            <Task key={index} task={task} index={index} />
          ))}
        </TaskList>
      </Box>
    </Container>
  );
};
