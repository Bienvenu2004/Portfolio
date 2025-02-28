import React, { useContext } from "react";
import { useTheme, Box, Skeleton, useMediaQuery } from "@mui/material";
import SkillCards from "@/components/skillspage/top/SkillCards";
import { SidebarContext } from "@/contexts/SidebarContext";

//database helpers
import { getAllDocuments } from "../api/portfolioapi";
import RightSide from "@/components/skillspage/rightside/RightSide";
import LeftSide from "@/components/skillspage/leftside/LeftSide";
import CustomHead from "@/components/head/Head";
const skills = ["JavaScript", "CSS", "Database", "Git & GitHub"];
const charts = ["Pie", "Bar", "Line"];
import { javascript, css, database, github } from "@/data/skills";

const Index = ({ javascript, css, database, github }) => {
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
                    {!javascript || !css || !database || !github ? (
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
                            github={github}
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
                    <LeftSide javascript={javascript} database={database} />
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

export const getStaticProps = async () => {
    try {
        let result = await getAllDocuments(null, "javascript");
        const javascript = JSON.parse(JSON.stringify(await result)) || null;
        result = await getAllDocuments(null, "css");
        const css = JSON.parse(JSON.stringify(await result)) || null;
        result = await getAllDocuments(null, "database");
        const database = JSON.parse(JSON.stringify(await result)) || null;
        result = await getAllDocuments(null, "others");
        const github = JSON.parse(JSON.stringify(await result)) || null;

        return {
            props: {
                javascript,
                css,
                database,
                github,
            },
            revalidate: 5,
        };
    } catch {
        return {
            props: {},
        };
    }
};

export default Index;
