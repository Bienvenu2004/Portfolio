import { useState, useMemo, useEffect, useContext } from "react";
import { CssBaseline, ThemeProvider, Box, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../../theme/theme";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { Triangle } from "react-loader-spinner";

const Layout = ({ children }) => {
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
                    backgroundColor: theme.palette.background.main,
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
            <Box display={"flex"} width="100vw" height="100vh">
                <Sidebar />
                <Box flexGrow={1} display="flex" flexDirection="column">
                    <Box display="flex" height="fit-content">
                        <Navbar
                            setMode={setMode}
                            prefersDarkMode={prefersDarkMode}
                        />
                    </Box>
                    {/** content of page*/}
                    <Box flexGrow={1} display="flex">
                        {children}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Layout;
