import {
    Box,
    InputBase,
    useTheme,
    Chip,
    Typography,
    IconButton,
} from "@mui/material";
import { Loading } from "@nextui-org/react";
import { Oval } from "react-loader-spinner";
import { Search, CloseRounded } from "@mui/icons-material";

let detectedOS;

const SearchHeader = ({ isTyping, setSearchValue, closeSearchModal }) => {
    const theme = useTheme();
    if (navigator.userAgent.indexOf("Mac") != -1) detectedOS = "MacOS";
    if (navigator.userAgent.indexOf("Linux") != -1) detectedOS = "Linux";
    if (navigator.userAgent.indexOf("Windows") != -1) detectedOS = "Windows";

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
                "& svg": {
                    color:
                        theme.palette.mode === "dark" && "rgba(1, 80, 155, 1)",
                },
            }}
        >
            {isTyping ? (
                <Loading
                    size="sm"
                    color="primary"
                    type="default"
                    css={{
                        mr: "16px",
                    }}
                />
            ) : (
                // <Oval
                //     height={20}
                //     width={20}
                //     color="#0091ea"
                //     wrapperStyle={{
                //         marginRight: "16px",
                //     }}
                //     wrapperClass=""
                //     visible={true}
                //     ariaLabel="oval-loading"
                //     secondaryColor="#0091ea"
                //     strokeWidth={2}
                //     strokeWidthSecondary={2}
                // />
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
                placeholder="Search..."
                sx={{
                    border: "none",
                    margin: "0px",
                    pt: "5px",
                    fontSize: "16px",
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
            {detectedOS ? (
                <Chip
                    variant="outlined"
                    label={
                        <Typography
                            sx={{
                                textTransform: "none",
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: theme.palette.secondary.text,
                                letterSpacing: "3px",
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
