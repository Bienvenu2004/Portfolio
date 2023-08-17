import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import CustomIconButton from "../UI/CustomIconButton";
import useWindowDimensions from "@/hooks/useWindowDimentions";

const SearchFooter = () => {
    const theme = useTheme();
    
    const {screenHeight, screenWidth} = useWindowDimensions()

    const isLandScape = screenWidth > screenHeight;

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                backgroundColor:
                    theme.palette.mode === "light" ? "rgb(255,255,255,0.5)":theme.palette.background.paper,
                width: "100%",
                height: "56px",
                borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "10px"
            }}
        >
            {/** Left side*/}

            <Typography
                sx={{
                    fontSize:
                        isLandScape && screenHeight < 504 ? "12px" : "14px",
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
                    height={"40px"}
                >
                    <Typography
                        sx={{
                            fontSize:
                                isLandScape && screenHeight < 504
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
                                isLandScape && screenHeight < 504
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
