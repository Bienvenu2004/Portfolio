import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { Box, useMediaQuery, Modal, Slide, Backdrop } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchModalFooter from "./searchmodalcomponents/SearchModalFooter";
import SearchModalContent from "./searchmodalcomponents/SearchModalContent";
import SearchModalHeader from "./searchmodalcomponents/SearchModalHeader";
import CustomDivider from "./UI/CustomDivider";

const useStyles = makeStyles((theme) => ({
    modal: {
        position: "fixed",
        top: "64px",
        width: "683px",
        height: "504px",
        backgroundColor:
            theme.palette.mode === "dark" && theme.palette.background.alt,
        boxShadow: 24,
        p: 4,
        backdropFilter: "blur(5px)",
    },
    paper: {
        backgroundColor:
            theme.palette.mode === "dark" ? "rgb(1, 20, 50, 1)" : "#fff",
        border:
            theme.palette.mode === "dark" && "1px solid rgba(1, 87, 155, 0.8)",
        boxShadow: theme.shadows[5],
        padding: "0px",
        transition: "top 0.3s ease-in-out",
        zIndex: 100,
        width: "683px",
        height: "504px",
        position: "relative",
    },
    open: {
        top: "64px",
    },
}));

const SearchDialogue = ({}, ref) => {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 720px)");
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    const handleClick = () => setOpen(!open);

    useImperativeHandle(
        ref,
        () => {
            return {
                alterSearchModalState: () => handleClick(),
            };
        },
        []
    );

    useEffect(() => {
        if (searchValue) setIsTyping(true);
        else setIsTyping(false);
    }, [searchValue]);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClick}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
                sx={{
                    display: "flex",
                    justifyContent: !isMobile && "center",
                    padding: "0px",
                    transition: "all 0.3s ease-in-out",
                    "& .MuiModal-backdrop": {
                        backdropFilter: "blur(5px)",
                    },
                }}
            >
                <Slide in={open}>
                    <Box
                        className={classes.paper}
                        sx={{
                            width: isMobile && "92vw",
                            minHeight: isMobile && "100vh",
                            p: "0px",
                            top: !isMobile && "64px",
                            transition: "all 0.3s ease-in-out",
                            borderRadius: !isMobile && "10px",
                            display: "flex",
                            flexDirection: "column",
                            "&:focus": {
                                outline: "none",
                            },
                        }}
                    >
                        {/**Search Modal Header */}
                        <SearchModalHeader
                            isTyping={isTyping}
                            setSearchValue={setSearchValue}
                            closeSearchModal={handleClick}
                        />
                        <CustomDivider />
                        {/**Search Modal Content */}
                        <SearchModalContent
                            searchValue={searchValue}
                            isTyping={isTyping}
                        />
                        <CustomDivider />
                        {/**Search Modal Footer */}
                        <SearchModalFooter />
                    </Box>
                </Slide>
            </Modal>
        </div>
    );
};

export default forwardRef(SearchDialogue);
