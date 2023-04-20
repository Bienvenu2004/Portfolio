import React, { useState, useEffect, useRef } from "react";
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined,
    GitHub,
    LinkedIn,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import {
    useTheme,
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    Button,
    Menu,
    Box,
    Typography,
} from "@mui/material";
import { Loading } from "@nextui-org/react";
import SettingsDrawer from "./SettingsDrawer";

const Navbar = ({
    isSidebarOpen,
    setIsSidebarOpen,
    setMode,
    prefersDarkMode,
}) => {
    const [searchValue, setSearchValue] = useState(null);
    const [isTyping, setIsTyping] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const settingsDrawerRef = useRef();

    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    useEffect(() => {
        if (searchValue != null) setIsTyping(true);
        else setIsTyping(false);
    }, [searchValue]);

    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
            }}
        >
            <SettingsDrawer
                ref={settingsDrawerRef}
                setMode={setMode}
                placement="right"
                prefersDarkMode={prefersDarkMode}
            />
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* Left */}
                <FlexBetween>
                    {!isSidebarOpen && (
                        <IconButton
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <FlexBetween
                        backgroundColor={theme.palette.background.alt}
                        border="none"
                        borderRadius={3}
                        gap="3rem"
                        p="0.1rem 1.5rem"
                        boxShadow={
                            theme.palette.mode === "light" &&
                            "0px 0px 2px 0px rgba(0,0,0,0.2)"
                        }
                    >
                        <InputBase
                            placeholder="Search..."
                            sx={{
                                color:
                                    theme.palette.mode === "light" &&
                                    "secondary.text",
                            }}
                            onChange={(event) => {
                                setSearchValue(event.target.value);
                                if (event.target.value.length < 1) {
                                    setSearchValue(null);
                                }
                            }}
                        />
                        <IconButton>
                            {isTyping ? (
                                <Loading type="default" size="xs" />
                            ) : (
                                <Search />
                            )}
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>
                {/* Right */}
                <FlexBetween gap="0.3rem">
                    {/* <IconButton
                        onClick={() =>
                            mode == "dark" ? setMode("light") : setMode("dark")
                        }
                    >
                        {theme.palette.mode === "dark" ? (
                            <LightModeOutlined sx={{ fontSize: "20px" }} />
                        ) : (
                            <DarkModeOutlined sx={{ fontSize: "20px" }} />
                        )}
                    </IconButton> */}
                    {/* <IconButton>
						<SettingsOutlined sx={{fontSize: "25px"}}/>
					</IconButton> */}
                    <IconButton>
                        <GitHub sx={{ fontSize: "20px" }} />
                    </IconButton>
                    <IconButton>
                        <LinkedIn sx={{ fontSize: "20px" }} />
                    </IconButton>
                    <FlexBetween>
                        <Button
                            onClick={handleClick}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "1rem",
                                textTransform: "none",
                            }}
                        >
                            <Box
                                component="img"
                                src="images/me.png"
                                alt="Profile"
                                width="32px"
                                height="32px"
                                sx={{
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                                onClick={() =>
                                    settingsDrawerRef.current.alterDrawerState()
                                }
                            />
                        </Button>
                        {/* <Menu
							anchorEl={anchorEl}
							open={isOpen}
							onClose={handleClose}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'center',
							}}
						/> */}
                    </FlexBetween>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
