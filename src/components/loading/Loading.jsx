import React from 'react'
import { Box } from '@mui/material'
import { Triangle } from "react-loader-spinner";

const Loading = () => {

    return (
        <Box
            display="flex"
            height="100%"
            width="100%"
            sx={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Triangle
                height="50"
                width="50"
                color="#0091ea"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible="true"
            />
        </Box>
    )
}


export default Loading