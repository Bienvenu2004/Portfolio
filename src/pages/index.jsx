import { useTheme, useMediaQuery, Box } from "@mui/material";

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ComingSoon from "@/components/comingSoon/ComingSoon";

const App = ({ document }) => {
    const theme = useTheme();
    const router = useRouter();

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
                mx={0.75}
                height="100%"
                borderRadius={3}
                boxShadow={
                    theme.palette.mode === "light" &&
                    "0px 0px 2px 0px rgba(0,0,0,0.2)"
                }
                display={"flex"}
            >
                <ComingSoon />
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
