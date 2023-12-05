import { Delete } from "@mui/icons-material";
import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import React from "react";

const Task = () => {
  return (
    <Box display={"flex"} alignItems={"center"} bgcolor={"#efefef"}>
      <Checkbox size="medium" color="success" />
      <Typography variant="h6" fontWeight={400} color={"#000"} flexGrow={1}>
        Testando
      </Typography>
      <IconButton>
        <Delete />
      </IconButton>
    </Box>
  );
};

export default Task;
