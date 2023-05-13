import { useTheme, Box, Typography } from "@mui/material";
import { barData } from "@/data/charts";
import BarChart from "@/components/BarChart";

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
            <Box
                p="10px"
                backgroundColor={theme.palette.background.alt}
                borderRadius={3}
                boxShadow={
                    theme.palette.mode === "light" &&
                    "0px 0px 2px 0px rgba(0,0,0,0.2)"
                }
            >
                <Typography
                    fontWeight="bold"
                    color="secondary.text"
                    fontSize="1rem"
                >
                    Bar Chart
                </Typography>
                <BarChart data={barData} />
            </Box>
        </div>
    );
};

export default Index;
