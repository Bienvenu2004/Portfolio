import { Box } from "@mui/material";
import { Button } from "@mui/material";
import {CameraAltRounded } from "@mui/icons-material";
const Top = ()=>{
    return(
        <Box
            sx={{
                width:"100%",
                height:"calc(100vh - 64px)",
                backgroundImage:"url(/images/me.jpg)",
                backgroundSize:"cover",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                overflow:"hidden",
            }}
        >
            <Box
                sx={{
                    width:"100%",
                    height:"100%",
                    backgroundImage: 'linear-gradient(to bottom, transparent 50%, rgb(0,0,0,0.56) 50%)',
                    backdropFilter:"blur(15px)",
                    zIndex:-1,
                }}
            >
                <Box
                    sx={{
                        width:"100%",
                        height:"100%",
                        backdropFilter:"blur(200px)",
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
                            width:"85%",
                            height:"75%",
                            margin:"auto",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            transition: "all 0.2s ease-in-out",
                            display:"flex",
                            justifyContent:"right",
                            paddingRight:"5%",
                            
                        }}
                    >
                        <Box
                            sx={{
                                height:"100%",
                                minWidth:"15%",
                                display:"flex",
                                justifyContent:"end",
                                flexDirection:"column",
                                pb:"60px",
                            }}
                        >
                            <Button 
                                variant="contained" 
                                startIcon={<CameraAltRounded />}
                                sx={{
                                    height:"fit-content",
                                    width:"100%",
                                    backgroundColor:"rgba(0,0,0)",
                                    color:"white",
                                    mb:"5px",
                                    textTransform:"none",
                                    transition: "all 0.2s ease-in-out",
                                    "&:hover":{
                                        backgroundColor:"rgba(0,0,0,0.5)",
                                        outline:"1px solid white",
                                    }
                                }}
                            >
                                Edit Cover Photo
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Top;