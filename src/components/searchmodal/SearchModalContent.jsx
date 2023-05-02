import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const SearchModalContent = ({ searchValue }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                p: 2,
                width: "100%",
                flexGrow: 1,
                overflowY: "scroll",
                backgroundColor:
                    theme.palette.mode === "dark" && "rgb(0, 30, 60, 0.3)",
            }}
        >
            <Typography
                sx={{
                    fontSize: "14px",
                    color: theme.palette.secondary.text,
                }}
            >
                {searchValue && `Search results for "${searchValue}"`}
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
    );
};

export default SearchModalContent;
