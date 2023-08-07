import React from 'react'
import { Triangle } from "react-loader-spinner";


const Loader = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
                backgroundColor: theme.palette.background.main,
            }}
        >
            <Triangle
                height="80"
                width="80"
                color="#0091ea"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible="true"
            />
        </Box>
    );
}

export default Loader