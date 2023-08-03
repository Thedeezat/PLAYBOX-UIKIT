import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  openSnackbar: boolean;
  setOpenSnackbar: (openSnackbar: boolean) => void;
  snackbarMessage: string;
}

export default function SnackbarComponent({
  openSnackbar,
  setOpenSnackbar,
  snackbarMessage,
}: Props) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="medium"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="medium" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackbarMessage && snackbarMessage}
        action={action}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#0e1015", // Set the background color to white without opacity
            opacity: 1,
            fontFamily: "inherit",
            color: "#fff", // Set the text color to black
            "& .MuiSnackbarContent-message": {
              fontSize: "1.4rem", // Set the text size to a bigger value (1.2rem)
            },
          },
        }}
      />
    </div>
  );
}
