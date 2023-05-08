import React from "react";
import {
    Box,
    Card,
    IconButton,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { Badge, Progress, ConfigProvider, theme as AntTheme } from "antd";
import { VerifiedTwoTone } from "@mui/icons-material";
import { SidebarContext } from "../contexts/SidebarContext";
import Image from "next/image";

const SkillBox = ({ children, label, value, skill, image, ...styles }) => {
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
                    <Badge.Ribbon
                        text={
                            <Typography
                                display="inline-block"
                                sx={{
                                    color: "#FFFF",
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
                                backgroundColor: theme.palette.background.alt,
                                border:
                                    theme.palette.mode === "dark" &&
                                    "1px solid #1E4976",
                                borderRadius: 1.5,

                                display: "flex",
                                flexDirection: "row",
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
                                }}
                            >
                                <Box
                                    height="fit-content"
                                    display="flex"
                                    flexGrow={1}
                                >
                                    <IconButton
                                        sx={{
                                            backgroundColor: "transparent",
                                            borderRadius: "50%",
                                            p: 0.3,
                                            color: styles.backgroundColor,
                                        }}
                                    >
                                        <VerifiedTwoTone
                                            sx={{ fontSize: "25px" }}
                                        />
                                    </IconButton>
                                </Box>
                                <Box display="flex" alignItems="flex-end">
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        display="inline-block"
                                    >
                                        <Box display="inline-block">
                                            <Box
                                                flexGrow={1}
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
                                                    height={isMedium ? 70 : 100}
                                                    width={isMedium ? 70 : 100}
                                                    alt={label}
                                                    style={{
                                                        filter:
                                                            theme.palette
                                                                .mode ===
                                                                "dark" &&
                                                            label ===
                                                                "Others" &&
                                                            "invert(1)",
                                                        transition:
                                                            "all 0.3s ease-in-out",
                                                        height:
                                                            (is300px &&
                                                                "50px") ||
                                                            (is900px &&
                                                                !isSidebarOpen &&
                                                                "50px") ||
                                                            (isSidebarOpen &&
                                                                is768px &&
                                                                "50px"),
                                                        width:
                                                            (is300px &&
                                                                "50px") ||
                                                            (is900px &&
                                                                !isSidebarOpen &&
                                                                "50px") ||
                                                            (isSidebarOpen &&
                                                                is768px &&
                                                                "50px"),
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                display="flex"
                                // border="1px solid #1E4976"
                                alignItems="flex-end"
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
                                    {skill &&
                                        skill.map((item) => (
                                            <Box
                                                key={item.name}
                                                mb={-1}
                                                p="0px"
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "10px",
                                                        m: 0,
                                                        mb: -1.2,
                                                    }}
                                                >
                                                    {item.label}
                                                </Typography>
                                                <Progress
                                                    percent={item.value}
                                                    status="active"
                                                    size="small"
                                                    trailColor={item.trailColor}
                                                    strokeColor={{
                                                        "0%": item.trailColor,
                                                        "100%": item.color,
                                                    }}
                                                    strokeWidth={
                                                        isMedium ? 4 : 8
                                                    }
                                                    style={{
                                                        width: "94%",

                                                        transition:
                                                            "all 0.3s ease-in-out",
                                                    }}
                                                    showInfo={false}
                                                />
                                            </Box>
                                        ))}
                                </Box>

                                <Box
                                    sx={{
                                        mt: 4,
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
                    </Badge.Ribbon>
                </Box>
            </Box>
        </ConfigProvider>
    );
};

export default SkillBox;
