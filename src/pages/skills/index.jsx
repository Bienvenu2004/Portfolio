import axios from "axios";
import React, { useContext } from "react";
import { useTheme, Box, Skeleton, useMediaQuery } from "@mui/material";
import SkillCards from "@/components/skillspage/top/SkillCards";
import { SidebarContext } from "@/components/contexts/SidebarContext";

//database helpers
import { getAllDocuments } from "@/lib/mongodbHelper";
import RightSide from "@/components/skillspage/rightside/RightSide";
import LeftSide from "@/components/skillspage/leftside/LeftSide";
import CustomHead from "@/components/head/Head";
const skills = ["JavaScript", "CSS", "Database", "Git & GitHub"];
const charts = ["Pie", "Bar", "Line"];

const Index = ({ javascriptT = 1, cssS = 1, databaseE = 1, githubB = 1 }) => {
    const javascript = [
        {
            id: "JavaScript",
            label: "JavaScript",
            value: 75,
            color: "hsl(38, 70%, 50%)",
            trailColor: "hsl(38, 70%, 50%,0.4)",
        },
        {
            id: "NodeJS",
            label: "NodeJS",
            value: 70,
            color: "hsl(134, 70%, 50%)",
            trailColor: "hsl(134, 70%, 50%,0.4)",
        },
        {
            id: "ReactJS",
            label: "ReactJS",
            value: 70,
            color: "hsl(216, 70%, 50%)",
            trailColor: "hsl(216, 70%, 50%,0.4)",
        },
        {
            id: "NextJS",
            label: "NextJS",
            value: 80,
            color: "hsl(310, 70%, 50%)",
            trailColor: "hsl(310, 70%, 50%,0.4)",
        },
        {
            id: "ExpressJS",
            label: "ExpressJS",
            value: 65,
            color: "hsl(107, 70%, 50%)",
            trailColor: "hsl(107, 70%, 50%,0.4)",
        },
    ];

    const css = [
        {
            id: "CSS",
            label: "CSS",
            value: 75,
            color: "rgb(0, 126, 253)",
            trailColor: "rgb(0, 126, 253,0.4)",
        },
        {
            id: "Antd",
            label: "Antd",
            value: 70,
            color: "rgb(84, 84, 197)",
            trailColor: "rgb(84, 84, 197,0.4)",
        },
        {
            id: "NextUI",
            label: "NextUI",
            value: 85,
            color: "hsl(310, 70%, 50%)",
            trailColor: "hsl(310, 70%, 50%,0.4)",
        },
        {
            id: "Bootstrap",
            label: "Bootstrap",
            value: 73,
            color: "rgb(52, 32, 86)",
            trailColor: "rgb(52, 32, 86,0.4)",
        },
        {
            id: "HTML",
            label: "HTML",
            value: 75,
            color: "rgb(157, 101, 201)",
            trailColor: "rgb(157, 101, 201,0.4)",
        },
        {
            id: "MUI5",
            label: "MUI5",
            value: 80,
            color: "hsl(216, 70%, 50%)",
            trailColor: "hsl(216, 70%, 50%,0.4)",
        },
        {
            id: "Primereact",
            label: "Primereact",
            value: 70,
            color: "rgb(212, 171, 220)",
            trailColor: "rgb(212, 171, 220,0.4)",
        },
    ];

    const database = [
        {
            id: "MongoDB",
            label: "MongoDB",
            value: 72,
            color: "hsl(134, 70%, 50%)",
            trailColor: "hsl(134, 70%, 50%, 0.4)",
        },
        {
            id: "AWS",
            label: "AWS",
            value: 50,
            color: "hsl(38, 70%, 50%)",
            trailColor: "hsl(38, 70%, 50%,0.4)",
        },
        {
            id: "Firebase",
            label: "Firebase",
            value: 60,
            color: "hsl(40, 70%, 50%)",
            trailColor: "hsl(40, 70%, 50%,0.4)",
        },
        {
            id: "MySQL",
            label: "MySQL",
            value: 79,
            color: "hsl(216, 70%, 50%)",
            trailColor: "hsl(216, 70%, 50%, 0.4)",
        },
        {
            id: "PostgreSQL",
            label: "PostgreSQL",
            value: 78,
            color: "hsl(134, 70%, 50%)",
            trailColor: "hsl(134, 70%, 50%,0.4)",
        },
    ];

    const github = [
        {
            id: "GitHub",
            label: "GitHub",
            value: 85,
            color: "rgb(0,0,0)",
            trailColor: "rgb(0, 0, 0, 0.4)",
        },
        {
            id: "Git",
            label: "Git",
            value: 80,
            color: "rgb(233, 78, 49)",
            trailColor: "rgb(233, 78, 49,0.4)",
        },
        {
            id: "Vercel",
            label: "Vercel",
            value: 82,
            color: "rgb(149, 0, 174)",
            trailColor: "rgb(149, 0, 174, 0.4)",
        },
    ];

    const theme = useTheme();
    const { isSidebarOpen } = useContext(SidebarContext);
    const [selectedSkill, setSelectedSkill] = React.useState(
        new Set(["JavaScript"])
    );
    const [selectedChart, setSelectedChart] = React.useState(new Set(["Bar"]));
    const is600px = useMediaQuery("(max-width:600px)");
    const is660px = useMediaQuery("(max-width:660px)");
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
        <React.Fragment>
            <CustomHead title="Skills" />
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
                    {!javascriptT || !cssS || !databaseE ? (
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
                            (is950px && isSidebarOpen) ||
                            is600px ||
                            (is660px && !isSidebarOpen)
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
                        javascript={javascript}
                        css={css}
                        database={database}
                        github={github}
                    />
                </Box>
            </Box>
        </React.Fragment>
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
