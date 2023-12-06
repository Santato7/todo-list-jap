import { Delete } from "@mui/icons-material";
import { Box, Button, Checkbox, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { deleteTask, updateTaskStatus } from "../store/taskListSlice";
import { useDispatch } from "react-redux";
import Modal from "./Modal";

const Task = ({ task, index }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleDelete = () => {
    dispatch(deleteTask({ index: index }));
    handleModal();
  };

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
      <IconButton onClick={handleModal}>
        <Delete />
      </IconButton>

      <Modal
        open={openModal}
        onClose={handleModal}
        title={"Delete Task"}
        prompt={"Are you sure?"}
        modalSize={"sm"}
      >
        <Box display={"flex"} gap={2}>
          <Button
            variant="contained"
            onClick={handleDelete}
            sx={{ width: "101px" }}
          >
            Yes
          </Button>
          <Button
            variant="outlined"
            onClick={handleModal}
            sx={{ width: "101px" }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Task;
