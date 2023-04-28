import axios from "axios";
import {
    useTheme,
    Box,
    useMediaQuery,
    CircularProgress,
    Card,
    CardContent,
    Typography,
    IconButton,
} from "@mui/material";
import { useEffect } from "react";
import { getAllDocuments } from "@/lib/mongodbHelper";
import { Skeleton } from "@mui/material";
import { Statistic } from "antd";
import { ArrowUpwardOutlined } from "@mui/icons-material";

const Index = ({ javascript = "1", css = 1, database = 1 }) => {
    const matches = useMediaQuery("(min-width:1366px)", { noSsr: true });
    const theme = useTheme();
    // console.log("JS", javascript);
    // console.log("CSS", css);
    // console.log("DATABASE", database);

    return (
        <div
            className="app"
            style={{
                padding: "0 0.5rem",
                color: theme.palette.secondary.text,
                height: matches ? "92vh" : "90vh",
            }}
        >
            <Box
                mx={0.75}
                height="100%"
                borderRadius={3}
                // backgroundColor={theme.palette.background.alt}
                boxShadow={
                    theme.palette.mode === "light" &&
                    "0px 0px 2px 0px rgba(0,0,0,0.2)"
                }
            >
                {!javascript || !css || !database ? (
                    <Skeleton
                        variant="rounded"
                        width="100%"
                        height="100%"
                        animation="wave"
                        sx={{
                            backgroundColor:
                                theme.palette.mode === "dark" &&
                                theme.palette.background.alt,
                        }}
                    />
                ) : (
                    <Box
                        width="100%"
                        height="120px"
                        borderRadius={3}
                        boxShadow={
                            theme.palette.mode === "light" &&
                            "0px 0px 2px 0px rgba(0,0,0,0.2)"
                        }
                        display="flex"
                        justifyContent="space-evenly"
                        padding="10px"
                    >
                        <Box
                            width="24%"
                            height="inherit"
                            borderRadius={3}
                            backgroundColor={theme.palette.background.alt}
                            display="flex"
                        >
                            <Box height="100%" flexGrow={1}>
                                <Card
                                    style={{ height: "100%" }}
                                    sx={{
                                        backgroundColor: "transparent",
                                        borderRadius: 3,
                                        p: 1,
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
                                        >
                                            <Typography
                                                variant="h6"
                                                component="div"
                                                sx={{
                                                    pl: 1,
                                                }}
                                            >
                                                JavaScript
                                            </Typography>
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
                                                        sx={{
                                                            mt: 4,
                                                        }}
                                                    >
                                                        <ArrowUpwardOutlined
                                                            sx={{
                                                                color: theme
                                                                    .palette
                                                                    .secondary
                                                                    .main,
                                                                fontSize:
                                                                    "1.8rem",
                                                            }}
                                                        />
                                                        <Typography
                                                            display="inline-block"
                                                            variant="h2"
                                                            sx={{
                                                                color: theme
                                                                    .palette
                                                                    .secondary
                                                                    .main,
                                                                mt: "6px",
                                                                px: 1,
                                                            }}
                                                        >
                                                            75
                                                        </Typography>
                                                    </IconButton>
                                                </Box>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </Box>
                        </Box>
                        <Box
                            width="24%"
                            height="inherit"
                            borderRadius={3}
                            backgroundColor={theme.palette.background.alt}
                            display="flex"
                        >
                            <Box height="100%" flexGrow={1}>
                                <Card
                                    style={{ height: "100%" }}
                                    sx={{
                                        backgroundColor: "transparent",
                                        borderRadius: 3,
                                        p: 1,
                                    }}
                                >
                                    <Statistic
                                        title="JavaScript"
                                        value={78}
                                        precision={2}
                                        valueStyle={{
                                            color: theme.palette.secondary.main,
                                        }}
                                        prefix={<ArrowUpwardOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Box>
                        </Box>
                        <Box
                            width="24%"
                            height="inherit"
                            borderRadius={3}
                            backgroundColor={theme.palette.background.alt}
                            display="flex"
                        >
                            <Box height="100%" flexGrow={1}>
                                <Card
                                    style={{ height: "100%" }}
                                    sx={{
                                        backgroundColor: "transparent",
                                        borderRadius: 3,
                                        p: 1,
                                    }}
                                >
                                    <Statistic
                                        title="JavaScript"
                                        value={78}
                                        precision={2}
                                        valueStyle={{
                                            color: theme.palette.secondary.main,
                                        }}
                                        prefix={<ArrowUpwardOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Box>
                        </Box>
                        <Box
                            width="24%"
                            height="inherit"
                            borderRadius={3}
                            backgroundColor={theme.palette.background.alt}
                            display="flex"
                        >
                            <Box height="100%" flexGrow={1}>
                                <Card
                                    style={{ height: "100%" }}
                                    sx={{
                                        backgroundColor: "transparent",
                                        borderRadius: 3,
                                        p: 1,
                                    }}
                                >
                                    <Statistic
                                        title="JavaScript"
                                        value={78}
                                        precision={2}
                                        valueStyle={{
                                            color: theme.palette.secondary.main,
                                        }}
                                        prefix={<ArrowUpwardOutlined />}
                                        suffix="%"
                                    />
                                </Card>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
        </div>
    );
};

// export const getStaticProps = async () => {
//     try {
//         let result = await getAllDocuments("javascript");
//         const javascript = (await result.data) || null;
//         result = await getAllDocuments("css");
//         const css = (await result.data) || null;
//         result = await getAllDocuments("database");
//         const database = (await result.data) || null;
//         return {
//             props: {
//                 javascript: javascript.documents,
//                 css: css.documents,
//                 database: database.documents,
//             },
//             revalidate: 5,
//         };
//     } catch {
//         return {
//             props: {},
//         };
//     }
// };

export default Index;
