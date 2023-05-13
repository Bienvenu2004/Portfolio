import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import SkillsDropdown from "../dropdowns/SkillsDropdown";
import ChartsDropdown from "../dropdowns/ChartsDropdown";
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
    const is1050px = useMediaQuery("(max-width:1050px)");
    const { isSidebarOpen } = React.useContext(SidebarContext);
    const theme = useTheme();

    return (
        <Box
            height={is1050px && isSidebarOpen ? "fit-content" : "100%"}
            width={is1050px && isSidebarOpen ? "100%" : "50%"}
            pl={0.75}
            pt={1.5}
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
