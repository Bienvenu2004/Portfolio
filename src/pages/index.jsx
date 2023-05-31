import { useTheme, useMediaQuery, Box } from "@mui/material";

import axios from "axios";
import { useRouter } from "next/router";

const App = ({ document }) => {
    const theme = useTheme();
    const router = useRouter();

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
                backgroundColor={theme.palette.background.alt}
                boxShadow={
                    theme.palette.mode === "light" &&
                    "0px 0px 2px 0px rgba(0,0,0,0.2)"
                }
            >
                {router.push("/skills")}
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
