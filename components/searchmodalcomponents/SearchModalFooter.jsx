import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import CustomIconButton from "../UI/CustomIconButton";

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
            {/** Left side*/}

            <Typography
                sx={{
                    fontSize: "14px",
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
                </CustomIconButton>
            </Box>
        </Box>
    );
};

export default SearchFooter;
