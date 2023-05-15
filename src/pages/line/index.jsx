import { useTheme, Box, Typography } from "@mui/material";
import { lineDataJS, lineDataCSS, lineDataDB } from "@/data/charts";
import LineChart from "@/components/charts/LineChart";
import { useState } from "react";

const Index = () => {
    const theme = useTheme();
    const [lineType, setLineType] = useState("linear");

    return (
        <div
            className="app"
            style={{
                padding: "0 0.5rem",
                color: theme.palette.secondary.text,
            }}
        >
            {/**Javascript LineChart*/}
            <Box p="10px">
                <Typography
                    fontWeight="bold"
                    color="secondary.text"
                    fontSize="1rem"
                >
                    JavaScript & Frameworks
                </Typography>
                <LineChart data={lineDataJS} lineType={lineType} />
            </Box>
            {/**CSS LineChart*/}
            <Box p="10px">
                <Typography
                    fontWeight="bold"
                    color="secondary.text"
                    fontSize="1rem"
                >
                    CSS & Frameworks
                </Typography>
                <LineChart data={lineDataCSS} lineType={lineType} />
            </Box>
            {/**Database LineChart*/}
            <Box p="10px">
                <Typography
                    fontWeight="bold"
                    color="secondary.text"
                    fontSize="1rem"
                >
                    Database
                </Typography>
                <LineChart data={lineDataDB} lineType={lineType} />
            </Box>
        </div>
    );
};

export default Index;
