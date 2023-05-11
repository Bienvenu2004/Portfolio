import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { SidebarContext } from "../../contexts/SidebarContext";
import Stack from "./Stack";

const LeftSide = () => {
    const { isSidebarOpen } = React.useContext(SidebarContext);
    const is1075px = useMediaQuery("(max-width:1075px)");

    return (
        <Box
            height="100%"
            width={is1075px && isSidebarOpen ? "100%" : "50%"}
            boxSizing="border-box"
            display="flex"
            p={0.75}
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
