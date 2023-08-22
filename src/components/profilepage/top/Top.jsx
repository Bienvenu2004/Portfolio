import React from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CameraAltRounded } from "@mui/icons-material";
import { SidebarContext } from "@/contexts/SidebarContext";
import { Avatar } from "@nextui-org/react";
import { VerifiedTwoTone } from "@mui/icons-material";
import CustomIconButton from "@/components/UI/CustomIconButton";
import { borderColor } from "@mui/system";
import { DownloadTwoTone } from "@mui/icons-material";
import { BorderColor } from "@mui/icons-material";
const Top = () => {

    const theme = useTheme()

    let coverPhotoWidth = "75%";
    let coverPhotoHeight = "290px";
    const { isSidebarOpen } = React.useContext(SidebarContext);
    const is1109px = useMediaQuery('(max-width:1109px)');
    const is1230px = useMediaQuery('(max-width:1232px)');
    const is950px = useMediaQuery('(max-width:950px)');
    const is670px = useMediaQuery('(max-width:670px)');
    const is450px = useMediaQuery('(max-width:450px)')

    is1230px && (coverPhotoWidth = (0.9 * 1230) + "px");
    is1109px && (coverPhotoWidth = "100%")

    is950px && (coverPhotoHeight = "300px");
    is670px && (coverPhotoHeight = "250px");
    is450px && (coverPhotoHeight = "210px")


    return (
        <Box
            sx={{
                width: "100%",
                height: "fit-content",
                backgroundImage: theme.palette.mode === 'dark' && "url(/images/me.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                backgroundColor: theme.palette.mode === 'light' && theme.palette.background.alt
            }}
        >
            <Box
                className="overlay"
                sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: theme.palette.mode === 'dark' && 'linear-gradient(to bottom, transparent,rgb(0,0,0,0.5), rgb(0,0,0))',
                    backgroundColor: theme.palette.mode === 'light' && theme.palette.background.default,
                    zIndex: -1,
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        backdropFilter: "blur(200px)",
                        WebkitBackdropFilter: "blur(200px)",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            backgroundImage: "url(/images/me.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            borderLeft: "1px solid transparent",
                            borderBottom: "1px solid transparent",
                            borderRight: "1px solid transparent",
                            borderBottomRightRadius: "10px",
                            borderBottomLeftRadius: "10px",
                            width: isSidebarOpen ? "83%" : coverPhotoWidth,
                            maxHeight: isSidebarOpen ? "330px" : "350px",
                            minHeight: isSidebarOpen ? "290px" : coverPhotoHeight,
                            margin: "auto",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            transition: "all 0.2s ease-in-out",
                            display: "flex",
                            justifyContent: "right",
                            paddingRight: "3%",

                        }}
                    >
                        <Box
                            sx={{
                                height: "inherit",
                                minWidth: "170px",
                                display: "flex",
                                justifyContent: "end",
                                flexDirection: "column",
                                pb: "30px",
                            }}
                        >
                            <Button
                                variant="contained"
                                startIcon={<CameraAltRounded />}
                                sx={{
                                    height: "fit-content",
                                    width: "100%",
                                    backgroundColor: "rgba(0,0,0,0.5)",
                                    color: "white",
                                    mb: "5px",
                                    py: "8px",
                                    borderRadius: "6px",
                                    textTransform: "none",
                                    transition: "all 0.2s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "rgba(0,0,0,0.4)",
                                    }
                                }}
                            >
                                Edit Cover Photo
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                        }}
                        flexGrow={1}
                    >
                        <Box
                            sx={{
                                width: isSidebarOpen ? "83%" : coverPhotoWidth,
                                margin: "auto",
                                display: "flex",
                                height: '140px',
                            }}
                        >
                            <Box display="flex" alignItems="center" mr="0.3rem"
                                sx={{
                                    mt: '-40px',
                                    ml: '2rem',
                                    transition: 'all 0.2s ease-in-out',
                                    height: 'fit-content',
                                    width: 'fit-content',
                                    border: theme.palette.mode === 'dark' ? '4px solid darkgray' : '4px solid whitesmoke',
                                    borderRadius: '50%',
                                    display: 'flex'
                                }}
                            >
                                <Avatar
                                    src="/images/me.jpeg"
                                    css={{
                                        size: "160px",
                                        transition: 'all 0.2s ease-in-out',
                                        "& .nextui-avatar-img": {
                                            border: "none",
                                        },
                                    }}
                                    borderWeight={'bold'}
                                />
                            </Box>
                            <Box>
                                <CustomIconButton
                                    styles={{
                                        borderColor: 'white',
                                        padding: 2,
                                        borderRadius: '50%',
                                        backgroundColor: theme.palette.mode === 'dark' ? 'gray' : 'whitesmoke',
                                        color: theme.palette.mode === 'dark' ? 'whitesmoke' : 'black',
                                        ml: '-45px',
                                        zIndex: '999',
                                        mt: '80px'
                                    }}
                                >
                                    <CameraAltRounded sx={{ fontSize: '20px', position: 'absolute' }} />
                                </CustomIconButton>
                            </Box>

                            {/** Name and Experience */}
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography
                                    sx={{
                                        fontSize: '35px',
                                        fontWeight: 'bold',
                                        mt: '1.3rem',
                                        ml: '0.6rem',
                                        color: theme.palette.secondary.text

                                    }}
                                >
                                    Kibuh Abdou Rahim
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        mt: '-0.3rem',
                                        ml: '0.6rem',
                                        color: theme.palette.secondary.text
                                    }}
                                >
                                    1 Year Experience in Web Development
                                    <VerifiedTwoTone sx={{ fontSize: '20px', ml: '1rem', position: 'absolute', mt: '-2px' }} />
                                </Typography>
                            </Box>
                            <Box
                                display={'flex'}
                                flexGrow={1}
                                border={'1px solid red'}
                                alignItems='end'
                                pb='10px'
                                justifyContent={'center'}
                                pr='30px'
                            >
                                <Box
                                    sx={{
                                        height: "inherit",
                                        minWidth: "150px",
                                        display: "flex",
                                        justifyContent: "end",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Box sx={{
                                        height: 'fit-content',
                                        width: 'fit-content',
                                        display: "flex",
                                    }}>
                                        <Button
                                            className="download-button"
                                            variant="contained"
                                            startIcon={<DownloadTwoTone className="bounce" />}
                                            sx={{
                                                height: "fit-content",
                                                width: "150px",
                                                backgroundColor: theme.palette.secondary.main,
                                                color: "whitesmoke",
                                                py: "8px",
                                                px: '5px',
                                                margin: '0.25rem',
                                                borderRadius: "6px",
                                                textTransform: "none",
                                                transition: "all 0.2s ease-in-out",
                                                zIndex: '99',
                                                backgroundSize: '200% 100%',
                                                "&:hover": {
                                                    backgroundColor: "rgba(0,0,0,0.4)",
                                                }
                                            }}
                                        >
                                            Download CV
                                        </Button>
                                        <Button
                                            className="download-button"
                                            variant="contained"
                                            startIcon={<BorderColor/>}
                                            sx={{
                                                height: "fit-content",
                                                width: "120px",
                                                backgroundColor: 'rgba(131,131,131,0.5)',
                                                color: "whitesmoke",
                                                py: "8px",
                                                px: '5px',
                                                margin: '0.25rem',
                                                borderRadius: "6px",
                                                textTransform: "none",
                                                transition: "all 0.2s ease-in-out",
                                                zIndex: '99',
                                                backgroundSize: '200% 100%',
                                                "&:hover": {
                                                    backgroundColor: "rgba(0,0,0,0.4)",
                                                }
                                            }}
                                        >
                                            Edit Profile
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Top;