import React, { useRef } from "react";
import { AppBar, Toolbar, useMediaQuery } from "@mui/material";
import SettingsDrawer from "./SettingsDrawer";
import SearchModal from "./SearchModal";
import LeftSide from "./navbarcomponents/LeftSide";
import RightSide from "./navbarcomponents/RightSide";

const Navbar = ({
    isSidebarOpen,
    setIsSidebarOpen,
    setMode,
    prefersDarkMode,
}) => {
    const settingsDrawerRef = useRef();
    const searchModalRef = useRef();
    const isMobile = useMediaQuery("(max-width: 600px)");

    const handleClick = () => settingsDrawerRef.current.alterDrawerState();

    return (
        <AppBar
            sx={{
                position: "sticky",
                margin: "0",
                background: "none",
                backdropFilter: "blur(10px)",
                boxShadow: "none",
            }}
        >
            <SettingsDrawer
                ref={settingsDrawerRef}
                setMode={setMode}
                placement="right"
                prefersDarkMode={prefersDarkMode}
            />
            <SearchModal ref={searchModalRef} />
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* Left */}
                <LeftSide
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    isMobile={isMobile}
                />
                {/* Right */}
                <RightSide
                    handleClick={handleClick}
                    isMobile={isMobile}
                    searchModalRef={searchModalRef}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
