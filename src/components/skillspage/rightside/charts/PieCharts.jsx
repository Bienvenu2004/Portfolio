import React from "react";
import PieChart from "@/components/charts/PieChart";
import { Box } from "@mui/material";
import { Triangle } from "react-loader-spinner";

const PieCharts = ({
    selectedValue,
    selectedChartValue,
    javascript,
    css,
    database,
    github,
}) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, [mounted]);

    if (!mounted) {
        return (
            <Box display="flex" width="100%">
                <Triangle
                    height="80"
                    width="80"
                    color="#0091ea"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible="true"
                />
            </Box>
        );
    }

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
