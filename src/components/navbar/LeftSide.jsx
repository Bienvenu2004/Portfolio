import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import FlexBetween from "../FlexBetween";
import { User } from "@nextui-org/react";
import { ArrowForwardOutlined } from "@mui/icons-material";

const LeftSide = ({ setIsSidebarOpen, isSidebarOpen, isMobile }) => {
    const theme = useTheme();

    const handleOpenSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <FlexBetween flexDirection="row">
            {!isSidebarOpen && (
                <React.Fragment>
                    <IconButton
                        sx={{
                            mr: "1rem",
                            display: "flex",
                            transition: "all 0.5s ease-in-out",
                            backgroundColor:
                                theme.palette.mode === "dark" &&
                                "rgba(69, 90, 100, 0.1)",
                            "&:hover": {
                                backgroundColor:
                                    theme.palette.mode === "dark"
                                        ? "rgba(1, 87, 155, 0.4)"
                                        : theme.palette.secondary.main,
                                transition: "all 0.5s ease-in-out",
                                transform: "scale(0.8)",
                                "& svg": {
                                    color: "#FFF",
                                },
                            },
                            color:
                                theme.palette.mode === "light" &&
                                theme.palette.secondary.main,
                        }}
                        onClick={handleOpenSidebar}
                    >
                        <ArrowForwardOutlined />
                    </IconButton>
                    <IconButton
                        sx={{
                            display: "flex",
                            transition: "all 0.2s ease-in-out",
                            p: "3px",
                            width: "fit-content",
                            color: theme.palette.secondary.main,
                            borderRadius: "0.8rem",
                            "&:hover": {
                                transition: "all 0.5s ease-in-out",
                                backgroundColor: "transparent",
                            },
                        }}
                    >
                        {/* <MenuIcon /> */}
                        <User
                            src="/images/me.jpeg"
                            name={"Abdulrahim"}
                            description={"Web Developer | Next.js"}
                            bordered
                            color="primary"
                            size={isMobile ? "md" : "lg"}
                            css={{
                                p: 0,
                                "& .nextui-user-name": {
                                    color: theme.palette.secondary.main,
                                    fontFamily: theme.typography.fontFamily,
                                },
                                "& .nextui-user-description": {
                                    color: theme.palette.secondary.text,
                                    fontFamily: theme.typography.fontFamily,
                                },
                                "& .nextui-avatar-img": {
                                    border: "none",
                                },
                            }}
                        />
                    </IconButton>
                </React.Fragment>
            )}
            <Box flexGrow={1} />
        </FlexBetween>
    );
};

export default LeftSide;
