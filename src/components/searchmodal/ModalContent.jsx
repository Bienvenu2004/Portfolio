import React, { Fragment } from "react";
import { Box, Typography, useTheme, Skeleton } from "@mui/material";
import NoData from "./NoData";
import useWindowDimensions from "@/hooks/useWindowDimentions";

const SearchModalContent = ({ searchValue, isTyping }) => {
    const theme = useTheme();

    const {screenWidth, screenHeight} = useWindowDimensions()


    const isLandScape = screenWidth > screenHeight;

    return (
        <Box
            sx={{
                width: "100%",
                flexGrow: 1,
                overflowY: "scroll",
                p: "0",
                m: "0",
                backgroundColor:
                theme.palette.mode === "light" ? "rgb(255,255,255,0.5)":theme.palette.background.paper,
            }}
        >
            {
                <Fragment>
                    <Box
                        sx={{
                            mt: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <NoData
                            isTyping={isTyping}
                            isLandScape={isLandScape}
                            screenHeight={screenHeight}
                        />
                    </Box>
                </Fragment>
            }
        </Box>
    );
};

export default SearchModalContent;
