import { useState, forwardRef, useImperativeHandle } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import { Box, useTheme, useMediaQuery } from "@mui/material";

const SearchDialogue = ({}, ref) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width: 600px)");

    const handleClick = () => setOpen(!open);

    useImperativeHandle(
        ref,
        () => {
            return {
                alterSearchDialogueState: () => handleClick(),
            };
        },
        []
    );

    return (
        <Dialog
            open={open}
            onClose={handleClick}
            sx={{
                "& .MuiDialog-paper": {
                    mt: "-1rem",
                    width: isMobile ? "100vw" : "60%",
                    height: "70vh",
                    borderRadius: "0.8rem",
                },
                "& .MuiBackdrop-root": {
                    backdropFilter: "blur(0.3rem)",
                },
                "& .MuiDialog-paperScrollPaper": {
                    maxWidth: "100vw",
                },
            }}
        >
            <Box
                width="100%"
                height="100%"
                justifyItems="center"
                sx={{
                    backgroundColor:
                        theme.palette.mode === "dark" &&
                        theme.palette.background.alt,
                    flexDirection: "column",
                    display: "flex",
                    boxShadow: theme.palette.mode === "dark" && "none",
                }}
            >
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClick}>Cancel</Button>
                    <Button onClick={handleClick}>Subscribe</Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

export default forwardRef(SearchDialogue);
