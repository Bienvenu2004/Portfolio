import axios from "axios";
import React, { useContext } from "react";
import { useTheme, Box, Skeleton, useMediaQuery } from "@mui/material";
import SkillCards from "@/components/skillspage/top/SkillCards";
import { SidebarContext } from "@/components/contexts/SidebarContext";

//database helpers
import { getAllDocuments } from "@/lib/mongodbHelper";
import RightSide from "@/components/skillspage/rightside/RightSide";
import LeftSide from "@/components/skillspage/leftside/LeftSide";
const skills = ["JavaScript", "CSS", "Database", "Git & GitHub"];
const charts = ["Pie", "Bar", "Line"];

const Index = ({ javascript = 1, css = 1, database = 1 }) => {
    const theme = useTheme();
    const { isSidebarOpen } = useContext(SidebarContext);
    const [selectedSkill, setSelectedSkill] = React.useState(
        new Set(["JavaScript"])
    );
    const [selectedChart, setSelectedChart] = React.useState(new Set(["Bar"]));
    const is600px = useMediaQuery("(max-width:600px)");
    const is950px = useMediaQuery("(max-width:950px)");

    const selectedValue = React.useMemo(
        () => Array.from(selectedSkill).join(", ").replaceAll("_", " "),
        [selectedSkill]
    );

    const selectedChartValue = React.useMemo(
        () => Array.from(selectedChart).join(", ").replaceAll("_", " "),
        [selectedChart]
    );

    return (
        <Box
            sx={{
                color: theme.palette.secondary.text,
                display: "flex",
                padding: "0.75rem",
                height: "100%",
                width: "100%",
                flexDirection: "column",
                boxSizing: "border-box",
            }}
        >
            <Box height="fit-content" display="block">
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
                sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection:
                        (is950px && isSidebarOpen) || is600px
                            ? "column"
                            : "row",
                }}
            >
                {/**Left side */}
                <LeftSide />
                {/**Right side */}
                <RightSide
                    selectedSkill={selectedSkill}
                    setSelectedSkill={setSelectedSkill}
                    selectedChart={selectedChart}
                    setSelectedChart={setSelectedChart}
                    selectedValue={selectedValue}
                    selectedChartValue={selectedChartValue}
                    skills={skills}
                    charts={charts}
                />
            </Box>
        </Box>
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
