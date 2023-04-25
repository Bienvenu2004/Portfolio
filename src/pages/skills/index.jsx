import axios from "axios";
import { useTheme, Box, useMediaQuery } from "@mui/material";
import { useEffect } from "react";

const Index = ({ Line, Bar, Geo, Pie }) => {
    const matches = useMediaQuery("(min-width:1366px)", { noSsr: true });
    const theme = useTheme();

    console.log(Geo);

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
    let Line;
    let Bar;
    let Geo;
    let Pie;

    // //get LineChart data
    // await axios.get(`http://localhost:3000/api/portfolioapi?getCollection=Line`)
    // .then(res => { Line = res.data.documents })
    // .catch(err => console.log(err))

    // //get BarChart data
    // await axios.get(`http://localhost:3000/api/portfolioapi?getCollection=Bar`)
    // .then(res => { Bar = res.data.documents })
    // .catch(err => console.log(err))

    // //get PieChart data
    // await axios.get(`http://localhost:3000/api/portfolioapi?getCollection=Pie`)
    // .then(res => { Pie = res.data.documents })
    // .catch(err => console.log(err))

    // //get GeoChart data
    // await axios.get(`http://localhost:3000/api/portfolioapi?getCollection=Geo`)
    // .then(res => {Geo = res.data.documents })
    // .catch(err => console.log(err))

    return {
        props: {
            Line: Line || null,
            Bar: Bar || null,
            Pie: Pie || null,
            Geo: Geo || null,
        },
        revalidate: 10,
    };
};

export default Index;
