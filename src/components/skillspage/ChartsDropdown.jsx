import React from "react";
import { Dropdown } from "@nextui-org/react";
import { useTheme, Typography } from "@mui/material";
const ChartsDropdown = ({
    selectedChartValue,
    selectedChart,
    setSelectedChart,
    charts,
}) => {
    const theme = useTheme();
    return (
        <Dropdown>
            <Dropdown.Button
                flat
                light
                bordered
                animated={false}
                css={{
                    padding: "5px",
                    fontSize: "1rem",
                    fontFamily: "inherit",
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    borderRadius: "6px",
                    px: "2rem",
                    "& .nextui-button-text": {
                        color: theme.palette.secondary.text,
                    },
                }}
            >
                {selectedChartValue}
            </Dropdown.Button>
            <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedChart}
                onSelectionChange={setSelectedChart}
                containerCss={{
                    backgroundColor: "transparent",
                    borderRadius: "15px",
                    boxShadow: "none",
                    "& .nextui-dropdown-menu": {
                        backgroundColor: theme.palette.background.alt,
                    },
                }}
            >
                <Dropdown.Section title="Chart Type">
                    {charts.map((chart) => (
                        <Dropdown.Item
                            css={{
                                color: theme.palette.secondary.text,
                                backgroundColor:
                                    chart === selectedChartValue
                                        ? theme.palette.secondary.main
                                        : "transparent",
                                borderRadius: "25px",
                                "&:hover": {
                                    backgroundColor:
                                        theme.palette.secondary.main,
                                },
                            }}
                            key={chart}
                        >
                            <Typography>{chart}</Typography>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Section>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ChartsDropdown;
