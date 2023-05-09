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
                    padding: "5px",
                    fontSize: "1rem",
                    fontFamily: "inherit",
                    backgroundColor: "transparent",
                    borderColor: theme.palette.background.alt,
                    borderRadius: "6px",
                    px: "2rem",
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
                    borderRadius: "15px",
                    boxShadow: "none",
                    "& .nextui-dropdown-menu": {
                        backgroundColor: theme.palette.background.alt,
                    },
                }}
            >
                <Dropdown.Section title="Skill to display">
                    {skills.map((skill) => (
                        <Dropdown.Item
                            css={{
                                color: theme.palette.secondary.text,
                                backgroundColor:
                                    skill === selectedValue
                                        ? theme.palette.secondary.main
                                        : "transparent",
                                borderRadius: "25px",
                                "&:hover": {
                                    backgroundColor:
                                        theme.palette.secondary.main,
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
