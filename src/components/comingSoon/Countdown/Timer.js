import React, { Component } from "react";
import { Watch } from "react-loader-spinner";
import { useTheme } from "@mui/material";

const CountDown = ()=> {
    
    const theme = useTheme()

    return (
        <div id="countdown" style={{borderRadius: '5px', background: "transparent", justifyContent:"center",display:"flex"}}>
            <Watch
                height="80"
                width="80"
                radius="48"
                color={theme.palette.secondary.main}
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
}

export default CountDown;
