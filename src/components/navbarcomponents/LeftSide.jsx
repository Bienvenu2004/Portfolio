import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import FlexBetween from "../FlexBetween";
import { User } from "@nextui-org/react";

const LeftSide = ({ setIsSidebarOpen, isSidebarOpen, isMobile }) => {
    const theme = useTheme();

    return (
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
                        src="/images/me.jpg"
                        name={!isMobile && "Abdulrahim"}
                        description={!isMobile && "Web Developer @Neema"}
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
    );
};

export default LeftSide;
