import React from "react";
import {
    Box,
    Card,
    IconButton,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { Badge } from "antd";
import { ArrowUpwardOutlined, VerifiedTwoTone } from "@mui/icons-material";

const SkillBox = ({ label, value, ...styles }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width: 450px)");

    return (
        <Box
            width={isMobile ? "100%" : "48%"}
            height="inherit"
            m={0.5}
            borderRadius={3}
            backgroundColor={theme.palette.background.alt}
            display="flex"
            justifyContent="space-between"
        >
            <Box height="100%" width="100%">
                <Badge.Ribbon
                    text={
                        <Typography
                            display="inline-block"
                            sx={{
                                color: theme.palette.secondary.text,
                                fontWeight: 400,
                                px: 1,
                            }}
                        >
                            {label}
                        </Typography>
                    }
                    color={styles.backgroundColor}
                    size="large"
                >
                    <Card
                        style={{ height: "100%" }}
                        sx={{
                            backgroundColor: "transparent",
                            borderRadius: 1.5,
                            p: 1,
                            boxShadow:
                                theme.palette.mode === "light" &&
                                "0px 0px 10px 0px rgba(0, 0, 0, 0.08)",
                        }}
                    >
                        <Box
                            sx={{
                                p: 0,
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <Box height="fit-content" display="flex">
                                <IconButton
                                    sx={{
                                        backgroundColor: "transparent",
                                        borderRadius: "50%",
                                        p: 0.3,
                                        color: styles.backgroundColor,
                                    }}
                                >
                                    <VerifiedTwoTone
                                        sx={{ fontSize: "23px" }}
                                    />
                                </IconButton>
                            </Box>
                            <Box
                                flexGrow={1}
                                display="flex"
                                alignItems="flex-end"
                            >
                                <Typography
                                    variant="h6"
                                    component="div"
                                    display="inline-block"
                                >
                                    <Box display="inline-block">
                                        <IconButton
                                            disableRipple={true}
                                            sx={{
                                                mt: 4,
                                                cursor: "default",
                                                "&:hover": {
                                                    backgroundColor:
                                                        "transparent",
                                                },
                                            }}
                                        >
                                            <ArrowUpwardOutlined
                                                sx={{
                                                    color: "#FFF",
                                                    fontSize: "1.8rem",
                                                }}
                                            />
                                            <Typography
                                                display="inline-block"
                                                variant="h2"
                                                sx={{
                                                    color: theme.palette
                                                        .secondary.text,
                                                    mt: "6px",
                                                    px: 1,
                                                }}
                                            >
                                                {value}
                                            </Typography>
                                        </IconButton>
                                    </Box>
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </Badge.Ribbon>
            </Box>
        </Box>
    );
};

export default SkillBox;
