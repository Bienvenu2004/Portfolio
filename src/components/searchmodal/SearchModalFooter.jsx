import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

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
            <Typography
                sx={{
                    fontSize: "14px",
                    color: theme.palette.secondary.text,
                }}
            >
                Press enter to search
            </Typography>
        </Box>
    );
};

export default SearchFooter;
