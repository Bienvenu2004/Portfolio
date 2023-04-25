import { useTheme, useMediaQuery, Box } from "@mui/material";

import { lineDataJS, lineDataCSS, lineDataDB } from "@/data/charts";

import axios from "axios";

const App = ({ document }) => {
    const theme = useTheme();
    const matches = useMediaQuery("(min-width:1366px)", { noSsr: true });

    console.log(document);
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
            >
                Dashboard
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
