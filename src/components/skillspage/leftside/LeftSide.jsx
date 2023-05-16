import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { SidebarContext } from "../../contexts/SidebarContext";
import SkillsDropdown from "../dropdowns/SkillsDropdown";
import PieChart from "@/components/charts/PieChart";
import Image from "next/image";

const LeftSide = () => {
    const [isMERN, setIsMERN] = React.useState(true);
    const [selectedStack, setSelectedStack] = React.useState(new Set(["MERN"]));
    const [pieData, setPieData] = React.useState([]);
    const { isSidebarOpen } = React.useContext(SidebarContext);
    const is600px = useMediaQuery("(max-width:600px)");
    const is950px = useMediaQuery("(max-width:950px)");
    const theme = useTheme();
    const ReactJS = [
        {
            id: "Node JS",
            label: "Node JS",
            value: 70,
            color: "hsl(134, 70%, 50%)",
        },

        {
            id: "React JS",
            label: "React JS",
            value: 70,
            color: "hsl(216, 70%, 50%)",
        },
        {
            id: "Express JS",
            label: "Express JS",
            value: 65,
            color: "hsl(107, 70%, 50%)",
        },
        {
            id: "MongoDB",
            label: "MongoDB",
            value: 80,
            color: "#00C853",
        },
    ];
    const NextJS = [
        {
            id: "NextJS",
            label: "NextJS",
            value: 80,
            color: "hsl(310, 70%, 50%)",
        },
        {
            id: "Node JS",
            label: "Node JS",
            value: 70,
            color: "hsl(134, 70%, 50%)",
        },
        {
            id: "Express JS",
            label: "Express JS",
            value: 65,
            color: "hsl(40, 70%, 50%)",
        },
        {
            id: "MongoDB",
            label: "MongoDB",
            value: 80,
            color: "hsl(134, 70%, 50%)",
        },
    ];

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

    React.useEffect(() => {
        if (isMERN) {
            setPieData(ReactJS);
        } else {
            setPieData(NextJS);
        }
    }, [isMERN]);

    return (
        <Box
            height={"fit-content"}
            width={(is950px && isSidebarOpen) || is600px ? "100%" : "50%"}
            pr={!(is950px && isSidebarOpen) && 0.75}
            pt={(!(is950px && isSidebarOpen) && 1.5) || 0.75}
            display="flex"
            flexDirection={is950px && isSidebarOpen ? "column" : "row"}
            border={1}
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
                <Box display="flex" width="100%" height="300px">
                    <PieChart
                        data={pieData}
                        innerRadius={0.4}
                        showLegend={false}
                        bottom={50}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default LeftSide;
