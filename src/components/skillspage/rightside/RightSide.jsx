import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import SkillsDropdown from "@/components/skillspage/dropdowns/SkillsDropdown";
import ChartsDropdown from "@/components/skillspage/dropdowns/ChartsDropdown";
import { SidebarContext } from "../../contexts/SidebarContext";
import PieCharts from "./charts/PieCharts";
import LineCharts from "./charts/LineCharts";
import BarCharts from "./charts/BarCharts";

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
    const theme = useTheme();

    return (
        <Box
            height="100%"
            width={is1075px && isSidebarOpen ? "100%" : "50%"}
            display="block"
            boxSizing="border-box"
            p={0.85}
            pr={1.8}
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
                width="100%"
                height={"320px"}
                m="auto"
                boxSizing="border-box"
                textAlign="center"
                elevation={3}
                sx={{
                    background:
                        theme.palette.mode === "light" &&
                        theme.palette.background.alt,
                    borderRadius: "5px",
                }}
            >
                <PieCharts
                    selectedChartValue={selectedChartValue}
                    selectedValue={selectedValue}
                />
                <LineCharts
                    selectedChartValue={selectedChartValue}
                    selectedValue={selectedValue}
                />
                <BarCharts
                    selectedChartValue={selectedChartValue}
                    selectedValue={selectedValue}
                />
            </Box>
        </Box>
    );
};

export default RightSide;
