import axios from "axios";
import { useContext } from "react";
import { useTheme, Box, Skeleton } from "@mui/material";
import SkillCards from "@/components/skillspage/SkillCards";
import { SidebarContext } from "@/components/contexts/SidebarContext";
import Stack from "@/components/skillspage/Stack";
import { pieDataJS, pieDataCSS, pieDataDB } from "@/data/charts";
import PieChart from "@/components/PieChart";
//database helpers
import { getAllDocuments } from "@/lib/mongodbHelper";

const Index = ({ javascript = 1, css = 1, database = 1 }) => {
    const theme = useTheme();
    const { isSidebarOpen } = useContext(SidebarContext);

    return (
        <div
            className="app"
            style={{
                padding: "0",
                color: theme.palette.secondary.text,
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                height="fit-content"
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
                    <SkillCards
                        javascript={javascript}
                        css={css}
                        database={database}
                    />
                )}
            </Box>
            <Box
                height="100%"
                width="100%"
                display="flex"
                flexDirection="row"
                flexGrow={1}
            >
                {/**Left side */}
                <Box height="100%" width="50%" display="flex" px={0.75}>
                    <Stack
                        mongodb={[
                            {
                                label: "MongoDB",
                                value: 80,
                            },
                        ]}
                        expressjs={[
                            {
                                label: "Express JS",
                                value: 65,
                            },
                        ]}
                        nextjs={[
                            {
                                label: "NextJS",
                                value: 70,
                            },
                        ]}
                        reactjs={[
                            {
                                label: "ReactJS",
                                value: 75,
                            },
                        ]}
                        nodejs={[
                            {
                                label: "NodeJS",
                                value: 80,
                            },
                        ]}
                    />
                </Box>
                {/**Right side */}
                <Box height="100%" width="50%" display="flex" px={0.75}>
                    <PieChart data={pieDataJS} />
                </Box>
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
