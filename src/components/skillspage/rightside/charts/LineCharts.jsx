import React from "react";
import LineChart from "@/components/charts/PrimeLineChart";
import { Box } from "@mui/material";
import { Triangle } from "react-loader-spinner";

const LineCharts = ({
    selectedChartValue,
    selectedValue,
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
            <Box
                display="flex"
                height="100%"
                width="100%"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Triangle
                    height="50"
                    width="50"
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
                    <LineChart github={github} />
                )}
        </Box>
    );
};

export default LineCharts;
