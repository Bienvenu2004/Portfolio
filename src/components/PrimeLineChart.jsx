import React from "react";
import { useTheme, Box } from "@mui/material";
import { Chart } from "primereact/chart";

const LineChart = ({ javascript, css, database, github }) => {
    const theme = useTheme();
    const [chartData, setChartData] = React.useState({});
    const [chartOptions, setChartOptions] = React.useState({});
    const [selectedLabel, setSelectedLabel] = React.useState([]);
    const [selectedData, setSelectedData] = React.useState([]);

    let javascriptLabels = [];
    let cssLabels = [];
    let databaseLabels = [];
    let githubLabels = [];

    let javascriptData = [];
    let cssData = [];
    let databaseData = [];
    let githubData = [];

    javascript &&
        javascript.forEach((item) => {
            javascriptLabels.push(item.label);
            javascriptData.push(item.value);
        });
    css &&
        css.forEach((item) => {
            cssLabels.push(item.label);
            cssData.push(item.value);
        });
    database &&
        database.forEach((item) => {
            databaseLabels.push(item.label);
            databaseData.push(item.value);
        });
    github &&
        github.forEach((item) => {
            githubLabels.push(item.label);
            githubData.push(item.value);
        });

    React.useEffect(() => {
        javascript && setSelectedLabel(javascriptLabels);
        javascript && setSelectedData(javascriptData);
        css && setSelectedLabel(cssLabels);
        css && setSelectedData(cssData);
        database && setSelectedLabel(databaseLabels);
        database && setSelectedData(databaseData);
        github && setSelectedLabel(githubLabels);
        github && setSelectedData(githubData);
    }, [javascript, css, database, github]);

    React.useEffect(() => {
        const data = {
            labels: selectedLabel,

            datasets: [
                {
                    label:
                        (javascript && "Javascript") ||
                        (css && "CSS") ||
                        (database && "Database") ||
                        (github && "Github"),
                    data: selectedData,

                    fill: true,
                    backgroundColor:
                        (javascript && "rgb(232, 200, 37, 0.4)") ||
                        (css && "rgb(0, 126, 253, 0.4)") ||
                        (database && "rgb(1, 236, 100, 0.4)") ||
                        (github && "rgb(149, 0, 174,0.4)"),
                    borderColor:
                        (javascript && "rgb(232, 200, 37)") ||
                        (css && "rgb(0, 126, 253)") ||
                        (database && "rgb(1, 236, 100)") ||
                        (github && "rgb(149, 0, 174)"),
                    tension: 0.3,
                    hoverBackgroundColor:
                        (javascript && "rgb(232, 200, 37)") ||
                        (css && "rgb(0, 126, 253)") ||
                        (database && "rgb(1, 236, 100)") ||
                        (github && "rgb(149, 0, 174)"),
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
                        color:
                            (javascript && "rgb(232, 200, 37, 0.2)") ||
                            (css && "rgb(0, 126, 253, 0.2)") ||
                            (database && "rgb(1, 236, 100, 0.2)") ||
                            (github && "rgb(149, 0, 174,0.2)"),
                    },
                },
            },
        };
        setChartData(data);
        setChartOptions(options);
    }, [selectedLabel, selectedData]);

    return (
        <Chart
            type="line"
            width="100%"
            height="100%"
            data={chartData}
            options={chartOptions}
            style={{
                fontFamily: "inherit",
                padding: "0.5rem",
            }}
        />
    );
};

export default LineChart;
