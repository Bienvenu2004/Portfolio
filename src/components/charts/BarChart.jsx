import React from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";

const BarChart = ({ data, keys, showLegend }) => {
    const theme = useTheme();

    return (
        <Box
            height="100%"
            width="100%"
            className="bar-chart"
            justifyContent="center"
        >
            <ResponsiveBar
                data={data}
                keys={keys}
                indexBy="skills"
                margin={{ top: 12, right: 100, bottom: 60, left: 38 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                borderWidth={2}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "category10" }}
                groupMode="stacked"
                label={(d) => `${d.value}%`}
                defs={[
                    {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.18)",
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.18)",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                fill={[
                    {
                        match: {
                            id: "MUI5",
                        },
                        id: "dots",
                    },
                    {
                        match: {
                            id: "NextUI",
                        },
                        id: "lines",
                    },
                    {
                        match: {
                            id: "Antd",
                        },
                        id: "dots",
                    },
                    {
                        match: {
                            id: "NodeJS",
                        },
                        id: "dots",
                    },
                    {
                        match: {
                            id: "Primereact",
                        },
                        id: "lines",
                    },
                    {
                        match: {
                            id: "Vercel",
                        },
                        id: "dots",
                    },
                    {
                        match: {
                            id: "MySQL",
                        },
                        id: "lines",
                    },
                    {
                        match: {
                            id: "MongoDB",
                        },
                        id: "dots",
                    },
                    {
                        match: {
                            id: "JS",
                        },
                        id: "lines",
                    },
                    {
                        match: {
                            id: "NextJS",
                        },
                        id: "lines",
                    },
                    {
                        match: {
                            id: "ReactJS",
                        },
                        id: "lines",
                    },
                ]}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.3]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -30,
                    legend: "skills",
                    legendPosition: "middle",
                    legendOffset: 50,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickPadding: 0,
                    tickRotation: -45,
                    legend: "Proficiency",
                    legendPosition: "middle",
                    legendOffset: -20,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: "color",
                    modifiers: [["brighter", 3]],
                }}
                legends={[
                    {
                        dataFrom: "keys",
                        anchor: "right",
                        direction: "column",
                        justify: false,
                        translateX: 80,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 70,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemTextColor: theme.palette.secondary.text,
                        itemOpacity: 0.85,
                        symbolSize: 15,
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
                role="application"
                ariaLabel="Bar Chart"
                barAriaLabel={function (e) {
                    return (
                        e.id +
                        ": " +
                        e.formattedValue +
                        " in skills: " +
                        e.indexValue
                    );
                }}
                onClick={(node, event)=>{}}
                theme={{
                    tooltip: {
                        container: {
                            background: theme.palette.primary.main,
                            color: theme.palette.secondary.text,
                            display: "none",
                        },
                    },
                    axis: {
                        ticks: {
                            text: {
                                fill: theme.palette.secondary.text,
                            },
                        },
                        legend: {
                            text: {
                                fill: theme.palette.secondary.text,
                            },
                        },
                    },
                }}
            />
        </Box>
    );
};

export default BarChart;
