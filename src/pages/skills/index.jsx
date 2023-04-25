import axios from "axios";
import { useTheme, Box, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { getAllDocuments } from "@/lib/mongodbHelper";

const Index = ({ javascript }) => {
    const matches = useMediaQuery("(min-width:1366px)", { noSsr: true });
    const theme = useTheme();

    console.log(javascript);

    return (
        <div
            className="app"
            style={{
                padding: "0 0.5rem",
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
            ></Box>
        </div>
    );
};

export const getStaticProps = async () => {
    const javascript = await axios
        .get(`/api/portfolioapi?getCollection=javascript`)
        .catch((error) => {
            if (axios.isCancel(error)) {
                return { isCancelled: true, documents: [] };
            }
            return { isCancelled: false, error: error };
        });
    console.log(javascript);
    return {
        props: {
            javascript,
        },
        revalidate: 10,
    };
};

export default Index;
