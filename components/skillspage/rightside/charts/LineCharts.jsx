import React from "react";

import LineChart from "@/components/PrimeLineChart";

import { Box } from "@mui/material";

const LineCharts = ({ selectedChartValue, selectedValue }) => {
    return (
        <Box display="flex" width="100%">
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
            {selectedChartValue === "Line" && selectedValue === "Database" && (
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
    );
};

export default LineCharts;
