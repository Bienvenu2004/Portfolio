import React from 'react'
import { Triangle } from "react-loader-spinner";
import { Box } from '@mui/material'


const Loader = ({theme}) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
                backgroundColor: "#000",
                flexDirection: "column",
            }}
        >
            <Triangle
                height="60"
                width="60"
                color="#0091ea"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible="true"
            />
            <div 
                style={{
                    color: '#fff',
                    marginTop: '20px',
                    fontSize: '14px',
                    fontWeight: 'semi-bold',
                    fontFamily: 'Cascadia Code',
                    //marginLeft: '-45px'
                }}
            >
                fetching page data...
            </div>
        </Box>
    );
}

export default Loader