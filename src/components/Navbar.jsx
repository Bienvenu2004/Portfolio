import React, { useState, useEffect, useRef } from "react";
import {
    Search,
    SettingsOutlined,
    GitHub,
    LinkedIn,
    Menu as MenuIcon,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import {
    useTheme,
    AppBar,
    Toolbar,
    IconButton,
    Chip,
    Box,
    Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import SettingsDrawer from "./SettingsDrawer";
import SearchDialogue from "./SearchDialogue";

let detectedOS;

const Navbar = ({
    isSidebarOpen,
    setIsSidebarOpen,
    setMode,
    prefersDarkMode,
}) => {
    const [searchValue, setSearchValue] = useState(null);
    const [isTyping, setIsTyping] = useState(false);
    const theme = useTheme();
    const settingsDrawerRef = useRef();
    const searchDialogueRef = useRef();

    //add event listener for ctrl+k for Linux and Windows
    document.addEventListener("keydown", (event) => {
        if ((event.ctrlKey && event.key === "k") || event.key === "K") {
            searchDialogueRef.current.alterSearchDialogueState();
        }
    });
    //add event listener for cmd+k for MacOS
    document.addEventListener("keydown", (event) => {
        if ((event.metaKey && event.key === "k") || event.key === "K") {
            searchDialogueRef.current.alterSearchDialogueState();
        }
    });

    //get OS type
    if (navigator.userAgent.indexOf("Mac") != -1) detectedOS = "MacOS";

    /* <InputBase
        placeholder="Search..."
        sx={{
            color:
                theme.palette.mode === "light" &&
                "secondary.text",
        }}
        onChange={(event) => {
            setSearchValue(event.target.value);
            if (event.target.value.length < 1) {
                setSearchValue(null);
            }
        }}
    /> */

    const handleClick = () => settingsDrawerRef.current.alterDrawerState();

    useEffect(() => {
        if (searchValue != null) setIsTyping(true);
        else setIsTyping(false);
    }, [searchValue]);

    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
            }}
        >
            <SettingsDrawer
                ref={settingsDrawerRef}
                setMode={setMode}
                placement="right"
                prefersDarkMode={prefersDarkMode}
            />
            <SearchDialogue ref={searchDialogueRef} />
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* Left */}
                <FlexBetween flexDirection="row">
                    {!isSidebarOpen && (
                        <IconButton
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Box flexGrow={1} />
                </FlexBetween>
                {/* Right */}
                <FlexBetween gap="0.3rem">
                    <Button
                        variant="outlined"
                        startIcon={
                            <Search
                                sx={{
                                    color: "rgba(1, 87, 155, 0.8)",
                                }}
                            />
                        }
                        endIcon={
                            <Chip
                                variant="outlined"
                                label={
                                    <Typography
                                        sx={{
                                            textTransform: "none",
                                            fontSize: "12px",
                                            color: theme.palette.secondary.text,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {detectedOS === "MacOS" && "⌘ + K"}
                                        {detectedOS !== "MacOS" && "Ctrl+K"}
                                    </Typography>
                                }
                                size="small"
                                sx={{
                                    textTransform: "none",
                                    backgroundColor:
                                        theme.palette.mode === "dark"
                                            ? "rgba(1, 87, 155, 0.5)"
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
                        }
                        sx={{
                            width: "fit-content",
                            borderRadius: "0.8rem",
                            textTransform: "none",
                            fontSize: "14px",
                            paddingX: "8px",
                            color:
                                theme.palette.mode === "dark"
                                    ? "rgba(255,255, 255, 0.6)"
                                    : "rgba(0, 0, 0, 0.5)",
                            border:
                                theme.palette.mode === "dark"
                                    ? "1px solid rgba(1, 87, 155, 0.8)"
                                    : "1px solid rgba(1, 87, 155, 0.2)",
                            backgroundColor:
                                theme.palette.mode === "dark"
                                    ? "rgba(1, 87, 155, 0.1)"
                                    : "rgba(1, 87, 155, 0.03)",
                            "&:hover": {
                                backgroundColor:
                                    theme.palette.mode === "dark"
                                        ? "rgba(1, 87, 155, 0.4)"
                                        : "rgba(1, 87, 155, 0.1)",
                                transition: "all 0.5s ease-in-out",
                                border:
                                    theme.palette.mode === "dark"
                                        ? "1px solid rgba(1, 87, 155, 0.8)"
                                        : "1px solid rgba(1, 87, 155, 0.2)",
                            },
                        }}
                        onClick={() =>
                            searchDialogueRef.current.alterSearchDialogueState()
                        }
                    >
                        Search...
                    </Button>
                    <IconButton
                        sx={{
                            display: "flex",
                            transition: "all 0.5s ease-in-out",
                            color: theme.palette.secondary.main,
                            backgroundColor:
                                theme.palette.mode === "dark" &&
                                "rgba(69, 90, 100, 0.1)",
                            borderRadius: "0.8rem",
                            border:
                                theme.palette.mode === "dark"
                                    ? "1px solid rgba(1, 87, 155, 0.8)"
                                    : "1px solid rgba(1, 87, 155, 0.2)",
                            "&:hover": {
                                backgroundColor:
                                    theme.palette.mode === "dark"
                                        ? "rgba(1, 87, 155, 0.4)"
                                        : theme.palette.secondary.main,
                                transition: "all 0.5s ease-in-out",
                                "& svg": {
                                    color:
                                        theme.palette.mode === "light" &&
                                        "#FFF",
                                },
                            },
                        }}
                    >
                        <GitHub sx={{ fontSize: "20px" }} />
                    </IconButton>
                    <IconButton
                        sx={{
                            display: "flex",
                            transition: "all 0.5s ease-in-out",
                            color: theme.palette.secondary.main,
                            backgroundColor:
                                theme.palette.mode === "dark" &&
                                "rgba(69, 90, 100, 0.1)",
                            borderRadius: "0.8rem",
                            border:
                                theme.palette.mode === "dark"
                                    ? "1px solid rgba(1, 87, 155, 0.8)"
                                    : "1px solid rgba(1, 87, 155, 0.2)",
                            "&:hover": {
                                backgroundColor:
                                    theme.palette.mode === "dark"
                                        ? "rgba(1, 87, 155, 0.4)"
                                        : theme.palette.secondary.main,
                                transition: "all 0.5s ease-in-out",
                                "& svg": {
                                    color:
                                        theme.palette.mode === "light" &&
                                        "#FFF",
                                },
                            },
                        }}
                    >
                        <LinkedIn sx={{ fontSize: "20px" }} />
                    </IconButton>
                    <FlexBetween>
                        <IconButton
                            sx={{
                                display: "flex",
                                transition: "all 0.5s ease-in-out",
                                color: theme.palette.secondary.main,
                                backgroundColor:
                                    theme.palette.mode === "dark" &&
                                    "rgba(69, 90, 100, 0.1)",
                                borderRadius: "0.8rem",
                                border:
                                    theme.palette.mode === "dark"
                                        ? "1px solid rgba(1, 87, 155, 0.8)"
                                        : "1px solid rgba(1, 87, 155, 0.2)",
                                "&:hover": {
                                    backgroundColor:
                                        theme.palette.mode === "dark"
                                            ? "rgba(1, 87, 155, 0.4)"
                                            : theme.palette.secondary.main,
                                    transition: "all 0.5s ease-in-out",
                                    "& svg": {
                                        color:
                                            theme.palette.mode === "light" &&
                                            "#FFF",
                                    },
                                },
                            }}
                            onClick={handleClick}
                        >
                            <SettingsOutlined sx={{ fontSize: "20px" }} />
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
