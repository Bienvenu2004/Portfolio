import { useRef, useEffect } from "react";
import {
    Box,
    InputBase,
    useTheme,
    Chip,
    Typography,
    IconButton,
} from "@mui/material";
import { Oval } from "react-loader-spinner";
import { Search, CloseRounded } from "@mui/icons-material";

let detectedOS = null;

const SearchHeader = ({ isTyping, searchValue,setSearchValue, closeSearchModal }) => {
    const theme = useTheme();
    const inputRef = useRef(null);

    if (navigator.userAgent.indexOf("Mac") != -1) detectedOS = "MacOS";
    if (navigator.userAgent.indexOf("Linux") != -1) detectedOS = "Linux";
    if (navigator.userAgent.indexOf("Windows") != -1) detectedOS = "Windows";
    if (navigator.userAgent.indexOf("Android") != -1) detectedOS = "Android";
    if (navigator.userAgent.indexOf("like Mac") != -1) detectedOS = "iOS";

    const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    const screenHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    const isLandScape = screenWidth > screenHeight;

    useEffect(() => {
        inputRef?.current.focus();
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,

                backgroundColor:
                    theme.palette.mode === "dark" && "rgb(0, 30, 60, 0.3)",
                width: "100%",
                height: "55px",
                "& svg": {
                    color:
                        theme.palette.mode === "dark" && "rgba(1, 80, 155, 1)",
                },
            }}
        >
            {isTyping ? (
                <Oval
                    height={20}
                    width={20}
                    color="#0091ea"
                    wrapperStyle={{
                        marginRight: "16px",
                    }}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="loading"
                    secondaryColor="#0091ea"
                    strokeWidth={6}
                    strokeWidthSecondary={6}
                />
            ) : (
                <Search
                    sx={{
                        fontSize: "25px",
                        mr: "16px",
                    }}
                />
            )}
            <InputBase
                fullWidth
                id="search"
                label="Search..."
                variant="standard"
                placeholder="Type something..."
                inputRef={inputRef}
                value = {searchValue}
                sx={{
                    border: "none",
                    margin: "0px",
                    pt: "5px",
                    fontSize:
                        isLandScape && screenHeight < 504 ? "12px" : "16px",
                    letterSpacing: "1px",
                    "&:focus": {
                        outline: "none",
                    },
                    "& .MuiOutlinedInput-input": {
                        m: 0,
                        border: "none",
                    },
                }}
                InputProps={{
                    disableUnderline: true,
                }}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                    if (event.target.value.length < 1) {
                        setSearchValue(null);
                    }
                }}
            />
            {detectedOS === "Windows" ||
            detectedOS === "MacOS" ||
            detectedOS === "Linux" ? (
                <Chip
                    variant="outlined"
                    label={
                        <Typography
                            sx={{
                                textTransform: "none",
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: theme.palette.secondary.text,
                                letterSpacing: "1.55px",
                            }}
                        >
                            esc
                        </Typography>
                    }
                    size="small"
                    sx={{
                        textTransform: "none",
                        transition: "all 0.2s ease-in-out",
                        cursor: "pointer",
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? "rgb(1, 10, 50, 0.5)"
                                : "#FFF",
                        border:
                            theme.palette.mode === "dark"
                                ? "1px solid rgba(1, 87, 155, 0.8)"
                                : "1px solid rgba(1, 1, 1, 0.2)",
                        "&.MuiChip-root": {
                            borderRadius: "6px",
                            margin: "0px",
                        },
                    }}
                    rounded="false"
                    onClick={closeSearchModal}
                />
            ) : (
                <IconButton
                    sx={{
                        display: "flex",
                        transition: "all 0.5s ease-in-out",
                        backgroundColor:
                            theme.palette.mode === "dark" &&
                            "rgba(69, 90, 100, 0.1)",
                        "&:hover": {
                            backgroundColor:
                                theme.palette.mode === "dark"
                                    ? "rgba(1, 87, 155, 0.4)"
                                    : theme.palette.secondary.main,
                            transition: "all 0.5s ease-in-out",
                            transform: "scale(0.8)",
                            "& svg": {
                                color: "#FFF",
                            },
                        },
                        height: "30px",
                        width: "30px",
                    }}
                    onClick={closeSearchModal}
                >
                    <CloseRounded />
                </IconButton>
            )}
        </Box>
    );
};

export default SearchHeader;
