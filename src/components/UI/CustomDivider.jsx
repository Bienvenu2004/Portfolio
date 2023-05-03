import React from "react";
import { Divider, useTheme } from "@mui/material";

const CustomDivider = (styles) => {
    const theme = useTheme();
    return (
        <Divider
            sx={{
                backgroundColor:
                    theme.palette.mode === "dark" && "rgb(0, 30, 60, 0.3)",
                width: "100%",
                borderColor:
                    theme.palette.mode === "dark" && "rgba(1, 87, 155, 0.8)",
                ...styles,
            }}
        />
    );
};

export default CustomDivider;
