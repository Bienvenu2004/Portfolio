import React from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CameraAltRounded } from "@mui/icons-material";
import { SidebarContext } from "@/contexts/SidebarContext";
import { Avatar } from "@nextui-org/react";
import { VerifiedTwoTone } from "@mui/icons-material";
import { DownloadTwoTone } from "@mui/icons-material";
import { BorderColor } from "@mui/icons-material";
const Top = () => {

    const [downloadInProgress, setDownloadInProgress] = React.useState(false);
    const theme = useTheme()
    const { isSidebarOpen } = React.useContext(SidebarContext);

    let coverPhotoWidth = "75%";
    let coverPhotoHeight = "290px";
    const is1109px = useMediaQuery('(max-width:1109px)');
    const is1230px = useMediaQuery('(max-width:1232px)');
    const is950px = useMediaQuery('(max-width:950px)');
    const is670px = useMediaQuery('(max-width:670px)');
    const is450px = useMediaQuery('(max-width:450px)')
    const is875px = useMediaQuery('(max-width:875px)')

    //When sidebar is open

    const is1500px = useMediaQuery('(max-width:1500px)');



    is1230px && !isSidebarOpen && (coverPhotoWidth = (0.9 * 1230) + "px");
    is1109px && !isSidebarOpen && (coverPhotoWidth = "100%")

    is950px && !isSidebarOpen && (coverPhotoHeight = "300px");
    is670px && !isSidebarOpen && (coverPhotoHeight = "250px");
    is450px && !isSidebarOpen && (coverPhotoHeight = "170px")

    isSidebarOpen && is1500px && (coverPhotoWidth = (0.9 * (1500 - 250)) + "px");

    const handleDownloadCV = () => {
        try {
            const downloadLink = document.createElement('a');
            downloadLink.href = '/cv/RahimCV-Latest.pdf'; // Update the path to include the "cv" subfolder.
            downloadLink.download = 'RahimCV-Latest.pdf'; // Specify the file name for download.
            downloadLink.click();
            setDownloadInProgress(true);
            // Re-enable the button after a delay (e.g., 3 seconds)
            setTimeout(() => {
                setDownloadInProgress(false);
            }, 3000);
        } catch (error) {
            // Optionally, you can show an error message to the user
            alert('An error occurred while downloading the CV. Please try again later.');
        }
    };


    return (
        <Box
            sx={{
                width: "100%",
                height: "fit-content",
                backgroundImage: theme.palette.mode === 'dark' && !is950px && "url(/images/me.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                backgroundColor: theme.palette.mode === 'light' && theme.palette.background.default
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: is950px && !is450px && "500px" || '200px',
                    backgroundImage: theme.palette.mode === 'dark' && `linear-gradient(to bottom, rgb(0,0,0,0.3),rgb(0,0,0), rgb(0,0,0))`,
                    backgroundColor: theme.palette.mode === 'light' && is950px
                        && theme.palette.background.paper,
                    transition: "all 0.2s ease-in-out",
                    zIndex: 999,
                }}
            >
                <Box
                    sx={{
                        height: "fit-content",
                        width: "100%",
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
                            width: coverPhotoWidth,
                            maxHeight: isSidebarOpen ? "330px" : "350px",
                            height: isSidebarOpen ? "300px" : coverPhotoHeight,
                            margin: "auto",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            transition: "all 0.2s ease-in-out",
                            display: "flex",
                            justifyContent: "right",
                            pr: '30px'

                        }}
                    >
                        <Box
                            sx={{
                                height: "inherit",
                                minWidth: "170px",
                                display: "flex",
                                justifyContent: "end",
                                flexDirection: "column",
                                pb: "20px",
                            }}
                        >
                            <Button
                                variant="contained"
                                startIcon={!is875px && <CameraAltRounded />}
                                sx={{
                                    height: "fit-content",
                                    width: is875px && '20px' || "100%",
                                    backgroundColor: "rgba(0,0,0,0.8)",
                                    color: "white",
                                    mb: "5px",
                                    py: "8px",
                                    px: '0px',
                                    borderRadius: "6px",
                                    textTransform: "none",
                                    transition: "all 0.2s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "rgba(0,0,0,0.6)",
                                    }
                                }}
                            >
                                {!is875px && "Edit Cover Photo" || <CameraAltRounded />}
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
                                pl: !is875px && !isSidebarOpen && '2rem' || isSidebarOpen && !is1500px && '6rem',
                                height: is875px && !is450px && '250px' || is450px && '235px' || '140px',
                                flexDirection: is875px && "column",
                                backgroundColor: is875px && theme.palette.mode === 'dark' && theme.palette.background.default,
                                // border: '1px solid blue',
                                borderBottomLeftRadius: '10px',
                                borderBottomRightRadius: '10px',
                            }}
                        >
                            {/**Avatar */}
                            <Box display="flex" alignItems="center" mr="0.3rem"
                                sx={{
                                    mt: is950px && !is875px && '15px' || is875px && '-80px' || '-40px',
                                    transition: 'all 0.2s ease-in-out',
                                    height: 'fit-content',
                                    width: 'fit-content',
                                    border: theme.palette.mode === 'dark' ? `4px solid ${theme.palette.secondary.main}` : '4px solid whitesmoke',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    mx: 'auto',
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
                                <CameraAltRounded
                                    sx={{
                                        fontSize: '32px',
                                        position: 'absolute',
                                        zIndex: 999,
                                        border: '1px solid white',
                                        p: '5px',
                                        borderRadius: '50%',
                                        ml: '125px',
                                        mt: '100px',
                                        backgroundColor: theme.palette.mode === 'dark' ? 'gray' : 'whitesmoke', color: theme.palette.mode === 'dark' ? 'whitesmoke' : 'black',
                                        transition: 'all 0.2s ease-in-out',
                                        '&:hover': {
                                            backgroundColor: theme.palette.background.alt,
                                            cursor: 'pointer',
                                        }
                                    }}
                                />

                            </Box>

                            {/** Name and Experience */}
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                sx={{
                                    m: is875px && 'auto',
                                    mt: is875px && '-57px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '35px',
                                        fontWeight: 'bold',
                                        mt: is950px ? "4rem" : '1.3rem',
                                        ml: '0.8rem',
                                        color: theme.palette.secondary.text

                                    }}
                                >
                                    Kibuh Abdou Rahim
                                </Typography>
                                <Typography
                                    sx={{
                                        pl: is875px && '17px',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        mt: '-0.3rem',
                                        ml: '0.8rem',
                                        color: theme.palette.secondary.text
                                    }}
                                >
                                    1 Year Experience in Web Development
                                    <VerifiedTwoTone sx={{ fontSize: '20px', ml: '1rem', position: 'absolute', mt: '-2px' }} />
                                </Typography>
                            </Box>
                            {/**Download and Edit profile Buttons */}
                            <Box
                                display={'flex'}
                                flexGrow={1}
                                // border={'1px solid red'}
                                mt={is875px && '-20px'}
                                alignItems={is875px && 'center' || 'end'}
                                pb={!is875px && '10px'}
                                justifyContent={is875px && 'center' || 'end'}
                                pr={!is875px && '30px'}
                            >
                                <Box
                                    sx={{
                                        height: "inherit",
                                        minWidth: "150px",
                                        display: "flex",
                                        justifyContent: "end",
                                        flexDirection: "row",
                                        mr: isSidebarOpen && '3.5rem',
                                    }}
                                >
                                    <Button
                                        className="download-button"
                                        variant="contained"
                                        startIcon={ !downloadInProgress && <DownloadTwoTone className="bounce" />}
                                        sx={{
                                            height: "fit-content",
                                            width: "150px",
                                            backgroundColor: downloadInProgress ? 'gray' : theme.palette.secondary.main,
                                            color: "whitesmoke",
                                            py: "8px",
                                            px: '5px',
                                            margin: '0.25rem',
                                            borderRadius: "6px",
                                            textTransform: "none",
                                            transition: "all 0.3s ease-in-out",
                                            zIndex: '99',
                                            backgroundSize: '200% 100%',
                                            "&:hover": {
                                                backgroundColor: "rgba(0,0,0,0.4)",
                                            },
                                            opacity: downloadInProgress && '0.8',
                                        }}
                                        disabled={downloadInProgress}
                                        onClick={handleDownloadCV}
                                    >
                                        <span
                                            style={{
                                                padding: downloadInProgress && '2px 0px',
                                                marginTop: downloadInProgress && '-5px',
                                                transition: 'opacity 0.5s, transform 0.5s',
                                                transform: downloadInProgress ? 'translateY(5px)' : 'translateY(0)',
                                            }}
                                        >
                                            {downloadInProgress ? "Downloading..." : "Download CV"}
                                        </span>
                                    </Button>
                                    <Button
                                        variant="contained"
                                        startIcon={<BorderColor />}
                                        sx={{
                                            height: "fit-content",
                                            width: "120px",
                                            backgroundColor: 'rgba(131,131,131,0.8)',
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
                                                opacity: '0.8',
                                                backgroundColor: 'rgba(131,131,131,0.8)',
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
    )
}

export default Top;