import axios from "axios";
import { useTheme, Box, Skeleton, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { getAllDocuments } from "@/lib/mongodbHelper";

import SkillBox from "@/components/skillspage/SkillBox";

const Index = ({ javascript = 1, css = 1, database = 1 }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width: 450px)");
    const isMedium = useMediaQuery("(max-width: 720px)");
    // console.log("JS", javascript);
    // console.log("CSS", css);
    // console.log("DATABASE", database);

    return (
        <div
            className="app"
            style={{
                padding: "0 0.5rem",
                color: theme.palette.secondary.text,
                height: "100%",
            }}
        >
            <Box
                height="100%"
                borderRadius={3}
                backgroundColor={theme.palette.background.alt}
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
                                value={75}
                                backgroundColor="rgb(255, 132, 0)"
                            />
                            <SkillBox
                                label="CSS"
                                value={75}
                                backgroundColor="rgb(0, 159, 189)"
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
                                value={75}
                                backgroundColor="#01EC64"
                            />
                            <SkillBox
                                label="Vercel"
                                value={75}
                                backgroundColor="rgb(58, 16, 120)"
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
