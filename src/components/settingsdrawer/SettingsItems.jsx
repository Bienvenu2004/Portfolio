import React from "react";
import { Box, ButtonGroup, Typography, useTheme, Button } from "@mui/material";
import {
    LightModeOutlined,
    SettingsBrightness,
    DarkModeOutlined,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const SettingsItems = ({ isSystem, setIsSystem, prefersDarkMode, setMode }) => {
    const theme = useTheme();

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.secondary.text,
        backgroundColor: "transparent",
        transition: "all 0.5s ease-in-out",
        "&:hover": {
            borderColor: "#0091ea",
            backgroundColor: "rgba(1, 87, 155, 0.4)",
            transition: "all 0.5s ease-in-out",
        },
        borderColor:
            theme.palette.mode === "light"
                ? "#cfd8dc"
                : "rgba(31, 117, 254, 0.5)",
        borderRadius: "10px",
        textTransform: "none",
    }));

    return (
        <Box
            sx={{
                backgroundColor:  theme.palette.mode === "light" ? "rgb(255,255,255,0.5)":theme.palette.background.paper,
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                p: "16px",
                flexGrow: 1,
                backdropFilter: 'blur(20px)'
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontSize: "12px",
                    padding: "0px",
                    paddingY: "5px",
                    color: theme.palette.secondary.text,
                    opacity: 0.8,
                }}
                align="left"
            >
                MODE
            </Typography>
            <ButtonGroup sx={{ width: "100%" }} size="large">
                <ColorButton
                    key="light"
                    startIcon={<LightModeOutlined />}
                    sx={{
                        padding: "10px",
                        width: "100%",

                        backgroundColor:
                            theme.palette.mode === "light" && !isSystem
                                ? theme.palette.secondary.main
                                : "transparent",
                        borderColor:
                            theme.palette.mode === "light" &&
                            !isSystem &&
                            "#0091ea",
                        color: theme.palette.mode === "light" && "#FFF",
                    }}
                    onClick={() => {
                        setMode("light");
                        setIsSystem(false);
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: "14px",
                            pt: "4px",
                            color:
                                theme.palette.mode === "light"
                                    ? "#FFF"
                                    : theme.palette.secondary.text,
                        }}
                    >
                        Light
                    </Typography>
                </ColorButton>

                <ColorButton
                    key="system"
                    sx={{
                        padding: "10px",
                        width: "100%",
                        backgroundColor:
                            isSystem && theme.palette.mode === "dark"
                                ? "rgba(1, 87, 155, 0.4)"
                                : isSystem &&
                                  theme.palette.mode === "light" &&
                                  theme.palette.secondary.main,
                    }}
                    startIcon={<SettingsBrightness />}
                    onClick={() => {
                        prefersDarkMode ? setMode("dark") : setMode("light");
                        setIsSystem(true);
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: "14px",
                            pt: "4px",
                            color: theme.palette.secondary.text,
                            borderColor: isSystem && "#0091ea",
                        }}
                    >
                        System
                    </Typography>
                </ColorButton>

                <ColorButton
                    key="dark"
                    startIcon={<DarkModeOutlined />}
                    sx={{
                        padding: "10px",
                        width: "100%",
                        backgroundColor:
                            theme.palette.mode === "dark" && !isSystem
                                ? "rgba(1, 87, 155, 0.4)"
                                : "transparent",
                        borderColor:
                            theme.palette.mode === "dark" &&
                            !isSystem &&
                            "#0091ea",
                    }}
                    onClick={() => {
                        setMode("dark");
                        setIsSystem(false);
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: "14px",
                            pt: "4px",
                            color: theme.palette.secondary.text,
                        }}
                    >
                        Dark
                    </Typography>
                </ColorButton>
            </ButtonGroup>
        </Box>
    );
};

export default SettingsItems;
