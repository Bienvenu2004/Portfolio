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
    const { isSidebarOpen, isPersistent } = React.useContext(SidebarContext);
    const is480px = useMediaQuery("(max-width:480px)");
    const is600px = useMediaQuery("(max-width:600px)");
    const is660px = useMediaQuery("(max-width:660px)");
    const is710px = useMediaQuery("(max-width:710px)");
    const is950px = useMediaQuery("(max-width:950px)");
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
            width={
                (is950px && isSidebarOpen) ||
                is600px ||
                (is660px && !isSidebarOpen)
                    ? "100%"
                    : "50%"
            }
            pr={
                (!is950px && isSidebarOpen && 0.75) ||
                (is660px && !isSidebarOpen && 0)
            }
            pt={(!(is950px && isSidebarOpen) && 1.5) || 0.75}
            display="flex"
            flexDirection={"column"}
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
                <Box
                    display="flex"
                    width="100%"
                    height={is660px && isSidebarOpen ? "260px" : "300px"}
                >
                    <PieChart
                        data={pieData}
                        innerRadius={0.4}
                        showLegend={false}
                        bottom={50}
                    />
                </Box>
            </Box>
            <Box
                flexGrow={1}
                display="flex"
                height={
                    (is950px &&
                        isSidebarOpen &&
                        !is710px &&
                        !is660px &&
                        "320px") ||
                    (is710px && isSidebarOpen && !is660px && "250px") ||
                    (is660px && !isSidebarOpen && "320px") ||
                    (is660px && isSidebarOpen && "250px")
                }
                flexDirection={"column"}
                pt={0.5}
            >
                {/**Top */}
                <Box display={"flex"} width="100%" py={0.75} height={"50%"}>
                    <Box
                        width={"50%"}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            background: theme.palette.background.paper,
                            mr: 0.75,
                            borderRadius: "5px",
                            borderBottom: "5px solid hsl(134, 70%, 50%)",
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
                        }}
                    >
                        <Image
                            src={"/images/mongodb.png"}
                            alt="MongoDB"
                            width={100}
                            height={100}
                            style={{
                                transition: "all 0.3s ease-in-out",
                                height:
                                    (is1100px && isSidebarOpen && "70px") ||
                                    (is480px && "68px"),

                                width:
                                    (is1100px && isSidebarOpen && "70px") ||
                                    (is480px && "68px"),
                            }}
                        />
                    </Box>
                    <Box
                        width={"50%"}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            background: theme.palette.background.paper,
                            ml: 0.75,
                            borderRadius: "5px",
                            borderBottom: "5px solid hsl(40, 70%, 50%)",
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
                        }}
                    >
                        <Image
                            src={"/images/expressjs.png"}
                            alt="ExpressJS"
                            width={100}
                            height={100}
                            style={{
                                transition: "all 0.3s ease-in-out",
                                height:
                                    (is1100px && isSidebarOpen && "70px") ||
                                    (is480px && "68px"),
                                width:
                                    (is1100px && isSidebarOpen && "70px") ||
                                    (is480px && "68px"),
                            }}
                        />
                    </Box>
                </Box>
                {/**Bottom */}
                <Box display={"flex"} width="100%" py={0.75} height={"50%"}>
                    <Box
                        display="flex"
                        width="50%"
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            background: theme.palette.background.paper,
                            mr: 0.75,
                            borderRadius: "5px",
                            borderBottom: isMERN
                                ? "5px solid hsl(216, 70%, 50%)"
                                : "5px solid hsl(310, 70%, 50%)",
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
                        }}
                    >
                        <Image
                            src={
                                isMERN
                                    ? "/images/reactjs.png"
                                    : "/images/nextjs.png"
                            }
                            alt={isMERN ? "ReactJS" : "NextJS"}
                            width={100}
                            height={100}
                            style={{
                                transition: "all 0.3s ease-in-out",
                                height:
                                    (is1100px && isSidebarOpen && "70px") ||
                                    (is480px && "68px"),
                                width:
                                    (is1100px && isSidebarOpen && "70px") ||
                                    (is480px && "68px"),
                            }}
                        />
                    </Box>
                    <Box
                        display="flex"
                        width="50%"
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            background: theme.palette.background.paper,
                            ml: 0.75,
                            borderRadius: "5px",
                            borderBottom: "5px solid hsl(134, 70%, 50%)",
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
                        }}
                    >
                        <Image
                            src={"/images/nodejs.png"}
                            alt="NodeJS"
                            width={100}
                            height={100}
                            style={{
                                transition: "all 0.3s ease-in-out",
                                height:
                                    (is1100px && isSidebarOpen && "70px") ||
                                    (is480px && "68px"),
                                width:
                                    (is1100px && isSidebarOpen && "70px") ||
                                    (is480px && "68px"),
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LeftSide;
