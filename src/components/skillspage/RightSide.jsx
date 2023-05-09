import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import SkillsDropdown from "@/components/skillspage/SkillsDropdown";
import ChartsDropdown from "@/components/skillspage/ChartsDropdown";
import LineChart from "@/components/PrimeLineChart";
import PieChart from "../PieChart";
import { pieDataJS, pieDataCSS, pieDataDB } from "@/data/charts";
import { SidebarContext } from "../contexts/SidebarContext";

const RightSide = ({
    selectedValue,
    selectedChartValue,
    selectedSkill,
    setSelectedSkill,
    skills,
    setSelectedChart,
    charts,
    selectedChart,
}) => {
    const is1075px = useMediaQuery("(max-width:1075px)");
    const { isSidebarOpen } = React.useContext(SidebarContext);

    return (
        <Box
            height="100%"
            width={is1075px && isSidebarOpen ? "100%" : "50%"}
            display="block"
            boxSizing="border-box"
            p={0.85}
        >
            <Box width="100%" display="flex" boxSizing="border-box">
                <Box
                    display="flex"
                    // border="1px solid red"
                    width="50%"
                    justifyContent="flex-start"
                    boxSizing="border-box"
                >
                    <SkillsDropdown
                        selectedValue={selectedValue}
                        selectedSkill={selectedSkill}
                        setSelectedSkill={setSelectedSkill}
                        skills={skills}
                    />
                </Box>
                <Box
                    display="flex"
                    // border="1px solid green"
                    width="50%"
                    justifyContent="flex-end"
                    boxSizing="border-box"
                    px={1.2}
                >
                    <ChartsDropdown
                        selectedChartValue={selectedChartValue}
                        selectedChart={selectedChart}
                        setSelectedChart={setSelectedChart}
                        charts={charts}
                    />
                </Box>
            </Box>
            <Box
                width={selectedChartValue === "Line" ? "100%" : "70%"}
                height="400px"
                m="auto"
                boxSizing="border-box"
                textAlign="center"
            >
                {selectedChartValue === "Pie" &&
                    selectedValue === "JavaScript" && (
                        <PieChart data={pieDataJS} />
                    )}
                {selectedChartValue === "Pie" && selectedValue === "CSS" && (
                    <PieChart data={pieDataCSS} />
                )}
                {selectedChartValue === "Pie" &&
                    selectedValue === "Database" && (
                        <PieChart data={pieDataDB} />
                    )}
                {selectedChartValue === "Line" &&
                    selectedValue === "JavaScript" && (
                        <LineChart
                            javascript={[
                                {
                                    label: "JavaScript",
                                    value: 80,
                                },
                                {
                                    label: "ReactJS",
                                    value: 75,
                                },
                                {
                                    label: "NodeJS",
                                    value: 80,
                                },
                                {
                                    label: "Express JS",
                                    value: 65,
                                },
                                {
                                    label: "NextJS",
                                    value: 85,
                                },
                            ]}
                        />
                    )}
                {selectedChartValue === "Line" && selectedValue === "CSS" && (
                    <LineChart
                        css={[
                            {
                                label: "CSS",
                                value: 80,
                            },
                            {
                                label: "Antd",
                                value: 75,
                            },
                            {
                                label: "Bootstrap",
                                value: 80,
                            },
                            {
                                label: "Material UI",
                                value: 78,
                            },
                            {
                                label: "Prime React",
                                value: 85,
                            },
                        ]}
                    />
                )}
                {selectedChartValue === "Line" &&
                    selectedValue === "Database" && (
                        <LineChart
                            database={[
                                {
                                    label: "MongoDB",
                                    value: 80,
                                },
                                {
                                    label: "AWS",
                                    value: 50,
                                },
                                {
                                    label: "MySQL",
                                    value: 80,
                                },
                                {
                                    label: "PostgreSQL",
                                    value: 78,
                                },
                            ]}
                        />
                    )}
                {selectedChartValue === "Line" &&
                    selectedValue === "Git & GitHub" && (
                        <LineChart
                            github={[
                                {
                                    label: "Git",
                                    value: 75,
                                },
                                {
                                    label: "GitHub",
                                    value: 84,
                                },
                                {
                                    label: "Vercel",
                                    value: 78,
                                },
                            ]}
                        />
                    )}
            </Box>
        </Box>
    );
};

export default RightSide;
