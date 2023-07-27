import React, { Fragment } from "react";
import { Box, Typography, useTheme, Skeleton } from "@mui/material";

const SearchModalContent = ({ searchValue, isTyping }) => {
    const theme = useTheme();

    const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    const screenHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    const isLandScape = screenWidth > screenHeight;

    return (
        <Box
            sx={{
                width: "100%",
                flexGrow: 1,
                overflowY: "scroll",
                p: "0",
                m: "0",
                backgroundColor:
                    theme.palette.mode === "dark" && "rgb(0, 30, 60, 0.1)",
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
                            fontSize:
                                isLandScape && screenHeight < 504
                                    ? "12px"
                                    : "14px",
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
                                fontSize:
                                    isLandScape && screenHeight < 504
                                        ? "12px"
                                        : "14px",
                                color: theme.palette.secondary.text,
                            }}
                        >
                            Type to search...
                        </Typography>
                    </Box>
                </Fragment>
            )}
        </Box>
    );
};

export default SearchModalContent;
