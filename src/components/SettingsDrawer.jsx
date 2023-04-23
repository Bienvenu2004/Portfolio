import {
    useState,
    forwardRef,
    useImperativeHandle,
    Fragment,
    useLayoutEffect,
} from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box, useTheme, Typography, IconButton } from "@mui/material";
import {
    LightModeOutlined,
    DarkModeOutlined,
    SettingsBrightness,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { CloseRounded } from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { SettingsOutlined } from "@mui/icons-material";

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
        opacity: 0.8,
        borderRadius: "10px",
        textTransform: "none",
    }));

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
                            backgroundColor: theme.palette.background.alt,
                            borderBottomLeftRadius: "20px",
                            borderBottomRightRadius: "20px",
                            mb: "10px",
                            p: "10px",
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

                    <Box
                        sx={{
                            backgroundColor: theme.palette.background.alt,
                            borderTopLeftRadius: "20px",
                            borderTopRightRadius: "20px",
                            p: "16px",
                            flexGrow: 1,
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
                                    opacity: 0.8,
                                    backgroundColor:
                                        theme.palette.mode === "light" &&
                                        !isSystem
                                            ? theme.palette.secondary.main
                                            : "transparent",
                                    borderColor:
                                        theme.palette.mode === "light" &&
                                        !isSystem &&
                                        "#0091ea",
                                    color:
                                        theme.palette.mode === "light" &&
                                        "#FFF",
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
                                    opacity: 0.8,
                                    backgroundColor:
                                        isSystem &&
                                        theme.palette.mode === "dark"
                                            ? "rgba(1, 87, 155, 0.4)"
                                            : isSystem &&
                                              theme.palette.mode === "light" &&
                                              theme.palette.secondary.main,
                                }}
                                startIcon={<SettingsBrightness />}
                                onClick={() => {
                                    prefersDarkMode
                                        ? setMode("dark")
                                        : setMode("light");
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
                                    opacity: 0.8,
                                    backgroundColor:
                                        theme.palette.mode === "dark" &&
                                        !isSystem
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
                </Box>
            </Drawer>
        </Fragment>
    );
};

export default forwardRef(SettingsDrawer);
