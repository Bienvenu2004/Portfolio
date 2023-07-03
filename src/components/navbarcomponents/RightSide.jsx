import React from "react";
import FlexBetween from "../FlexBetween";
import {
    Button,
    Chip,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import {
    Search,
    GitHub,
    LinkedIn,
    SettingsOutlined,
} from "@mui/icons-material";
import CustomIconButton from "../UI/CustomIconButton";

let detectedOS;

const RightSide = ({ handleClick, searchModalRef }) => {
    const theme = useTheme();
    const isExtraSmall = useMediaQuery("(max-width: 400px)");
    const isMobile = useMediaQuery("(max-width: 539px)");

    //add event listener for ctrl+k for Linux and Windows
    document.addEventListener("keydown", (event) => {
        if ((event.ctrlKey && event.key === "k") || event.key === "K") {
            searchModalRef.current.alterSearchModalState();
        }
    });
    //add event listener for cmd+k for MacOS
    document.addEventListener("keydown", (event) => {
        if ((event.metaKey && event.key === "k") || event.key === "K") {
            searchModalRef.current.alterSearchModalState();
        }
    });

    //get OS type
    if (navigator.userAgent.indexOf("Mac") != -1) detectedOS = "MacOS";

    return (
        <FlexBetween gap="0.3rem">
            {/* Search button for large screens*/}
            {!isMobile && (
                <Button
                    variant="outlined"
                    startIcon={
                        <Search
                            sx={{
                                color: "rgba(1, 87, 155, 0.8)",
                                fontSize: isMobile && "20px",
                            }}
                        />
                    }
                    endIcon={
                        <Chip
                            variant="outlined"
                            label={
                                <Typography
                                    sx={{
                                        textTransform: "none",
                                        fontSize: "12px",
                                        color: theme.palette.secondary.text,
                                        fontWeight: "bold",
                                    }}
                                >
                                    {detectedOS === "MacOS" && "⌘ + K"}
                                    {detectedOS !== "MacOS" && "Ctrl+K"}
                                </Typography>
                            }
                            size="small"
                            sx={{
                                textTransform: "none",
                                transition: "all 0.2s ease-in-out",
                                cursor: "pointer",
                                backgroundColor:
                                    theme.palette.mode === "dark"
                                        ? "rgba(1, 87, 155, 0.5)"
                                        : "#FFF",
                                border:
                                    theme.palette.mode === "dark"
                                        ? "1px solid rgba(1, 87, 155, 0.8)"
                                        : "1px solid rgba(1, 1, 1, 0.2)",
                                "&.MuiChip-root": {
                                    borderRadius: "8px",
                                    margin: "0px",
                                },
                            }}
                        />
                    }
                    sx={{
                        width: "fit-content",
                        borderRadius: "0.8rem",
                        textTransform: "none",
                        fontSize: "14px",
                        paddingX: "8px",
                        color:
                            theme.palette.mode === "dark"
                                ? "rgba(255,255, 255, 0.6)"
                                : "rgba(0, 0, 0, 0.5)",
                        border:
                            theme.palette.mode === "dark"
                                ? "1px solid rgba(1, 87, 155, 0.4)"
                                : "1px solid rgba(1, 87, 155, 0.2)",
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? "rgba(1, 87, 155, 0.1)"
                                : "rgba(1, 87, 155, 0.03)",
                        "&:hover": {
                            backgroundColor:
                                theme.palette.mode === "dark"
                                    ? "rgba(1, 87, 155, 0.25)"
                                    : "rgba(1, 87, 155, 0.1)",
                            transition: "all 0.3s ease-in-out",
                            border:
                                theme.palette.mode === "dark"
                                    ? "1px solid rgba(1, 87, 155, 0.4)"
                                    : "1px solid rgba(1, 87, 155, 0.2)",
                        },
                    }}
                    onClick={() =>
                        searchModalRef.current.alterSearchModalState()
                    }
                >
                    Search...
                </Button>
            )}
            {/** Search button for small screens*/}
            {isMobile && (
                <CustomIconButton
                    onClick={() =>
                        searchModalRef.current.alterSearchModalState()
                    }
                >
                    <Search sx={{ fontSize: "20px" }} />
                </CustomIconButton>
            )}
            {/** Github button*/}
            <CustomIconButton
                href="https://www.github.com/Abdulrahim2567"
                target="_blank"
            >
                <GitHub sx={{ fontSize: "20px" }} />
            </CustomIconButton>
            {/** LinkedIn button*/}
            {!isExtraSmall && (
                <CustomIconButton
                    href="https://www.linkedin.com/in/abdou-rahim-729411246/"
                    target="_blank"
                >
                    <LinkedIn sx={{ fontSize: "20px" }} />
                </CustomIconButton>
            )}
            {/** Settings button*/}
            <CustomIconButton onClick={handleClick}>
                <SettingsOutlined sx={{ fontSize: "20px" }} />
            </CustomIconButton>
        </FlexBetween>
    );
};

export default RightSide;
