import { AppBar, Box, Switch, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleListFilter } from "../store/taskListFilterSlice";
import { Link } from "react-router-dom";

export default function TopBar() {
  const filtered = useSelector((state) => state.taskListFilter.value);
  const dispatch = useDispatch();

  return (
    <AppBar
      position="static"
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to={"/"}>
        <Typography
          variant="caption"
          fontSize={22}
          fontWeight={400}
          padding={2}
        >
          Todos Manager
        </Typography>
      </Link>
      <Box display={"flex"} alignItems={"center"} paddingRight={"30px"}>
        <Switch
          color="default"
          checked={filtered}
          onClick={() => dispatch(toggleListFilter())}
        />
        <Typography width={"100px"} textAlign={"center"} fontSize={16}>
          {filtered ? "Showing Only Completed" : "Showing All Tasks"}
        </Typography>
      </Box>
    </AppBar>
  );
}
