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
import { Box, useTheme, Typography } from "@mui/material";
import {
    LightModeOutlined,
    DarkModeOutlined,
    SettingsBrightness,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const SettingsDrawer = ({ placement, setMode, prefersDarkMode }, ref) => {
    const [isSystem, setIsSystem] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    console.log("settings", prefersDarkMode);
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
        "&:hover": {
            borderColor: theme.palette.secondary.text,
            backgroundColor: "rgba(1, 87, 155, 0.4)",
        },
        borderColor: theme.palette.mode === "light" ? "#cfd8dc" : "#455a64",
        opacity: 0.8,
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
                        backgroundColor:
                            theme.palette.mode === "dark" && "#0A1929",
                        boxSizing: "border-box",
                        width: 330,
                        color: theme.palette.mode === "dark" ? "#FFF" : "#000",
                        borderTopLeftRadius: "15px",
                        borderBottomLeftRadius: "15px",
                        justifyItems: "center",
                    },
                    backgroundColor: "transparent",
                }}
            >
                <Box width={330} p={2} justifyItems="center">
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
                                    theme.palette.mode === "light"
                                        ? theme.palette.secondary.main
                                        : "transparent",
                                borderColor:
                                    theme.palette.mode === "light" && "#0091ea",
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
                                opacity: 0.8,
                                backgroundColor:
                                    theme.palette.mode === "light"
                                        ? theme.palette.secondary.main
                                        : "transparent",
                                borderColor: isSystem && "#0091ea",
                            }}
                            startIcon={<SettingsBrightness />}
                            onClick={() =>
                                prefersDarkMode
                                    ? setMode("dark")
                                    : setMode("light")
                            }
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
                                    borderColor:
                                        theme.palette.mode === "light" &&
                                        "#0091ea",
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
                                    theme.palette.mode === "dark"
                                        ? "rgba(1, 87, 155, 0.4)"
                                        : "transparent",
                                borderColor:
                                    theme.palette.mode === "dark" && "#0091ea",
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
            </Drawer>
        </Fragment>
    );
};

export default forwardRef(SettingsDrawer);
