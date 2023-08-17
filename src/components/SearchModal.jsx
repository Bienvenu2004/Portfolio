import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { Box, useMediaQuery, Modal, Slide, Backdrop } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchModalFooter from "./searchmodal/ModalFooter";
import SearchModalContent from "./searchmodal/ModalContent";
import SearchModalHeader from "./searchmodal/ModalHeader";
import CustomDivider from "./UI/CustomDivider";
import useWindowDimensions from "@/hooks/useWindowDimentions";

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
        backdropFilter: "blur(30px)",
    },
    paper: {
        backgroundColor:
            theme.palette.mode === "light" ? "rgb(255,255,255,0.5)":theme.palette.background.paper,
        border:
        theme.palette.mode === "light" ? "rgb(255,255,255,0.5)":theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: "0px",
        transition: "top 0.3s ease-in-out",
        zIndex: 100,
        //width: "851px",
        //height: "504px",
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

    const {screenHeight, screenWidth} = useWindowDimensions()

    const isLandScape = screenWidth > screenHeight;

    const handleClick = () => setOpen(!open);

    let maxHeight;
    let maxWidth;
    let overHeight = 0;
    let marginRight = "0px";

    isMobile ? (maxHeight = screenHeight) : (maxHeight = 504);
    isMobile && !isLandScape && (maxWidth = screenWidth * 0.92 + "px");
    isLandScape && screenHeight < 720 && isMobile && (maxHeight = screenHeight);
    isLandScape && screenHeight < 720 && isMobile
        ? (maxWidth = screenWidth)
        : (maxWidth = "683px");
    !isMobile && !isLandScape
        ? (overHeight = maxHeight - 504)
        : (overHeight = 0);

    maxHeight -= overHeight;
    maxHeight += "px";
    //isLandScape && (marginRight = "75px");

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
                        backdropFilter: "blur(20px)",
                    },
                }}
            >
                <Slide in={open}>
                    <Box
                        className={classes.paper}
                        sx={{
                            width: maxWidth,
                            height: maxHeight,
                            p: "0px",
                            top: !isMobile && screenHeight > 504 && "64px",
                            transition: "all 0.3s ease-in-out",
                            borderRadius: "10px",
                            display: "flex",
                            marginRight: marginRight,
                            flexDirection: "column",
                            "&:focus": {
                                outline: "none",
                            },
                        }}
                    >
                        {/**Search Modal Header */}
                        <SearchModalHeader
                            isTyping={isTyping}
                            searchValue={searchValue}
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
