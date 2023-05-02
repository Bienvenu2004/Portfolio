import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import {
    Box,
    useTheme,
    useMediaQuery,
    Modal,
    Slide,
    Typography,
    Backdrop,
    Divider,
    Chip,
    InputBase,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Loading } from "@nextui-org/react";

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
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width: 720px)");
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

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
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                p: 2,

                                backgroundColor:
                                    theme.palette.mode === "dark" &&
                                    "rgb(0, 30, 60, 0.3)",
                                width: "100%",
                                "& svg": {
                                    color:
                                        theme.palette.mode === "dark" &&
                                        "rgba(1, 80, 155, 1)",
                                },
                            }}
                        >
                            {isTyping ? (
                                <Loading
                                    size="sm"
                                    color="primary"
                                    type="default"
                                    css={{
                                        mr: "16px",
                                    }}
                                />
                            ) : (
                                <Search
                                    sx={{
                                        fontSize: "25px",
                                        mr: "16px",
                                    }}
                                />
                            )}
                            <InputBase
                                fullWidth
                                id="search"
                                label="Search..."
                                variant="standard"
                                placeholder="Search..."
                                sx={{
                                    border: "none",
                                    margin: "0px",
                                    pt: "5px",
                                    fontSize: "16px",
                                    letterSpacing: "1px",
                                    "&:focus": {
                                        outline: "none",
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        m: 0,
                                        border: "none",
                                    },
                                }}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                onChange={(event) => {
                                    setSearchValue(event.target.value);
                                    if (event.target.value.length < 1) {
                                        setSearchValue(null);
                                    }
                                }}
                            />
                            <Chip
                                variant="outlined"
                                label={
                                    <Typography
                                        sx={{
                                            textTransform: "none",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                            color: theme.palette.secondary.text,
                                            letterSpacing: "3px",
                                        }}
                                    >
                                        esc
                                    </Typography>
                                }
                                size="small"
                                sx={{
                                    textTransform: "none",
                                    transition: "all 0.2s ease-in-out",
                                    backgroundColor:
                                        theme.palette.mode === "dark"
                                            ? "rgb(1, 10, 50, 1)"
                                            : "#FFF",
                                    border:
                                        theme.palette.mode === "dark"
                                            ? "1px solid rgba(1, 87, 155, 0.8)"
                                            : "1px solid rgba(1, 1, 1, 0.2)",
                                    "&.MuiChip-root": {
                                        borderRadius: "8px",
                                        margin: "0px",
                                    },
                                }}
                                rounded={false}
                            />
                        </Box>

                        <Divider
                            sx={{
                                backgroundColor:
                                    theme.palette.mode === "dark" &&
                                    "rgb(0, 30, 60, 0.3)",
                                width: "100%",
                                borderColor:
                                    theme.palette.mode === "dark" &&
                                    "rgba(1, 87, 155, 0.8)",
                            }}
                        />
                        <Box
                            sx={{
                                p: 2,
                                width: "100%",
                                flexGrow: 1,
                                overflowY: "scroll",
                                backgroundColor:
                                    theme.palette.mode === "dark" &&
                                    "rgb(0, 30, 60, 0.3)",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    color: theme.palette.secondary.text,
                                }}
                            >
                                Search results for "{searchValue}"
                            </Typography>
                            <Box
                                sx={{
                                    mt: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        color: theme.palette.secondary.text,
                                    }}
                                >
                                    No results found
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        color: theme.palette.secondary.text,
                                    }}
                                >
                                    Try searching for something else
                                </Typography>
                            </Box>
                        </Box>
                        <Divider
                            sx={{
                                backgroundColor:
                                    theme.palette.mode === "dark" &&
                                    "rgb(0, 30, 60, 0.3)",
                                width: "100%",
                                borderColor:
                                    theme.palette.mode === "dark" &&
                                    "rgba(1, 87, 155, 0.8)",
                            }}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                p: 2,
                                backgroundColor:
                                    theme.palette.mode === "dark" &&
                                    "rgb(0, 30, 60, 0.3)",
                                width: "100%",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    color: theme.palette.secondary.text,
                                }}
                            >
                                Press esc to close
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    color: theme.palette.secondary.text,
                                }}
                            >
                                Press enter to search
                            </Typography>
                        </Box>
                    </Box>
                </Slide>
            </Modal>
        </div>
    );
};

export default forwardRef(SearchDialogue);
