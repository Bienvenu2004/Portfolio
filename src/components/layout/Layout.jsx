import { useState, useMemo, useEffect } from "react";
import { CssBaseline, ThemeProvider, Box, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../../theme/theme";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { Triangle } from "react-loader-spinner";

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const isMobile = useMediaQuery("(max-width: 600px)");
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const userModePreference = prefersDarkMode ? "dark" : "light";
    const [mode, setMode] = useState(userModePreference);
    const [mounted, setMounted] = useState(false);

    const theme = useMemo(
        () => createTheme(themeSettings(mode)),
        [mode, prefersDarkMode]
    );

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100vw",
                }}
            >
                <Triangle
                    height="80"
                    width="80"
                    color="#0091ea"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </Box>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                display={isMobile ? "block" : "flex"}
                width="100%"
                height="100%"
            >
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    isMobile={isMobile}
                    drawerWidth="250px"
                />
                <Box flexGrow={1}>
                    <Navbar
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                        setMode={setMode}
                        prefersDarkMode={prefersDarkMode}
                    />
                    {/** content of page*/}
                    {children}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Layout;
