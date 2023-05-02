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
    useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import SettingsDrawer from "./SettingsDrawer";
import SearchDialogue from "./SearchDialogue";
import { User } from "@nextui-org/react";

let detectedOS;

const Navbar = ({
    isSidebarOpen,
    setIsSidebarOpen,
    setMode,
    prefersDarkMode,
}) => {
    const theme = useTheme();
    const settingsDrawerRef = useRef();
    const searchDialogueRef = useRef();
    const isMobile = useMediaQuery("(max-width: 600px)");
    const isExtraSmall = useMediaQuery("(max-width: 400px)");

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

    const handleClick = () => settingsDrawerRef.current.alterDrawerState();

    return (
        <AppBar
            sx={{
                position: "sticky",
                margin: "0",
                background: "none",
                backdropFilter: "blur(10px)",
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
                            sx={{
                                display: "flex",
                                transition: "all 0.2s ease-in-out",
                                p: "3px",
                                width: "fit-content",
                                color: theme.palette.secondary.main,
                                borderRadius: "0.8rem",
                                "&:hover": {
                                    transition: "all 0.5s ease-in-out",
                                },
                            }}
                        >
                            {/* <MenuIcon /> */}
                            <User
                                src="/images/me.png"
                                name={!isMobile && "Abdulrahim"}
                                description={
                                    !isMobile && "Web Developer @Neema"
                                }
                                bordered
                                color="primary"
                                size={isMobile ? "md" : "lg"}
                                css={{
                                    p: 0,
                                    "& .nextui-user-name": {
                                        color: theme.palette.secondary.main,
                                    },
                                    "& .nextui-user-description": {
                                        color: theme.palette.secondary.text,
                                    },
                                    "& .nextui-avatar-img": {
                                        border: "none",
                                    },
                                }}
                            />
                        </IconButton>
                    )}
                    <Box flexGrow={1} />
                </FlexBetween>
                {/* Right */}
                <FlexBetween gap="0.3rem">
                    {/* Search button for large screens*/}
                    {!isMobile && (
                        <Button
                            variant="outlined"
                            startIcon={
                                <Search
                                    sx={{
                                        color: "rgba(1, 87, 155, 0.8)",
                                        fontSize: isMobile && "20px",
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
                                                color: theme.palette.secondary
                                                    .text,
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
                                        transition: "all 0.2s ease-in-out",
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
                                        ? "1px solid rgba(1, 87, 155, 0.4)"
                                        : "1px solid rgba(1, 87, 155, 0.2)",
                                backgroundColor:
                                    theme.palette.mode === "dark"
                                        ? "rgba(1, 87, 155, 0.1)"
                                        : "rgba(1, 87, 155, 0.03)",
                                "&:hover": {
                                    backgroundColor:
                                        theme.palette.mode === "dark"
                                            ? "rgba(1, 87, 155, 0.25)"
                                            : "rgba(1, 87, 155, 0.1)",
                                    transition: "all 0.3s ease-in-out",
                                    border:
                                        theme.palette.mode === "dark"
                                            ? "1px solid rgba(1, 87, 155, 0.4)"
                                            : "1px solid rgba(1, 87, 155, 0.2)",
                                },
                            }}
                            onClick={() =>
                                searchDialogueRef.current.alterSearchDialogueState()
                            }
                        >
                            Search...
                        </Button>
                    )}
                    {/** Search button for small screens*/}
                    {isMobile && (
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
                                        ? "1px solid rgba(1, 87, 155, 0.4)"
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
                            onClick={() =>
                                searchDialogueRef.current.alterSearchDialogueState()
                            }
                        >
                            <Search sx={{ fontSize: "20px" }} />
                        </IconButton>
                    )}
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
                                    ? "1px solid rgba(1, 87, 155, 0.4)"
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
                        href="https://www.github.com/Abdulrahim2567"
                        target="_blank"
                    >
                        <GitHub sx={{ fontSize: "20px" }} />
                    </IconButton>
                    {!isExtraSmall && (
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
                                        ? "1px solid rgba(1, 87, 155, 0.4)"
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
                            href="https://www.linkedin.com/in/abdou-rahim-729411246/"
                            target="_blank"
                        >
                            <LinkedIn sx={{ fontSize: "20px" }} />
                        </IconButton>
                    )}
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
                                        ? "1px solid rgba(1, 87, 155, 0.4)"
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
