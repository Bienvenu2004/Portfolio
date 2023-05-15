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
    const is300px = useMediaQuery("(max-width:300px)");
    const is900px = useMediaQuery("(max-width:900px)");
    const is768px = useMediaQuery("(max-width:768px)");
    const is1050px = useMediaQuery("(max-width:1050px)");
    const is1100px = useMediaQuery("(max-width:1100px)");
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

    const imageStyles = [
        {
            transition: "all 0.3s ease-in-out",
            height:
                (is300px && "50px") ||
                (is900px && !isSidebarOpen && "50px") ||
                (isSidebarOpen && is768px && "50px"),
            width:
                (is300px && "50px") ||
                (is900px && !isSidebarOpen && "50px") ||
                (isSidebarOpen && is768px && "50px"),
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
            height={"100%"}
            width={is1050px && isSidebarOpen ? "100%" : "50%"}
            pr={0.75}
            pt={1.5}
            display="flex"
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
