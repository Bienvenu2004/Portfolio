import axios from "axios";
import { useTheme, Box, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { getAllDocuments } from "@/lib/mongodbHelper";
import { Skeleton } from "@mui/material";

const Index = ({ javascript, css, database }) => {
    const matches = useMediaQuery("(min-width:1366px)", { noSsr: true });
    const theme = useTheme();
    console.log("JS", javascript);
    console.log("CSS", css);
    console.log("DATABASE", database);

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
                {!javascript || !css || !database ? (
                    <Skeleton
                        variant="rounded"
                        width="100%"
                        height="100%"
                        animation="wave"
                        sx={{
                            backgroundColor:
                                theme.palette.mode === "dark" &&
                                theme.palette.background.alt,
                        }}
                    />
                ) : (
                    <div>content</div>
                )}
            </Box>
        </div>
    );
};

export const getStaticProps = async () => {
    try {
        let result = await getAllDocuments("javascript");
        const javascript = (await result.data) || null;
        result = await getAllDocuments("css");
        const css = (await result.data) || null;
        result = await getAllDocuments("database");
        const database = (await result.data) || null;
        return {
            props: {
                javascript: javascript.documents,
                css: css.documents,
                database: database.documents,
            },
            revalidate: 5,
        };
    } catch {
        return {
            props: {},
        };
    }
};

export default Index;
