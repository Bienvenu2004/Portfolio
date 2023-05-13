import React from "react";
import { pieDataJS, pieDataDB, pieDataCSS } from "@/data/charts";
import PieChart from "../../../PieChart";
import { Box } from "@mui/material";

const PieCharts = ({ selectedValue, selectedChartValue }) => {
    return (
        <Box width="100%">
            {selectedChartValue === "Pie" && selectedValue === "JavaScript" && (
                <PieChart data={pieDataJS} />
            )}
            {selectedChartValue === "Pie" && selectedValue === "CSS" && (
                <PieChart data={pieDataCSS} />
            )}
            {selectedChartValue === "Pie" && selectedValue === "Database" && (
                <PieChart data={pieDataDB} />
            )}
            {selectedChartValue === "Pie" &&
                selectedValue === "Git & GitHub" && (
                    <PieChart
                        data={[
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
                        ]}
                    />
                )}
        </Box>
    );
};

export default PieCharts;
