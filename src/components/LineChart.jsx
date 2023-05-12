import React from "react";
import { Box } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";

const LineChart = ({ data, lineType }) => {
    const theme = useTheme();

    return (
        <Box height="100%" width="100%">
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                    stacked: true,
                    reverse: false,
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "transportation",
                    legendOffset: 36,
                    legendPosition: "middle",
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "count",
                    legendOffset: -40,
                    legendPosition: "middle",
                }}
                colors={{ scheme: "category10" }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                enableArea={true}
                areaOpacity={0.5}
                useMesh={true}
                legends={[
                    {
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: "left-to-right",
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: "circle",
                        symbolBorderColor: "rgba(0, 0, 0, .5)",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemBackground: "rgba(0, 0, 0, .03)",
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
                theme={{
                    axis: {
                        domain: {
                            line: {
                                stroke: data[0].color,
                                strokeWidth: 4,
                            },
                        },
                        ticks: {
                            text: {
                                fill:
                                    theme.palette.mode === "dark"
                                        ? "#fff"
                                        : "#000",
                                fontWeight: 400,
                                fontSize: 13,
                            },
                            line: {
                                stroke: data[0].color,
                                strokeWidth: 2,
                            },
                        },
                        legend: {
                            text: {
                                fill:
                                    theme.palette.mode === "dark"
                                        ? "#fff"
                                        : "#000",
                                fontWeight: 600,
                            },
                        },
                    },
                    legends: {
                        text: {
                            fill:
                                theme.palette.mode === "dark" && data[0].color,
                            fontWeight: 600,
                        },
                    },
                    tooltip: {
                        container: {
                            background: data[0].color,
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: 13,
                        },
                    },
                }}
            />
        </Box>
    );
};

export default LineChart;
