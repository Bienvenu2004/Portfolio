import React from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const SearchFooter = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                backgroundColor:
                    theme.palette.mode === "dark" && "rgb(0, 30, 60, 0.3)",
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
            <Box alignItems="flex-end" display="flex">
                <IconButton
                    sx={{
                        m: "0px",
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
                                color: theme.palette.mode === "light" && "#FFF",
                            },
                        },
                    }}
                    href="https://www.github.com/Abdulrahim2567"
                    target="_blank"
                >
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: theme.palette.secondary.text,
                            display: "flex",
                        }}
                    >
                        Follow me on
                    </Typography>
                    <GitHub
                        sx={{ fontSize: "25px", display: "flex", ml: "10px" }}
                    />
                </IconButton>
            </Box>
        </Box>
    );
};

export default SearchFooter;
