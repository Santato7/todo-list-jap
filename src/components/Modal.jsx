import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import React from "react";

const Modal = ({ children, open, onClose, title, prompt, modalSize }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={modalSize} fullWidth>
      <DialogContent>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={3}
        >
          <Typography variant="h3">{title}</Typography>
          <Typography variant="h6">{prompt}</Typography>
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
