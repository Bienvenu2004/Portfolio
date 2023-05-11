import { Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import StackChart from "./StackChart";
import StackCard from "./StackCard";
//images
import mongoDB from "@/public/images/mongodb.png";
import expressJS from "@/public/images/expressjs.png";
import reactJS from "@/public/images/reactjs.png";
import nextJS from "@/public/images/nextjs.png";
import nodeJS from "@/public/images/nodejs.png";
import { SidebarContext } from "@/components/contexts/SidebarContext";
import SkillsDropdown from "../dropdowns/SkillsDropdown";

const Stack = ({ mongodb, expressjs, reactjs, nextjs, nodejs }) => {
    const theme = useTheme();
    const [isMERN, setIsMERN] = React.useState(true);
    const [selectedStack, setSelectedStack] = React.useState(new Set(["MERN"]));
    const isMobile = useMediaQuery("(max-width: 480px)");
    const is1225px = useMediaQuery("(max-width:1225px)");
    const is1075px = useMediaQuery("(max-width:1075px)");

    const { isSidebarOpen } = React.useContext(SidebarContext);

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
            height="100%"
            width="fit-content"
            display="flex"
            flexDirection="column"
        >
            <Box display="flex" width="50%" pl={0.6}>
                <SkillsDropdown
                    skills={skills}
                    selectedSkill={selectedStack}
                    selectedValue={selectedValue}
                    setSelectedSkill={setSelectedStack}
                />
            </Box>

            <Box
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
            >
                <Box height="100%" width="100%" display="flex" py={0.75}>
                    {isMERN ? (
                        <StackChart
                            mongodb={mongodb}
                            expressjs={expressjs}
                            reactjs={reactjs}
                            nodejs={nodejs}
                        />
                    ) : (
                        <StackChart
                            mongodb={mongodb}
                            expressjs={expressjs}
                            nextjs={nextjs}
                            nodejs={nodejs}
                        />
                    )}
                </Box>
                <Box flexGrow="40%" display="flex" width="100%">
                    <Box
                        width="100%"
                        height="fit-content"
                        borderRadius={3}
                        display="flex"
                        justifyContent="space-between"
                        flexDirection="row"
                        flexWrap={"wrap"}
                    >
                        <Box
                            display="flex"
                            height="100%"
                            width="100%"
                            justifyContent="space-between"
                            flexWrap={
                                (isMobile && "wrap") ||
                                (isSidebarOpen &&
                                    is1225px &&
                                    !is1075px &&
                                    "wrap") ||
                                (isSidebarOpen && is1075px && "nowrap")
                            }
                        >
                            <StackCard
                                label="MongoDB"
                                value={72}
                                trailColor="rgb(1, 236, 100,0.4)"
                                strokeColor="rgb(1, 236, 100)"
                                image={mongoDB}
                            />

                            <StackCard
                                label="Express JS"
                                value={65}
                                trailColor="rgb(232, 200, 37,0.4)"
                                strokeColor="rgb(232, 200, 37)"
                                image={expressJS}
                            />
                        </Box>
                        <Box
                            display="flex"
                            height="100%"
                            width="100%"
                            justifyContent="space-between"
                            flexWrap={"wrap"}
                        >
                            <StackCard
                                label="React JS"
                                value={75}
                                trailColor="hsl(216, 70%, 50%,0.3)"
                                strokeColor="hsl(216, 70%, 50%)"
                                image={reactJS}
                            />
                            <StackCard
                                label="Node JS"
                                value={70}
                                strokeColor="rgb(1, 236, 100)"
                                trailColor="rgb(1, 236, 100,0.4)"
                                image={nodeJS}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Stack;
