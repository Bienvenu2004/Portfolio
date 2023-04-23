import {
    Box,
    Drawer,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    List,
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
        <Box
            component="nav"
            sx={{
                width: isSidebarOpen ? drawerWidth : "0px",
                transition: !isSidebarOpen && "all 0.3s ease-in-out",
            }}
        >
            {isSidebarOpen && (
                <Drawer
                    variant="persistent"
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    anchor="left"
                    sx={{
                        width: isSidebarOpen ? drawerWidth : "0px",
                        transition: "all 0.3s ease-in-out",
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isMobile ? "2px" : "0px",
                            width: isSidebarOpen ? drawerWidth : "0px",
                            transition: "all 0.3s ease-in-out",
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
                        <Box m="1rem 3rem 1.5rem 1.2rem">
                            <FlexBetween>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap="0.5rem"
                                    mr="5rem"
                                >
                                    <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                        sx={{
                                            color: theme.palette.secondary.main,
                                        }}
                                    >
                                        PORTFOLIO
                                    </Typography>
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
                            <Box width="100%" justifyItems="center" m={1}>
                                <User
                                    src="images/abdulrahim.png"
                                    name="Abdulrahim"
                                    description="Web Developer @Neema"
                                    bordered
                                    color="primary"
                                    size="lg"
                                />
                            </Box>
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

                    <Box
                        position="static"
                        bottom="0rem"
                        width="100%"
                        backgroundColor={theme.palette.background.alt}
                    >
                        <Divider
                            sx={{
                                width: "100%",
                            }}
                        />
                        <FlexBetween
                            textTransform={"none"}
                            gap="1.5rem"
                            m="1rem 3rem "
                        >
                            <Box
                                component="img"
                                src="images/me.png"
                                alt="Profile"
                                width="40px"
                                height="40px"
                                sx={{
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            />
                            <Box textAlign="left">
                                <Typography
                                    fontWeight="bold"
                                    color="secondary.text"
                                >
                                    Abdulrahim
                                </Typography>
                            </Box>
                        </FlexBetween>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;
