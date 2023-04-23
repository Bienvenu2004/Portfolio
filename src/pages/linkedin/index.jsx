import { useTheme, Box, useMediaQuery } from "@mui/material";

const Index = () => {
    const theme = useTheme();
    const matches = useMediaQuery("(min-width:1366px)", { noSsr: true });

    return (
        <div
            className="app"
            style={{
                padding: "0.6rem 1.2rem 0.6rem 1.32rem",
                color: theme.palette.secondary.text,
                height: matches ? "92vh" : "90vh",
            }}
        >
            <Box
                mx={0.75}
                height="100%"
                borderRadius={3}
                backgroundColor={theme.palette.background.alt}
                boxShadow={
                    theme.palette.mode === "light" &&
                    "0px 0px 2px 0px rgba(0,0,0,0.2)"
                }
            >
                LinkedIn Page
            </Box>
        </div>
    );
};

export default Index;
