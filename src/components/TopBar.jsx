import { AppBar, Box, Switch, Typography } from "@mui/material";
import React from "react";

export default function TopBar() {
  return (
    <AppBar
      position="static"
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="caption" fontSize={22} fontWeight={400} padding={2}>
        Todos Manager
      </Typography>
      <Box display={"flex"} alignItems={"center"} paddingRight={"30px"}>
        <Switch color="default" />
        <Typography width={"100px"} textAlign={"center"} fontSize={16}>
          Showing Only Completed
        </Typography>
      </Box>
    </AppBar>
  );
}
