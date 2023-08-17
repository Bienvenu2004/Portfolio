import React, { Suspense } from "react";
import PieChart from "@/components/charts/PieChart";
import Loading from "@/components/loading/Loading";
import { Box } from "@mui/material";

const PieCharts = ({
    selectedValue,
    selectedChartValue,
    javascript,
    css,
    database,
    github,
}) => {

    return (
            <Box width="100%">
                {selectedChartValue === "Pie" && selectedValue === "JavaScript" && (
                    <PieChart data={javascript} endAngle={360} />
                    )}
                {selectedChartValue === "Pie" && selectedValue === "CSS" && (
                    <PieChart data={css} endAngle={360} />
                    )}
                {selectedChartValue === "Pie" && selectedValue === "Database" && (
                    <PieChart data={database} endAngle={360} />
                    )}
                {selectedChartValue === "Pie" &&
                    selectedValue === "Git & GitHub" && (
                        <PieChart data={github} endAngle={360} />
                        )}
            </Box>
    );
};

export default PieCharts;
