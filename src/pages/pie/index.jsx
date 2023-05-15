import { Box, useTheme, Typography } from "@mui/material";
import { pieDataJS, pieDataCSS, pieDataDB } from "@/data/charts";
import PieChart from "@/components/charts/PieChart";

const Index = () => {
    const theme = useTheme();

    return (
        <div
            className="app"
            style={{
                padding: "0 0.5rem",
                color: theme.palette.secondary.text,
            }}
        >
            {/**Javascript PieChart*/}
            <Box p="10px">
                <Typography
                    fontWeight="bold"
                    color="secondary.text"
                    fontSize="1rem"
                >
                    JavaScript & Frameworks
                </Typography>
                <PieChart data={pieDataJS} />
            </Box>
            {/**CSS PieChart*/}
            <Box p="10px">
                <Typography
                    fontWeight="bold"
                    color="secondary.text"
                    fontSize="1rem"
                >
                    CSS & Frameworks
                </Typography>
                <PieChart data={pieDataCSS} />
            </Box>
            {/**Database PieChart*/}
            <Box p="10px">
                <Typography
                    fontWeight="bold"
                    color="secondary.text"
                    fontSize="1rem"
                >
                    Database
                </Typography>
                <PieChart data={pieDataDB} />
            </Box>
        </div>
    );
};

export default Index;
