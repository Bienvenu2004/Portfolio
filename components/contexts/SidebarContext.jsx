import React, { useMemo } from "react";

const SidebarContext = React.createContext({});

const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
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
