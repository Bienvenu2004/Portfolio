import React from "react";
import { IconButton, useTheme } from "@mui/material";

const Index = ({ children, onClick, href, target, ...styles }) => {
    const theme = useTheme();
    return (
        <IconButton
            sx={{
                display: "flex",
                transition: "all 0.5s ease-in-out",
                color: theme.palette.secondary.main,
                backgroundColor:
                    theme.palette.mode === "dark" && "rgba(69, 90, 100, 0.1)",
                borderRadius: "0.8rem",
                border:
                    theme.palette.mode === "dark"
                        ? "1px solid rgba(1, 87, 155, 0.4)"
                        : "1px solid rgba(1, 87, 155, 0.2)",
                "&:hover": {
                    backgroundColor:
                        theme.palette.mode === "dark"
                            ? "rgba(1, 87, 155, 0.4)"
                            : theme.palette.secondary.main,
                    transition: "all 0.5s ease-in-out",
                    "& svg": {
                        color: theme.palette.mode === "light" && "#FFF",
                    },
                },
                ...styles,
            }}
            href={href}
            target={target}
            onClick={onClick}
        >
            {children}
        </IconButton>
    );
};

export default Index;
