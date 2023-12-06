import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NewTask = () => {
  return (
    <Container maxWidth={"sm"}>
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyItems={"center"}
        gap={1}
      >
        <Typography variant="h4">New Task</Typography>
        <TextField variant="outlined" fullWidth size="small" />
        <Link to={"/"}>
          <Button
            variant="contained"
            endIcon={<AddIcon />}
            sx={{ borderRadius: 0 }}
          >
            New Task
          </Button>
        </Link>
        <Link to={"/"}>
          <Button
            variant="contained"
            endIcon={<AddIcon />}
            sx={{ borderRadius: 0 }}
          >
            New Task
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NewTask;
