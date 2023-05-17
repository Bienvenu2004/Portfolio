import { useContext } from "react";
import { Box, useMediaQuery } from "@mui/material";
import SkillBox from "./SkillBox";

import { SidebarContext } from "@/components/contexts/SidebarContext";

const SkillCards = ({ javascript, css, database, github }) => {
    const isMobile = useMediaQuery("(max-width: 480px)");
    const is600px = useMediaQuery("(max-width: 600px)");
    const isMedium = useMediaQuery("(max-width: 720px)");
    const is815px = useMediaQuery("(max-width: 815px)");
    const is950px = useMediaQuery("(max-width: 950px)");
    const is1100px = useMediaQuery("(max-width: 1100px)");
    const { isSidebarOpen } = useContext(SidebarContext);

    javascript = javascript?.filter((skill) => skill.showOnSkillCard === true);
    css = css?.filter((skill) => skill.showOnSkillCard === true);
    database = database?.filter((skill) => skill.showOnSkillCard === true);
    github = github?.filter((skill) => skill.showOnSkillCard === true);

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
            sx={{
                transition: "all 0.3s ease-in-out",
            }}
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
                sx={{
                    transition: "all 0.3s ease-in-out",
                }}
            >
                <Box
                    width="100%"
                    mr={!isMobile && !(isMedium && isSidebarOpen) && 0.75}
                >
                    <SkillBox
                        label="JavaScript"
                        value={Math.round(((65 + 80 + 70) / 300) * 100)}
                        backgroundColor="#E8C825"
                        image={"/images/js.png"}
                        trailColor="rgb(232, 200, 37, 0.4)"
                        strokeColor="rgb(232, 200, 37)"
                        skill={javascript}
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
                        image={"/images/css.png"}
                        skill={css}
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
                sx={{
                    transition: "all 0.3s ease-in-out",
                }}
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
                        image={"/images/mongodb.png"}
                        skill={database}
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
                        image={"/images/github.png"}
                        skill={github}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default SkillCards;
