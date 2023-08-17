import {
    useState,
    forwardRef,
    useImperativeHandle,
    Fragment,
    useLayoutEffect,
} from "react";
import Drawer from "@mui/material/Drawer";

import { Box, useTheme, Typography, IconButton } from "@mui/material";
import { CloseRounded, SettingsOutlined } from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import SettingsItems from "./settingsdrawer/SettingsItems";

const SettingsDrawer = ({ placement, setMode, prefersDarkMode }, ref) => {
    const [isSystem, setIsSystem] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    const toggleDrawer = () => setIsOpen(!isOpen);

    useImperativeHandle(
        ref,
        () => {
            return {
                alterDrawerState: () => toggleDrawer(),
            };
        },
        []
    );

    useLayoutEffect(() => {
        prefersDarkMode && setMode("dark");
    }, [prefersDarkMode]);

    return (
        <Fragment>
            <Drawer
                anchor={placement}
                open={isOpen}
                onClose={toggleDrawer}
                sx={{
                    flexShrink: 0,
                    "& .MuiDrawer-paperAnchorRight": {
                        boxSizing: "border-box",
                        width: 350,
                        color: theme.palette.mode === "dark" ? "#FFF" : "#000",
                        borderTopLeftRadius: "12px",
                        borderBottomLeftRadius: "12px",
                        justifyItems: "center",
                        background: "transparent",
                        boxShadow: "none",
                    },
                    "& .MuiBackdrop-root": {
                        backdropFilter: "blur(5px)",
                    },
                }}
            >
                <Box
                    width={350}
                    height="100%"
                    justifyItems="center"
                    sx={{
                        backgroundColor:
                            theme.palette.mode === "dark" && "transparent",
                        flexDirection: "column",
                        display: "flex",
                        boxShadow: theme.palette.mode === "dark" && "none",
                    }}
                >
                    {/* Settings Box */}

                    <Box
                        width="100%"
                        height={180}
                        sx={{
                            backgroundColor: theme.palette.mode === "light" ? "rgb(255,255,255,0.5)":theme.palette.background.paper,
                            borderBottomLeftRadius: "20px",
                            borderBottomRightRadius: "20px",
                            mb: "10px",
                            p: "10px",
                            backdropFilter: 'blur(20px)'
                        }}
                    >
                        <FlexBetween>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: "25px",
                                    padding: "0px",
                                    color: theme.palette.secondary.text,
                                    opacity: 0.8,
                                    display: "flex",
                                    flexGrow: 1,
                                }}
                                align="left"
                            >
                                {/* Settings */}
                            </Typography>
                            <IconButton
                                sx={{
                                    display: "flex",
                                    transition: "all 0.5s ease-in-out",
                                    backgroundColor:
                                        theme.palette.mode === "dark" &&
                                        "rgba(69, 90, 100, 0.1)",
                                    "&:hover": {
                                        backgroundColor:
                                            theme.palette.mode === "dark"
                                                ? "rgba(1, 87, 155, 0.4)"
                                                : theme.palette.secondary.main,
                                        transition: "all 0.5s ease-in-out",
                                        transform: "scale(0.8)",
                                        "& svg": {
                                            color: "#FFF",
                                        },
                                    },
                                }}
                                onClick={toggleDrawer}
                            >
                                <CloseRounded />
                            </IconButton>
                        </FlexBetween>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                width: "100%",
                                p: "20px 0 10px 0",
                            }}
                        >
                            <SettingsOutlined
                                sx={{
                                    fontSize: "60px",
                                    display: "flex",
                                    opacity: 0.9,
                                    color:
                                        theme.palette.mode === "dark"
                                            ? "rgba(1, 87, 155, 1)"
                                            : theme.palette.secondary.main,
                                    transition: "all 1s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.4)",
                                        transition: "all 1s ease-in-out",
                                        rotate: "360deg",
                                    },
                                }}
                            />
                        </Box>
                    </Box>

                    {/* Settings Items Box*/}

                    <SettingsItems
                        isSystem={isSystem}
                        setIsSystem={setIsSystem}
                        prefersDarkMode={prefersDarkMode}
                        setMode={setMode}
                    />
                </Box>
            </Drawer>
        </Fragment>
    );
};

export default forwardRef(SettingsDrawer);
