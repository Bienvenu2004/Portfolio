import React from "react";
import { useTheme, Box } from "@mui/material";
import { Chart } from "primereact/chart";

const StackChart = ({ mongodb, expressjs, reactjs, nextjs, nodejs }) => {
    const theme = useTheme();
    const [chartData, setChartData] = React.useState({});
    const [chartOptions, setChartOptions] = React.useState({});

    React.useEffect(() => {
        const data = {
            labels: reactjs
                ? ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"]
                : ["MongoDB", "ExpressJS", "NextJS", "NodeJS"],
            datasets: [
                {
                    label: reactjs ? "MERN STACK" : "MENN STACK",
                    data: reactjs
                        ? [
                              mongodb[0].value,
                              expressjs[0].value,
                              reactjs[0].value,
                              nodejs[0].value,
                          ]
                        : [
                              mongodb[0].value,
                              expressjs[0].value,
                              nextjs[0].value,
                              nodejs[0].value,
                          ],
                    fill: false,
                    backgroundColor: "rgb(0, 126, 253, 0.3)",
                    borderColor: "rgb(0, 126, 253,1)",
                    tension: 0.3,
                    hoverBackgroundColor: "rgb(0, 126, 253,1)",
                },
            ],
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: theme.palette.secondary.text,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: theme.palette.secondary.text,
                    },
                    grid: {
                        color: "transparent",
                    },
                },
                y: {
                    ticks: {
                        color: theme.palette.secondary.text,
                    },
                    grid: {
                        color: theme.palette.background.line,
                    },
                },
            },
        };
        setChartData(data);
        setChartOptions(options);
    }, [mongodb, expressjs, reactjs, nextjs, nodejs]);

    return (
        <Chart
            type="line"
            width="100%"
            data={chartData}
            options={chartOptions}
            style={{
                fontFamily: "inherit",
            }}
        />
    );
};

export default StackChart;
