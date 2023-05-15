import React from "react";
import { useTheme } from "@mui/material";
import { Chart } from "primereact/chart";

const PolarChart = ({ reactjs, expressjs, mongodb, nextjs, nodejs }) => {
    const theme = useTheme();
    const [chartData, setChartData] = React.useState({});
    const [chartOptions, setChartOptions] = React.useState({});

    let Labels = [];
    let ReactData = [];
    let NextData = [];

    React.useEffect(() => {
        reactjs && Labels.push(reactjs[0].label);
        reactjs && ReactData.push(reactjs[0].value);
        nextjs && Labels.push(nextjs[0].label);
        nextjs && NextData.push(nextjs[0].value);
        expressjs && Labels.push(expressjs[0].label);
        expressjs && ReactData.push(expressjs[0].value);
        expressjs && NextData.push(expressjs[0].value);
        mongodb && Labels.push(mongodb[0].label);
        mongodb && ReactData.push(mongodb[0].value);
        mongodb && NextData.push(mongodb[0].value);
        nodejs && Labels.push(nodejs[0].label);
        nodejs && ReactData.push(nodejs[0].value);
        nodejs && NextData.push(nodejs[0].value);
    }, [reactjs, expressjs, mongodb, nextjs, nodejs]);
    React.useEffect(() => {
        const data = {
            labels: Labels,
            datasets: [
                {
                    type: "line",
                    label: "NextJS",
                    data: NextData,
                    fill: false,
                    backgroundColor: nextjs && nextjs[0].color,
                    tension: 0.4,
                    borderColor: nextjs && nextjs[0].color,
                },
                {
                    type: "bar",
                    label: "ReactJS",
                    data: ReactData,
                    backgroundColor: reactjs && reactjs[0].color,
                    borderColor: reactjs && reactjs[0].color,
                    borderWidth: 2,
                },
            ],
        };
        const options = {
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: theme.palette.text.primary,
                        fontFamily: theme.typography.fontFamily,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: theme.palette.text.primary,
                        font: {
                            size: 12,
                            family: theme.typography.fontFamily,
                        },
                    },
                    grid: {
                        color: "transparent",
                    },
                },
                y: {
                    ticks: {
                        color: theme.palette.text.primary,
                        font: {
                            size: 12,
                            family: theme.typography.fontFamily,
                        },
                    },
                    grid: {
                        color: reactjs
                            ? "rgb(0, 126, 253, 0.1)"
                            : "hsl(262, 70%, 50%,0.1)",
                    },
                },
            },
        };
        setChartData(data);
        setChartOptions(options);
    }, [reactjs, expressjs, mongodb, nextjs, nodejs]);

    return (
        <Chart
            type="line"
            data={chartData}
            options={chartOptions}
            style={{ position: "relative", width: "100%", padding: "0 10px" }}
        />
    );
};

export default PolarChart;
