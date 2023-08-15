import { useTheme, Box, useMediaQuery } from "@mui/material";

const Index = () => {
    const theme = useTheme();

    return (
        <div
            className="app"
            style={{
                padding: "0 0.5rem",
                color: theme.palette.secondary.text,
                height: "100%",
            }}
        >
            <Box
                
                height="100%"
                borderRadius={3}
                boxShadow={
                    theme.palette.mode === "light" &&
                    "0px 0px 2px 0px rgba(0,0,0,0.2)"
                }
            >
                Profile
            </Box>
        </div>
    );
};

export default Index;
