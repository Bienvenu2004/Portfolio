import React from "react";
import { Dropdown } from "@nextui-org/react";
import { useTheme, Typography } from "@mui/material";

const SkillsDropdown = ({
    selectedValue,
    selectedSkill,
    setSelectedSkill,
    skills,
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
                {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedSkill}
                onSelectionChange={setSelectedSkill}
                containerCss={{
                    backgroundColor: "transparent",
                    borderRadius: "8px",
                    boxShadow: "none",
                    "& .nextui-dropdown-menu": {
                        bgBlur:
                            theme.palette.mode === "dark"
                                ? "rgba(0, 30, 60, 0.6)"
                                : "rgb(255,255,255,0.3)",
                    },
                }}
            >
                <Dropdown.Section title="Skill to display">
                    {skills.map((skill) => (
                        <Dropdown.Item
                            css={{
                                color:
                                    skill === selectedValue
                                        ? "#FFF"
                                        : theme.palette.secondary.text,
                                backgroundColor:
                                    skill === selectedValue
                                        ? theme.palette.secondary.main
                                        : "transparent",
                                borderRadius: "8px",
                                "&:hover": {
                                    backgroundColor:
                                        skill !== selectedValue &&
                                        " rgba(0, 0, 00, 0.5)",
                                    color: "#FFF",
                                },
                            }}
                            key={skill}
                        >
                            <Typography>{skill}</Typography>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Section>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SkillsDropdown;
