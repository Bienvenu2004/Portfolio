import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { SidebarContext } from "../../contexts/SidebarContext";
import Stack from "./Stack";

const LeftSide = () => {
    const { isSidebarOpen } = React.useContext(SidebarContext);
    const is1050px = useMediaQuery("(max-width:1050px)");

    return (
        <Box
            height={is1050px && isSidebarOpen ? "fit-content" : "100%"}
            width={is1050px && isSidebarOpen ? "100%" : "50%"}
            pr={0.75}
            display="flex"
        >
            <Stack
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
        </Box>
    );
};

export default LeftSide;
