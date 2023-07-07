import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}
export interface SnackbarMessage {
  message: string;
  key: number;
}

export interface State {
  open: boolean;
  snackPack: readonly SnackbarMessage[];
  messageInfo?: SnackbarMessage;
}

const Modaltooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [snackPack, setSnackPack] = React.useState<readonly SnackbarMessage[]>(
    []
  );
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState<
    SnackbarMessage | undefined
  >(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message: string) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };
  const snackbarMessage = "Source code copied!";

  return (
    <>
      <span className="tooltip-container">
        <span className="tooltip-item" onClick={handleClick(snackbarMessage)}>
          {" "}
          {children}{" "}
        </span>
        <span className="tooltip-text">{text}</span>
      </span>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#0e1015", // Set the background color to white without opacity
            opacity: 1,
            fontFamily: "inherit",
            color: "#fff", // Set the text color to black
            "& .MuiSnackbarContent-message": {
              fontSize: "1.3rem", // Set the text size to a bigger value (1.2rem)
            },
          },
        }}
      />
    </>
  );
};

export default Modaltooltip;
