import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";

const PieChart = ({ data }) => {
    const theme = useTheme();

    return (
        <Box height="100%" width="100%">
            <ResponsivePie
                data={data}
                margin={{ top: 20, right: 50, bottom: 80, left: 80 }}
                innerRadius={0.3}
                padAngle={6}
                cornerRadius={7}
                activeOuterRadiusOffset={4}
                endAngle={275}
                borderWidth={5}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 1]],
                }}
                colors={{ scheme: "category10" }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={theme.palette.secondary.text}
                arcLinkLabelsThickness={4}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={2}
                arcLinkLabelsDiagonalLength={10}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                }}
                arcLinkLabelsOffset={8}
                arcLinkLabelsTextOffset={5}
                arcLinkLabelsStraightLength={10}
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
                        color: "rgba(255, 255, 255, 0.1)",
                        rotation: -50,
                        lineWidth: 6,
                        spacing: 10,
                        stagger: true,
                    },
                ]}
                fill={[
                    {
                        match: {
                            id: "CSS",
                        },
                        id: "dots",
                    },
                    {
                        match: {
                            id: "HTML",
                        },
                        id: "dots",
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
                        id: "lines",
                    },
                    {
                        match: {
                            id: "NextUI",
                        },
                        id: "lines",
                    },
                    {
                        match: {
                            id: "MUI5",
                        },
                        id: "lines",
                    },
                    {
                        match: {
                            id: "JavaScript",
                        },
                        id: "lines",
                    },
                    {
                        match: {
                            id: "React JS",
                        },
                        id: "lines",
                    },
                    {
                        match: {
                            id: "Next JS",
                        },
                        id: "dots",
                    },
                ]}
                legends={[
                    {
                        anchor: "bottom",
                        direction: "row",
                        justify: false,
                        translateX: 10,
                        translateY: 80,
                        itemsSpacing: -5,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: theme.palette.secondary.text,
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolBorderColor: data[0].color,
                        symbolSize: 15,
                        symbolShape: "diamond", // "circle" | "square" | "diamond" | "triangle" | "star"
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: theme.palette.secondary.text,
                                },
                            },
                        ],
                    },
                ]}
                theme={{
                    tooltip: {
                        container: {
                            background: theme.palette.primary.main,
                            color: theme.palette.secondary.text,
                        },
                    },
                }}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </Box>
    );
};

export default PieChart;
