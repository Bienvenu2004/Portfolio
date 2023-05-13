import React from "react";
import { useTheme, Box } from "@mui/material";
import LineChart from "./LineChart";
import { lineDataJS } from "@/data/charts";

const NivoLineChart = ({ javascript, css, database, github }) => {
    const theme = useTheme();

    let javascriptData = [
        {
            id: "JS",
            color: "rgb(232, 200, 37)",
            data: [],
        },
    ];

    let cssData = [
        {
            id: "CSS",
            color: "rgb(0, 126, 253)",
            data: [],
        },
    ];
    let databaseData = [
        {
            id: "Database",
            color: "rgb(1, 236, 100)",
            data: [],
        },
    ];
    let githubData = [
        {
            id: "GitHub",
            color: "rgb(149, 0, 174)",
            data: [],
        },
    ];

    javascript &&
        javascript.forEach((item) => {
            javascriptData[0].data.push({
                x: item.label,
                y: item.value,
            });
        });
    css &&
        css.forEach((item) => {
            cssData[0].data.push({
                x: item.label,
                y: item.value,
            });
        });
    database &&
        database.forEach((item) => {
            databaseData[0].data.push({
                x: item.label,
                y: item.value,
            });
        });
    github &&
        github.forEach((item) => {
            githubData[0].data.push({
                x: item.label,
                y: item.value,
            });
        });

    return <LineChart data={javascriptData} />;
};

export default NivoLineChart;
