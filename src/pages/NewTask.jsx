import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { newTask } from "../store/taskListSlice";

const NewTask = () => {
  const dispatch = useDispatch();
  const inputValueRef = useRef();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    inputValueRef.current = event.target.value;
  };

  const handleButtonClick = () => {
    if (!inputValueRef.current) {
      return;
    }
    dispatch(newTask({ title: inputValueRef.current, completed: false }));
    navigate("/");
  };

  return (
    <Container maxWidth={"sm"}>
      <Box
        width={"100%"}
        height={"100%"}
        marginTop={1}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyItems={"center"}
        gap={1}
      >
        <Typography variant="h4">New Task</Typography>
        <TextField
          variant="outlined"
          fullWidth
          size="small"
          onChange={handleInputChange}
        />
        <Box display={"flex"} gap={2}>
          <Button
            width={"100px"}
            variant="contained"
            sx={{ borderRadius: 0, width: "101px" }}
            onClick={handleButtonClick}
          >
            Add Task
          </Button>
          <Link to={"/"}>
            <Button variant="outlined" sx={{ borderRadius: 0, width: "101px" }}>
              Cancel
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default NewTask;
