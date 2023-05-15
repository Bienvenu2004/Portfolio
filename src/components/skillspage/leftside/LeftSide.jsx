import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { SidebarContext } from "../../contexts/SidebarContext";
import SkillsDropdown from "../dropdowns/SkillsDropdown";
import StackChart from "./charts/LineChart";

const LeftSide = () => {
    const [isMERN, setIsMERN] = React.useState(true);
    const [selectedStack, setSelectedStack] = React.useState(new Set(["MERN"]));
    const { isSidebarOpen } = React.useContext(SidebarContext);
    const is1050px = useMediaQuery("(max-width:1050px)");
    const theme = useTheme();

    const skills = ["MERN", "MENN"];

    React.useEffect(() => {
        if (selectedStack.has("MERN")) {
            setIsMERN(true);
        } else {
            setIsMERN(false);
        }
    }, [selectedStack]);

    const selectedValue = React.useMemo(() => {
        return Array.from(selectedStack);
    }, [selectedStack]);

    return (
        <Box
            height={is1050px && isSidebarOpen ? "fit-content" : "80%"}
            width={is1050px && isSidebarOpen ? "100%" : "50%"}
            pr={0.75}
            pt={1.5}
            display="flex"
            border="1px solid blue"
            flexDirection="column"
        >
            <Box
                sx={{
                    background: theme.palette.background.paper,
                    height: "fit-content",
                    width: "100%",
                    borderRadius: "5px",
                }}
            >
                <Box
                    display="flex"
                    width="50%"
                    height={"30px"}
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <SkillsDropdown
                        skills={skills}
                        selectedSkill={selectedStack.currentKey}
                        selectedValue={selectedValue[0]}
                        setSelectedSkill={setSelectedStack}
                    />
                </Box>
                {isMERN ? (
                    <StackChart
                        mongodb={[
                            {
                                label: "MongoDB",
                                value: 80,
                            },
                        ]}
                        expressjs={[
                            {
                                label: "Express JS",
                                value: 65,
                            },
                        ]}
                        reactjs={[
                            {
                                label: "ReactJS",
                                value: 75,
                            },
                        ]}
                        nodejs={[
                            {
                                label: "NodeJS",
                                value: 80,
                            },
                        ]}
                    />
                ) : (
                    <StackChart
                        mongodb={[
                            {
                                label: "MongoDB",
                                value: 80,
                            },
                        ]}
                        expressjs={[
                            {
                                label: "Express JS",
                                value: 65,
                            },
                        ]}
                        nextjs={[
                            {
                                label: "NextJS",
                                value: 70,
                            },
                        ]}
                        nodejs={[
                            {
                                label: "NodeJS",
                                value: 80,
                            },
                        ]}
                    />
                )}
            </Box>
        </Box>
    );
};

export default LeftSide;
