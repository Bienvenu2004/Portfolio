import { useTheme, useMediaQuery, Box } from "@mui/material";

import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import ComingSoon from "@/components/comingSoon/ComingSoon";
import { SidebarContext } from "@/contexts/SidebarContext";

const App = ({ document }) => {
    const theme = useTheme();
    const router = useRouter();
    const { isSidebarOpen } = useContext(SidebarContext)

    // useEffect(()=>{
    //     router.push("/skills");
    // },[])    

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
                backgroundSize="cover"
                backgroundPosition="center"
                sx={{
                    backgroundImage: theme.palette.mode === "dark" && "url('/images/blur.jpg')",
                    backdropFilter: "blur(60px)",
                    height: "100vh",
                    width: "100vw",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            >
                <Box
                    className="overlay"
                    sx={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: 'linear-gradient(to bottom, transparent 100%, rgb(0,0,0,0.8) 100%)',
                        zIndex: 999,
                        backdropFilter: "blur(30px)",
                        pt: 23,
                        pl: isSidebarOpen && 26,
                        transition: "all 0.2s ease-in-out"
                    }}
                >
                    <ComingSoon />
                </Box>
            </Box>
        </div>
    );
};

export const getStaticProps = async () => {
    return {
        props: {
            document: null,
        },
        revalidate: 10,
    };
};

export default App;
