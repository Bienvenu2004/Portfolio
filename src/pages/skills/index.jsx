import axios from "axios";
import { useEffect } from "react";
import {
    useTheme,
    Box,
    Skeleton,
    useMediaQuery,
    Typography,
} from "@mui/material";
import { Progress } from "antd";

import { styled } from "@mui/material/styles";
import SkillBox from "@/components/skillspage/SkillBox";
//database helpers
import { getAllDocuments } from "@/lib/mongodbHelper";
//images
import js from "@/public/images/js.png";
import css3 from "@/public/images/css.png";
import mongodb from "@/public/images/mongodb.png";
import vercel from "@/public/images/vercel.png";

const Index = ({ javascript = 1, css = 1, database = 1 }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width: 600px)");
    const isMedium = useMediaQuery("(max-width: 720px)");
    // console.log("JS", javascript);
    // console.log("CSS", css);
    // console.log("DATABASE", database);

    return (
        <div
            className="app"
            style={{
                padding: "0",
                color: theme.palette.secondary.text,
                height: "100%",
            }}
        >
            <Box
                height="100%"
                borderRadius={3}
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
                        height="fit-content"
                        borderRadius={3}
                        display="flex"
                        justifyContent="space-between"
                        flexDirection="row"
                        padding="10px"
                        flexWrap={isMedium && "wrap"}
                    >
                        <Box
                            display="flex"
                            height="100%"
                            width="100%"
                            mx={0.5}
                            justifyContent="space-between"
                            flexWrap={isMobile && "wrap"}
                        >
                            <SkillBox
                                label="JavaScript"
                                value={Math.round(((65 + 80 + 70) / 300) * 100)}
                                backgroundColor="#E8C825"
                                image={js}
                                trailColor="rgb(232, 200, 37, 0.4)"
                                strokeColor="rgb(232, 200, 37)"
                                skill={[
                                    {
                                        name: "Express JS",
                                        value: 65,
                                        trailColor: "rgb(0, 126, 253, 0.4)",
                                        strokeColor: "rgb(0, 126, 253)",
                                    },
                                    {
                                        name: "NextJS",
                                        value: 80,
                                        trailColor: "rgb(0, 0, 0, 0.3)",
                                        strokeColor: "rgb(0, 0, 0)",
                                    },
                                    {
                                        name: "NodeJS",
                                        value: 70,
                                        trailColor: "rgb(1, 236, 100, 0.4)",
                                        strokeColor: "rgb(1, 236, 100)",
                                    },
                                ]}
                            />

                            <SkillBox
                                label="CSS"
                                value={Math.round(((75 + 70 + 70) / 300) * 100)}
                                backgroundColor="#007EFD"
                                trailColor="rgb(0, 126, 253, 0.4)"
                                strokeColor="rgb(0, 126, 253)"
                                image={css3}
                                skill={[
                                    {
                                        name: "Material UI",
                                        value: 75,
                                        trailColor: "hsl(216, 70%, 50%, 0.4)",
                                        strokeColor: "hsl(216, 70%, 50%)",
                                    },
                                    {
                                        name: "Antd",
                                        value: 70,
                                        trailColor: "rgb(84, 84, 197, 0.4)",
                                        strokeColor: "rgb(84, 84, 197)",
                                    },
                                    {
                                        name: "Primereact",
                                        value: 70,
                                        trailColor: "rgb(212, 171, 220, 0.4)",
                                        strokeColor: "rgb(212, 171, 220)",
                                    },
                                ]}
                            />
                        </Box>
                        <Box
                            display="flex"
                            height="100%"
                            width="100%"
                            mx={0.5}
                            justifyContent="space-between"
                            flexWrap={isMobile && "wrap"}
                        >
                            <SkillBox
                                label="Database"
                                value={Math.round(((72 + 50 + 78) / 300) * 100)}
                                backgroundColor="#01EC64"
                                strokeColor="#01EC64"
                                trailColor="rgb(1, 236, 100, 0.4)"
                                image={mongodb}
                                skill={[
                                    {
                                        name: "MongoDB",
                                        value: 72,
                                        trailColor: "rgb(1, 236, 100, 0.4)",
                                        strokeColor: "rgb(1, 236, 100)",
                                    },
                                    {
                                        name: "AWS",
                                        value: 50,
                                        trailColor: "hsl(38, 70%, 50%, 0.4)",
                                        strokeColor: "hsl(38, 70%, 50%)",
                                    },
                                    {
                                        name: "PostgreSQL",
                                        value: 78,
                                        trailColor: "hsl(134, 70%, 50%, 0.4)",
                                        strokeColor: "hsl(134, 70%, 50%)",
                                    },
                                ]}
                            />
                            <SkillBox
                                label="Vercel"
                                value={82}
                                backgroundColor="#9500ae"
                                strokeColor="rgb(149, 0, 174)"
                                trailColor="rgb(149, 0, 174,0.4)"
                                image={vercel}
                                skill={[
                                    {
                                        name: "Vercel",
                                        value: 82,
                                        trailColor: "rgb(149, 0, 174, 0.4)",
                                        strokeColor: "rgb(149, 0, 174)",
                                    },
                                ]}
                            />
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
