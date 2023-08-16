import React from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import {CameraAltRounded } from "@mui/icons-material";
import { SidebarContext } from "@/components/contexts/SidebarContext";
const Top = ()=>{

    let coverPhotoWidth = "71%";
    let screenWidth = 0;
    const {isSidebarOpen} = React.useContext(SidebarContext);
    const is1109px = useMediaQuery('(max-width:1109px)');
    const is1230px = useMediaQuery('(max-width:1232px)');
    
    is1230px && (coverPhotoWidth = (0.9 * 1230)+"px");
    is1109px && (coverPhotoWidth = "100%")
    

    console.log(screenWidth);

    return(
        <Box
            sx={{
                width:"100%",
                height:"calc(100vh - 110px)",
                backgroundImage:"url(/images/me.jpg)",
                backgroundSize:"cover",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                overflow:"hidden",
            }}
        >
            <Box
                className="overlay"
                sx={{
                    width:"100%",
                    height:"100%",
                    backgroundImage: 'linear-gradient(to bottom, transparent 50%, rgb(0,0,0,0.6) 50%)',
                    zIndex:-1,
                }}
            >
                <Box
                    sx={{
                        width:"100%",
                        height:"100%",
                        backdropFilter:"blur(200px)",
                        WebkitBackdropFilter:"blur(200px)",
                        display:"flex",
                        flexDirection:"column",
                    }}
                >    
                    <Box
                        sx={{
                            backgroundImage:"url(/images/me.jpg)",
                            backgroundSize:"cover",
                            backgroundPosition:"center",
                            backgroundRepeat:"no-repeat",
                            width:"100%",
                            borderLeft:"1px solid transparent",
                            borderBottom:"1px solid transparent",
                            borderRight:"1px solid transparent",
                            borderBottomRightRadius:"10px",
                            borderBottomLeftRadius:"10px",
                            width:isSidebarOpen?"83%":coverPhotoWidth,
                            maxHeight:isSidebarOpen ?  "330px":"350px",
                            minHeight:isSidebarOpen ?  "330px":"350px",
                            margin:"auto",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            transition: "all 0.2s ease-in-out",
                            display:"flex",
                            justifyContent:"right",
                            paddingRight:"3%",
                            
                        }}
                    >
                        <Box
                            sx={{
                                height:"100%",
                                minWidth:"170px",
                                display:"flex",
                                justifyContent:"end",
                                flexDirection:"column",
                                pb:"30px",
                            }}
                        >
                            <Button 
                                variant="contained" 
                                startIcon={<CameraAltRounded />}
                                sx={{
                                    height:"fit-content",
                                    width:"100%",
                                    backgroundColor:"rgba(0,0,0,0.5)",
                                    color:"white",
                                    mb:"5px",
                                    py:"8px",
                                    borderRadius:"6px",
                                    textTransform:"none",
                                    transition: "all 0.2s ease-in-out",
                                    "&:hover":{
                                        backgroundColor:"rgba(0,0,0,0.4)",
                                    }
                                }}
                            >
                                Edit Cover Photo
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width:isSidebarOpen?"83%":coverPhotoWidth,
                            border:"1px solid white",
                            margin:"auto",
                            display:"flex",
                        }}
                        flexGrow={1}
                    >

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Top;