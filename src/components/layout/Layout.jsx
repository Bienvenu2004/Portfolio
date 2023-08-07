import { useState, useMemo, Suspense} from "react";
import { CssBaseline, ThemeProvider, Box, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../../theme/theme";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Loader from "./Loader";

const Layout = ({ children }) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const userModePreference = prefersDarkMode ? "dark" : "light";
    const [mode, setMode] = useState(userModePreference);

    const theme = useMemo(
        () => createTheme(themeSettings(mode)),
        [mode, prefersDarkMode]
    );

    return (
        <Suspense fallback={<Loader/>}>
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
