import React from "react";
import LineChart from "@/components/charts/PrimeLineChart";
import { Box } from "@mui/material";

const LineCharts = ({
    selectedChartValue,
    selectedValue,
    javascript,
    css,
    database,
    github,
}) => {
    return (
        <Box display="flex" width="100%">
            {selectedChartValue === "Line" &&
                selectedValue === "JavaScript" && (
                    <LineChart javascript={javascript} />
                )}
            {selectedChartValue === "Line" && selectedValue === "CSS" && (
                <LineChart css={css} />
            )}
            {selectedChartValue === "Line" && selectedValue === "Database" && (
                <LineChart database={database} />
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
    );
};

export default LineCharts;
