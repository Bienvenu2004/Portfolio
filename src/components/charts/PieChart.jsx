import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { SidebarContext } from "../contexts/SidebarContext";

const PieChart = ({
    data,
    endAngle = 275,
    innerRadius = 0.3,
    showLegend = true,
    top = 18,
    right = 50,
    bottom = 80,
    left = 30,
    ...props
}) => {
    const theme = useTheme();
    const is1366px = useMediaQuery("(max-width:1366px)");
    const { isSidebarOpen } = React.useContext(SidebarContext);

    return (
        <Box height="100%" className="pie-chart" width="100%">
            <ResponsivePie
                data={data}
                margin={{ top: top, right: right, bottom: bottom, left: left }}
                innerRadius={innerRadius}
                padAngle={3}
                cornerRadius={2}
                activeOuterRadiusOffset={2}
                endAngle={endAngle}
                borderWidth={3}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.3]],
                }}
                colors={{ scheme: "category10" }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={theme.palette.secondary.text}
                arcLinkLabelsThickness={2.5}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={2}
                arcLinkLabelsDiagonalLength={10}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["brighter", 3]],
                }}
                arcLinkLabelsOffset={4}
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
                legends={
                    showLegend && [
                        {
                            anchor: "bottom",
                            direction: "row",
                            justify: false,
                            translateX: 20,
                            translateY: 70,
                            itemsSpacing: -8,
                            itemWidth: 80,
                            itemHeight: 18,
                            itemTextColor: theme.palette.secondary.text,
                            itemDirection: "left-to-right",
                            itemOpacity: 1,
                            symbolSize: 8,
                            symbolShape: "circle", // "circle" | "square" | "diamond" | "triangle" | "star"
                            effects: [
                                {
                                    on: "hover",
                                    style: {
                                        itemTextColor:
                                            theme.palette.secondary.text,
                                    },
                                },
                            ],
                        },
                    ]
                }
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
