import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import SkillsDropdown from "../dropdowns/SkillsDropdown";
import ChartsDropdown from "../dropdowns/ChartsDropdown";
import { SidebarContext } from "@/components/contexts/SidebarContext";
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
    const is600px = useMediaQuery("(max-width:600px)");
    const is660px = useMediaQuery("(max-width:660px)");
    const is950px = useMediaQuery("(max-width:950px)");
    const { isSidebarOpen } = React.useContext(SidebarContext);
    const theme = useTheme();

    return (
        <Box
            height={"fit-content"}
            width={
                (is950px && isSidebarOpen) ||
                is600px ||
                (is660px && !isSidebarOpen && "100%") ||
                "50%"
            }
            border="1px solid blue"
            pl={
                (!is950px && isSidebarOpen && 0.75) ||
                (is660px && !isSidebarOpen && 0)
            }
            pt={(!(is950px && isSidebarOpen) && 1.5) || 0.75}
        >
            <Box
                width="100%"
                height={"330px"}
                m="auto"
                pb={1}
                justifyContent="center"
                elevation={3}
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                sx={{
                    background: theme.palette.background.paper,
                    borderRadius: "5px",
                }}
            >
                <Box
                    width="100%"
                    height="40px"
                    display="flex"
                    alignContent="center"
                    alignItems="center"
                >
                    <Box
                        display="flex"
                        width="50%"
                        height={"30px"}
                        alignItems="center"
                        justifyContent="flex-start"
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
                        height={"30px"}
                        alignItems="center"
                        width="50%"
                        justifyContent="flex-end"
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
                    display="flex"
                    className="charts"
                    flexGrow={1}
                    width="100%"
                    height="90%"
                >
                    {selectedChartValue === "Pie" && (
                        <PieCharts
                            selectedChartValue={selectedChartValue}
                            selectedValue={selectedValue}
                        />
                    )}
                    {selectedChartValue === "Line" && (
                        <LineCharts
                            selectedChartValue={selectedChartValue}
                            selectedValue={selectedValue}
                        />
                    )}
                    {selectedChartValue === "Bar" && (
                        <BarCharts
                            selectedChartValue={selectedChartValue}
                            selectedValue={selectedValue}
                        />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default RightSide;
