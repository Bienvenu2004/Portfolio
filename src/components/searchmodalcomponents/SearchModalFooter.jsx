import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import CustomIconButton from "../UI/CustomIconButton";

const SearchFooter = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width: 600px)");

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
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                backgroundColor:
                    theme.palette.mode === "dark" && "rgb(0, 30, 60, 0.3)",
                width: "100%",
                height: isLandScape && !isMobile ? "40px" : "60px",
            }}
        >
            {/** Left side*/}

            <Typography
                sx={{
                    fontSize:
                        isLandScape && screenHeight < 720 ? "12px" : "14px",
                    color: theme.palette.secondary.text,
                }}
            >
                Press esc to close
            </Typography>

            {/** Right side*/}

            <Box alignItems="flex-end" display="flex">
                <CustomIconButton
                    href="https://www.github.com/Abdulrahim2567"
                    target="_blank"
                    height="30px"
                >
                    <Typography
                        sx={{
                            fontSize:
                                isLandScape && screenHeight < 720
                                    ? "12px"
                                    : "14px",
                            color: theme.palette.secondary.text,
                            display: "flex",
                        }}
                    >
                        Follow me on
                    </Typography>
                    <GitHub
                        sx={{
                            fontSize:
                                isLandScape && screenHeight < 720
                                    ? "15px"
                                    : "25px",
                            display: "flex",
                            ml: "10px",
                        }}
                    />
                </CustomIconButton>
            </Box>
        </Box>
    );
};

export default SearchFooter;
