import React from 'react'
import classes from './LoadingV2.module.css'
import { Box } from '@mui/material'

const LoadingV2 = ({theme}) => {
    return (
        <Box display="flex"
            width="100%"
            sx={{
                justifyContent: "center",
                alignItems: "center",
            }}>

            <span class={classes.loader}></span>
        </Box>
    )
}

export default LoadingV2