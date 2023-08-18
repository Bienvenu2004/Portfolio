import { useState, useMemo, Suspense, useEffect} from "react";
import { CssBaseline, ThemeProvider, Box, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../../theme/theme";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Preloader from "./Preloader/Preloader";
import Loader from "./Loader";

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
        const timeoutId = setTimeout(() => {
            setMounted(true);
        }, 4000); // Set the timeout interval to 3000 milliseconds (3 seconds)
    
        // Clean up the timeout when the component unmounts or when the effect changes
        return () => clearTimeout(timeoutId);
    }, []);

    if (!mounted) return <Loader theme={theme}/>
    
    return (
        <Suspense fallback={<Preloader />}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box display={"flex"} width="100%" height="100vh">
                    <Sidebar />
                    <Box flexGrow={1} display="flex" flexDirection="column">
                        <Box display="flex" height="fit-content">
                            <Navbar
                                setMode={setMode}
                                prefersDarkMode={prefersDarkMode}
                            />
                        </Box>
                        {/** content of page*/}
                        <Box flexGrow={1} display="block">
                            {children}
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </Suspense>
    );
};

export default Layout;
