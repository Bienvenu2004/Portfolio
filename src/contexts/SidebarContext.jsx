import React, { useMemo } from "react";
import { useMediaQuery } from "@mui/material";

const SidebarContext = React.createContext({});

const SidebarProvider = ({ children }) => {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(
        isMobile ? false : true
    );
    const [isPersistent, setIsPersistent] = React.useState(true);

    const sideBarState = useMemo(
        () => ({
            isSidebarOpen,
            setIsSidebarOpen,
            isPersistent,
            setIsPersistent,
        }),
        [isSidebarOpen, isPersistent]
    );

    return (
        <SidebarContext.Provider value={sideBarState}>
            {children}
        </SidebarContext.Provider>
    );
};

export { SidebarProvider, SidebarContext };
