import { useContext } from "react";
import { Box, useMediaQuery } from "@mui/material";
import SkillBox from "./SkillBox";
//images
import js from "@/public/images/js.png";
import css3 from "@/public/images/css.png";
import mongodb from "@/public/images/mongodb.png";
import github from "@/public/images/github.png";
import { SidebarContext } from "@/components/contexts/SidebarContext";

const SkillCards = ({ javascript = 1, css = 1, database = 1 }) => {
    const isMobile = useMediaQuery("(max-width: 480px)");
    const is600px = useMediaQuery("(max-width: 600px)");
    const isMedium = useMediaQuery("(max-width: 720px)");
    const is815px = useMediaQuery("(max-width: 815px)");
    const is950px = useMediaQuery("(max-width: 950px)");
    const is1100px = useMediaQuery("(max-width: 1100px)");
    const { isSidebarOpen } = useContext(SidebarContext);

    return (
        <Box
            width="100%"
            height="fit-content"
            borderRadius={3}
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            flexWrap={
                (isMedium && "wrap") ||
                (isSidebarOpen && is1100px && "wrap") ||
                (!isSidebarOpen && is815px && "wrap")
            }
        >
            <Box
                display="flex"
                height="100%"
                width="100%"
                justifyContent="space-between"
                flexWrap={
                    (isMobile && "wrap") ||
                    (isSidebarOpen && isMedium && "wrap")
                }
                mr={
                    !isMobile &&
                    !(isMedium && isSidebarOpen) &&
                    !(isSidebarOpen && is1100px && "wrap") &&
                    !(!isSidebarOpen && is815px && "wrap") &&
                    0.75
                }
            >
                <Box
                    width="100%"
                    mr={!isMobile && !(isMedium && isSidebarOpen) && 0.75}
                >
                    <SkillBox
                        label="JavaScript"
                        value={Math.round(((65 + 80 + 70) / 300) * 100)}
                        backgroundColor="#E8C825"
                        image={js}
                        trailColor="rgb(232, 200, 37, 0.4)"
                        strokeColor="rgb(232, 200, 37)"
                        skill={[
                            {
                                label: "Express JS",
                                value: 65,
                                trailColor: "rgb(232, 200, 37, 0.4)",
                                color: "rgb(232, 200, 37)",
                            },
                            {
                                label: "NextJS",
                                value: 80,
                                trailColor: "rgb(0, 0, 0, 0.3)",
                                color: "rgb(0, 0, 0)",
                            },
                            {
                                label: "NodeJS",
                                value: 70,
                                trailColor: "rgb(1, 236, 100, 0.4)",
                                color: "rgb(1, 236, 100)",
                            },
                        ]}
                    />
                </Box>
                <Box
                    width="100%"
                    ml={
                        (!isMedium && 0.75) ||
                        (isMedium && !isSidebarOpen && !isMobile && 0.75)
                    }
                    mt={
                        (isMedium && isSidebarOpen && 1.25) ||
                        (isMobile && 1.25)
                    }
                >
                    <SkillBox
                        label="CSS"
                        value={Math.round(((75 + 70 + 70) / 300) * 100)}
                        backgroundColor="#007EFD"
                        trailColor="rgb(0, 126, 253, 0.4)"
                        strokeColor="rgb(0, 126, 253)"
                        image={css3}
                        skill={[
                            {
                                label: "Material UI",
                                value: 75,
                                trailColor: "hsl(216, 70%, 50%, 0.4)",
                                color: "hsl(216, 70%, 50%)",
                            },
                            {
                                label: "Antd",
                                value: 70,
                                trailColor: "rgb(84, 84, 197, 0.4)",
                                color: "rgb(84, 84, 197)",
                            },
                            {
                                label: "Primereact",
                                value: 70,
                                trailColor: "rgb(212, 171, 220, 0.4)",
                                color: "rgb(212, 171, 220)",
                            },
                        ]}
                    />
                </Box>
            </Box>
            <Box
                display="flex"
                height="100%"
                width="100%"
                justifyContent="space-between"
                flexWrap={
                    (isMobile && "wrap") ||
                    (isMedium && "wrap") ||
                    (isSidebarOpen && is950px && "wrap") ||
                    (!isSidebarOpen && is600px && "wrap")
                }
                ml={
                    !isMobile &&
                    !isMedium &&
                    !(isSidebarOpen && is950px) &&
                    !(!isSidebarOpen && is600px) &&
                    !(isSidebarOpen && is1100px) &&
                    !(!isSidebarOpen && is815px) &&
                    0.75
                }
                mt={
                    ((isSidebarOpen && is1100px) ||
                        (!isSidebarOpen && is815px)) &&
                    1.25
                }
            >
                <Box
                    width="100%"
                    mr={
                        !isMobile &&
                        !isMedium &&
                        !(isSidebarOpen && is950px) &&
                        !(!isSidebarOpen && is600px) &&
                        0.75
                    }
                >
                    <SkillBox
                        label="Database"
                        value={Math.round(((72 + 50 + 78) / 300) * 100)}
                        backgroundColor="#01EC64"
                        strokeColor="#01EC64"
                        trailColor="rgb(1, 236, 100, 0.4)"
                        image={mongodb}
                        skill={[
                            {
                                label: "MongoDB",
                                value: 72,
                                trailColor: "rgb(1, 236, 100, 0.4)",
                                color: "rgb(1, 236, 100)",
                            },
                            {
                                label: "AWS",
                                value: 50,
                                trailColor: "hsl(38, 70%, 50%, 0.4)",
                                color: "hsl(38, 70%, 50%)",
                            },
                            {
                                label: "PostgreSQL",
                                value: 78,
                                trailColor: "hsl(134, 70%, 50%, 0.4)",
                                color: "hsl(134, 70%, 50%)",
                            },
                        ]}
                    />
                </Box>
                <Box
                    width="100%"
                    ml={
                        (!is950px && 0.75) ||
                        (is950px &&
                            !isSidebarOpen &&
                            !(isMedium && !isSidebarOpen) &&
                            0.75)
                    }
                    mt={
                        (is950px && isSidebarOpen && 1.25) ||
                        (isMedium && !isSidebarOpen && 1.25)
                    }
                >
                    <SkillBox
                        label="Others"
                        value={Math.round(((85 + 80 + 82) / 300) * 100)}
                        backgroundColor="#9500ae"
                        strokeColor="rgb(149, 0, 174)"
                        trailColor="rgb(149, 0, 174,0.4)"
                        image={github}
                        skill={[
                            {
                                id: "GitHub",
                                label: "GitHub",
                                value: 85,
                                color: "rgb(0,0,0)",
                                trailColor: "rgb(0, 0, 0, 0.4)",
                            },
                            {
                                id: "Git",
                                label: "Git",
                                value: 80,
                                color: "rgb(233, 78, 49)",
                                trailColor: "rgb(233, 78, 49,0.4)",
                            },
                            {
                                id: "Vercel",
                                label: "Vercel",
                                value: 82,
                                color: "rgb(149, 0, 174)",
                                trailColor: "rgb(149, 0, 174, 0.4)",
                            },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default SkillCards;
