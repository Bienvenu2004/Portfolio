import React from "react";
import {
    Box,
    Card,
    IconButton,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { Progress, ConfigProvider, theme as AntTheme } from "antd";

import { SidebarContext } from "../../contexts/SidebarContext";
import Image from "next/image";

const StackCard = ({ label, value, image, ...styles }) => {
    const theme = useTheme();
    const is300px = useMediaQuery("(max-width: 300px)");
    const is768px = useMediaQuery("(max-width: 768px)");
    const is900px = useMediaQuery("(max-width: 900px)");
    const isMedium = useMediaQuery("(max-width: 1366px)");
    const { isSidebarOpen } = React.useContext(SidebarContext);

    return (
        <ConfigProvider
            theme={{
                algorithm:
                    theme.palette.mode === "dark"
                        ? AntTheme.darkAlgorithm
                        : AntTheme.lightAlgorithm,
            }}
        >
            <Box
                width={"100%"}
                height="inherit"
                m={0.75}
                borderRadius={3}
                backgroundColor="transparent"
                display="flex"
                justifyContent="space-between"
                sx={{
                    transition: "all 0.3s ease-in-out",
                }}
            >
                <Box height="100%" width="100%">
                    <Card
                        style={{ height: "100%" }}
                        sx={{
                            backgroundColor: theme.palette.background.alt,
                            border:
                                theme.palette.mode === "dark" &&
                                "1px solid #1E4976",
                            borderRadius: 1.5,
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            boxShadow:
                                theme.palette.mode === "light" &&
                                "0px 0px 10px 0px rgba(0, 0, 0, 0.08)",
                            transition: "all 0.3s ease-in-out",
                        }}
                    >
                        <Box
                            sx={{
                                p: 0,
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                // border: "1px solid #1E4976",
                            }}
                        >
                            <Box
                                height="100%"
                                display="flex"
                                // border="1px solid #1E4976"
                                alignItems="center"
                                justifyContent="center"
                                px={
                                    label === "Others" ||
                                    (label === "Database" && 1)
                                }
                            >
                                <Image
                                    src={image}
                                    height={isMedium ? 50 : 70}
                                    width={isMedium ? 50 : 70}
                                    alt={label}
                                    style={{
                                        filter:
                                            theme.palette.mode === "dark" &&
                                            (label === "nextJS" ||
                                                label === "Express JS") &&
                                            "invert(1)",
                                        transition: "all 0.3s ease-in-out",
                                        height:
                                            (is300px && "50px") ||
                                            (is900px &&
                                                !isSidebarOpen &&
                                                "50px") ||
                                            (isSidebarOpen &&
                                                is768px &&
                                                "50px"),
                                        width:
                                            (is300px && "50px") ||
                                            (is900px &&
                                                !isSidebarOpen &&
                                                "50px") ||
                                            (isSidebarOpen &&
                                                is768px &&
                                                "50px") ||
                                            (label === "Express JS" && "120px"),
                                        marginRight:
                                            (label === "Node JS" && "10px") ||
                                            (label === "React JS" && "10px") ||
                                            (label === "MongoDB" && "12px"),
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box
                            display="flex"
                            // border="1px solid #1E4976"
                            alignItems="center"
                            justifyContent="flex-end"
                            flexDirection="row"
                            flexGrow={1}
                            width="100%"
                        >
                            <Box
                                display="flex"
                                // border="1px solid #1E4976"
                                flexDirection="column"
                                width="100%"
                                flexGrow={2}
                                height={120}
                                pt={3}
                            >
                                {/**progress bars */}

                                <Box p="0px">
                                    <Typography
                                        sx={{
                                            fontSize: "18px",
                                            m: 0,
                                            mb: 0.5,
                                            mt: 1.2,
                                        }}
                                    >
                                        {label}
                                    </Typography>
                                    <Progress
                                        percent={value}
                                        status="active"
                                        size="small"
                                        trailColor={styles.trailColor}
                                        strokeColor={{
                                            "0%": styles.trailColor,
                                            "100%": styles.strokeColor,
                                        }}
                                        strokeWidth={isMedium ? 5 : 10}
                                        style={{
                                            width: "94%",

                                            transition: "all 0.3s ease-in-out",
                                        }}
                                        showInfo={false}
                                    />
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    flexGrow: 1,
                                    height: "75%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mr: 1,
                                }}
                            >
                                <Progress
                                    percent={value}
                                    size="small"
                                    status="active"
                                    trailColor={styles.trailColor}
                                    type="dashboard"
                                    strokeColor={styles.strokeColor}
                                    strokeWidth={8}
                                />
                            </Box>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </ConfigProvider>
    );
};

export default StackCard;
