import ComingSoon from "@/components/comingSoon/ComingSoon";
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
                display={"flex"}
                backgroundImage="url('/images/blur.jpg')"
                backgroundSize="cover"
                backgroundPosition="center"
                sx={{
                    backdropFilter: "blur(30px)",
                    "&::before": {
                        content: "''",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                    },
                }}
            >
                <Box
                    className="overlay"
                    sx={{
                        width:"100%",
                        height:"100%",
                        backgroundImage: 'linear-gradient(to bottom, transparent 100%, rgb(0,0,0,0.8) 100%)',
                        zIndex:-1,
                        backdropFilter: "blur(30px)",
                    }}
                >
                    <ComingSoon/>
                </Box>
            </Box>
        </div>
    );
};

export default Index;
