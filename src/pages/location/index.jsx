import { useTheme, Typography, Box } from "@mui/material";
import { geographyData } from "@/data/charts";
import { features } from "@/data/geographyFeatures";
import dynamic from "next/dynamic";

const DynamicGeographyChart = dynamic(
    () => import("@/components/GeographyChart"),
    {
        ssr: false,
    }
);

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
            <Box p="10px">
                <Typography
                    fontWeight="bold"
                    color="secondary.text"
                    fontSize="1rem"
                >
                    Geography Chart
                </Typography>
                <DynamicGeographyChart
                    data={geographyData}
                    features={features}
                />
            </Box>
        </div>
    );
};

export default Index;
