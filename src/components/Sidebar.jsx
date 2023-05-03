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
} from "@mui/material";
import { useEffect, useState } from "react";
import FlexBetween from "./FlexBetween";
import { useRouter } from "next/router";
import { navItems } from "../data/data";
import { User } from "@nextui-org/react";
import { ArrowRightOutlined, ArrowBackOutlined } from "@mui/icons-material";

const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isMobile,
}) => {
    const theme = useTheme();
    const router = useRouter();
    const { pathname } = router;
    const [activeUrl, setActiveUrl] = useState(pathname.substring(1));

    useEffect(() => {
        setActiveUrl(pathname.substring(1));
    }, [pathname]);

    if (activeUrl === "") {
        setActiveUrl("dashboard");
    }

    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    variant="persistent"
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    anchor="left"
                    sx={{
                        width: isSidebarOpen ? drawerWidth : "0px",
                        height: "100vh",
                        flexShrink: 0,
                        mr: "0.75rem",
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isMobile ? "2px" : "0px",
                            width: isSidebarOpen ? drawerWidth : "0px",
                            pr: "10px",
                            boxShadow:
                                theme.palette.mode === "light" &&
                                "0px 0px 10px 0px rgba(0, 0, 0, 0.08)",
                            borderTopRightRadius: "15px",
                            borderBottomRightRadius: "15px",
                        },
                    }}
                >
                    <Box width="100%">
                        <Box m="1rem 3rem 1.5rem 0.6rem">
                            <FlexBetween>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    mr="1rem"
                                >
                                    <User
                                        src="/images/me.png"
                                        name="Abdulrahim"
                                        description="Web Developer @Neema"
                                        bordered
                                        color="primary"
                                        size="lg"
                                        css={{
                                            "& .nextui-user-name": {
                                                color: theme.palette.secondary
                                                    .main,
                                            },
                                            "& .nextui-user-description": {
                                                color: theme.palette.secondary
                                                    .text,
                                            },
                                            "& .nextui-avatar-img": {
                                                border: "none",
                                            },
                                            p: 0,
                                        }}
                                    >
                                        <User.Link href="https://github.com/Abdulrahim2567/">
                                            @abdulrahim2567
                                        </User.Link>
                                    </User>
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
                                                    theme.palette.mode ===
                                                    "dark"
                                                        ? "rgba(1, 87, 155, 0.4)"
                                                        : theme.palette
                                                              .secondary.main,
                                                transition:
                                                    "all 0.5s ease-in-out",
                                                transform: "scale(0.8)",
                                                "& svg": {
                                                    color: "#FFF",
                                                },
                                            },
                                            color:
                                                theme.palette.mode ===
                                                    "light" &&
                                                theme.palette.secondary.main,
                                        }}
                                        onClick={() =>
                                            setIsSidebarOpen(!isSidebarOpen)
                                        }
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
                                            setActiveUrl(
                                                item.name.toLowerCase()
                                            );
                                        }}
                                        sx={{
                                            borderTopRightRadius: "25px",
                                            borderBottomRightRadius: "25px",
                                            backgroundColor:
                                                activeUrl ===
                                                item.name.toLowerCase()
                                                    ? theme.palette.secondary
                                                          .main
                                                    : "transparent",
                                            color:
                                                activeUrl ===
                                                item.name.toLowerCase()
                                                    ? theme.palette
                                                          .secondary[100]
                                                    : theme.palette.secondary
                                                          .text,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                color:
                                                    activeUrl ===
                                                    item.name.toLowerCase()
                                                        ? theme.palette
                                                              .secondary[100]
                                                        : theme.palette
                                                              .secondary.text,
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.name} />
                                        {activeUrl ===
                                            item.name.toLowerCase() && (
                                            <ArrowRightOutlined
                                                sx={{
                                                    ml: "auto",
                                                }}
                                            />
                                        )}
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;
