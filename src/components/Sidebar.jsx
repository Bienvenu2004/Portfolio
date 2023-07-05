import {
    Box,
    Drawer,
    IconButton,
    ListItem,
    ListItemButton,
    useTheme,
    ListItemText,
    Typography,
    ListItemIcon,
    useMediaQuery,
} from "@mui/material";
import { useEffect, useState, useContext, useLayoutEffect } from "react";
import FlexBetween from "./FlexBetween";
import { useRouter } from "next/router";
import { navItems } from "../data/data";
import { User } from "@nextui-org/react";
import { ArrowRightOutlined, ArrowBackOutlined } from "@mui/icons-material";
import { SidebarContext } from "./contexts/SidebarContext";

const Sidebar = () => {
    const theme = useTheme();
    const backupTheme = useTheme();
    const router = useRouter();
    const { pathname } = router;
    const [activeUrl, setActiveUrl] = useState(pathname.substring(1));
    const isMobile = useMediaQuery("(max-width: 600px)");
    const autoCloseSideBar = useMediaQuery("(max-width: 660px)");

    //sidebar context
    const { isSidebarOpen, setIsSidebarOpen, setIsPersistent, isPersistent } =
        useContext(SidebarContext);
    const drawerWidth = "250px";
    useEffect(() => {
        setActiveUrl(pathname.substring(1));
    }, [pathname]);

    useEffect(() => {
        if (autoCloseSideBar) {
            setIsSidebarOpen(false);
        }
    }, [autoCloseSideBar]);

    useLayoutEffect(() => {
        if (isMobile) {
            setIsSidebarOpen(false);
            setIsPersistent(false);
        } else {
            setIsSidebarOpen(true);
            setIsPersistent(true);
        }
    }, [isMobile]);

    if (activeUrl === "") {
        setActiveUrl("dashboard");
    }
    return (
        <Drawer
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            anchor="left"
            variant={isMobile ? "temporary" : "persistent"}
            sx={{
                width: isSidebarOpen && drawerWidth,
                height: "100vh",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: 250,
                    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
                    borderTopRightRadius: "12px",
                    borderBottomRightRadius: "12px",
                    justifyItems: "center",
                    background: theme.palette.background.alt,
                    transition: "all 0.3s ease-in-out",
                    boxShadow: "none",
                    pr: "0.5rem",
                    border: theme.palette.mode === "dark" && "none",
                },
            }}
            style={{
                background: "transparent",
                transition: "all 0.3s ease-in-out",
            }}
        >
            <Box>
                <Box m="1rem 3rem 1.5rem 0.6rem">
                    <FlexBetween>
                        <Box display="flex" alignItems="center" mr="1rem">
                            <User
                                src="/images/me.jpg"
                                name="Abdulrahim"
                                description="Web Developer @Neema"
                                bordered
                                color="primary"
                                size="lg"
                                css={{
                                    "& .nextui-user-name": {
                                        color: theme.palette.secondary.main,
                                    },
                                    "& .nextui-user-description": {
                                        color: theme.palette.secondary.text,
                                    },
                                    "& .nextui-avatar-img": {
                                        border: "none",
                                    },
                                    p: 0,
                                }}
                            />
                        </Box>
                        {isSidebarOpen && (
                            <IconButton
                                sx={{
                                    mb: "0.2rem",
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
                                    color:
                                        theme.palette.mode === "light" &&
                                        theme.palette.secondary.main,
                                }}
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            >
                                <ArrowBackOutlined />
                            </IconButton>
                        )}
                    </FlexBetween>
                </Box>
                {navItems.map((item) => {
                    if (!item.icon) {
                        return (
                            <Typography
                                key={item.name}
                                variant="h6"
                                fontWeight="bold"
                                color="secondary.main"
                                sx={{
                                    m: "1.5rem 0 1.5rem 1.1rem",
                                }}
                            >
                                {item.name}
                            </Typography>
                        );
                    }
                    return (
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    item.name === "Dashboard"
                                        ? router.push("/")
                                        : router.push(
                                              `/${item.name.toLowerCase()}`
                                          );
                                    setActiveUrl(item.name.toLowerCase());
                                    !isPersistent && setIsSidebarOpen(false);
                                }}
                                sx={{
                                    borderTopRightRadius: "25px",
                                    borderBottomRightRadius: "25px",
                                    backgroundColor:
                                        activeUrl === item.name.toLowerCase()
                                            ? theme.palette.secondary.main
                                            : "transparent",
                                    color:
                                        activeUrl === item.name.toLowerCase()
                                            ? theme.palette.secondary[100]
                                            : theme.palette.secondary.text,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color:
                                            activeUrl ===
                                            item.name.toLowerCase()
                                                ? theme.palette.secondary[100]
                                                : theme.palette.secondary.text,
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                                {activeUrl === item.name.toLowerCase() && (
                                    <ArrowRightOutlined sx={{ ml: "auto" }} />
                                )}
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </Box>
        </Drawer>
    );
};

export default Sidebar;
