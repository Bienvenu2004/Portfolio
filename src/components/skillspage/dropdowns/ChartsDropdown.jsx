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
                    fontSize: "0.8rem",
                    fontFamily: "inherit",
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    borderRadius: "6px",
                    px: "2rem",
                    mt: "1rem",
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
                    borderRadius: "8px",
                    boxShadow: "none",
                    backdropFilter: "blur(10px)",
                    "& .nextui-dropdown-menu": {
                        bgBlur:
                            theme.palette.mode === "dark"
                                ? "rgba(0, 30, 60, 0.6)"
                                : "rgb(255,255,255,0.6)",
                    },
                }}
            >
                <Dropdown.Section title="Chart Type">
                    {charts.map((chart) => (
                        <Dropdown.Item
                            css={{
                                color:
                                    chart === selectedChartValue
                                        ? "#FFF"
                                        : theme.palette.secondary.text,
                                backgroundColor:
                                    chart === selectedChartValue
                                        ? theme.palette.secondary.main
                                        : "transparent",
                                borderRadius: "8px",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    backgroundColor:
                                        chart !== selectedChartValue &&
                                        " rgba(0, 0, 00, 0.5)",
                                    color: "#FFF",
                                    transition: "all 0.3s ease-in-out",
                                },
                            }}
                            key={chart}
                            textValue={chart}
                        />
                    ))}
                </Dropdown.Section>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ChartsDropdown;
