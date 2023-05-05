import React, { Fragment } from "react";
import { Box, Typography, useTheme, Skeleton } from "@mui/material";

const SearchModalContent = ({ searchValue, isTyping }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: "100%",
                flexGrow: 1,
                overflowY: "scroll",
                p: "0",
                m: "0",
                backgroundColor:
                    theme.palette.mode === "dark" && "rgb(0, 30, 60, 0.3)",
            }}
        >
            {isTyping ? (
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    animation="wave"
                    sx={{
                        backgroundColor:
                            theme.palette.mode === "dark" &&
                            "rgb(0, 30, 60, 0.3)",
                        m: "0",
                        p: "0",
                    }}
                />
            ) : (
                <Fragment>
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
                </Fragment>
            )}
        </Box>
    );
};

export default SearchModalContent;
