import { Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import StackChart from "./StackChart";
import StackCard from "./StackCard";
//images
import js from "@/public/images/js.png";
import css3 from "@/public/images/css.png";
import mongodb from "@/public/images/mongodb.png";
import github from "@/public/images/github.png";
import { SidebarContext } from "@/components/contexts/SidebarContext";

const Stack = ({ mongodb, expressjs, reactjs, nextjs, nodejs }) => {
    const theme = useTheme();
    const [isMERN, setIsMERN] = React.useState(true);
    const isMobile = useMediaQuery("(max-width: 480px)");
    const isMedium = useMediaQuery("(max-width: 720px)");

    const { isSidebarOpen } = React.useContext(SidebarContext);

    React.useEffect(() => {
        if (nextjs) {
            setIsMERN(false);
        }
    }, [nextjs]);

    return (
        <Box height="100%" width="100%" display="flex" flexDirection="column">
            <Box height="45%" width="100%" display="flex" py={0.75}>
                <StackChart
                    mongodb={mongodb}
                    expressjs={expressjs}
                    reactjs={reactjs}
                    nodejs={nodejs}
                />
            </Box>
            <Box flexGrow={1} display="flex">
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
                            (isSidebarOpen && isMedium && "wrap")
                        }
                    >
                        <StackCard
                            label="MongoDB"
                            value={72}
                            trailColor="rgb(1, 236, 100,0.4)"
                            strokeColor="rgb(1, 236, 100)"
                            image={css3}
                        />

                        <StackCard
                            label="Express JS"
                            value={65}
                            trailColor="rgb(232, 200, 37,0.4)"
                            strokeColor="rgb(232, 200, 37)"
                            image={js}
                        />
                    </Box>
                    <Box
                        display="flex"
                        height="100%"
                        width="100%"
                        mx={0.5}
                        justifyContent="space-between"
                        flexWrap={"wrap"}
                    >
                        <StackCard
                            label="React JS"
                            value={75}
                            strokeColor="hsl(216, 70%, 50%,0.3)"
                            trailColor="hsl(216, 70%, 50%)"
                            image={css3}
                        />
                        <StackCard
                            label="Node JS"
                            value={70}
                            strokeColor="rgb(1, 236, 100,0.4)"
                            trailColor="rgb(1, 236, 100)"
                            image={github}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Stack;
