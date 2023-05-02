import React from "react";
import { Box, InputBase, useTheme, Chip, Typography } from "@mui/material";
import { Loading } from "@nextui-org/react";
import { Search } from "@mui/icons-material";

const SearchHeader = ({ isTyping, setSearchValue }) => {
    const theme = useTheme();
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
                    backgroundColor:
                        theme.palette.mode === "dark"
                            ? "rgb(1, 10, 50, 1)"
                            : "#FFF",
                    border:
                        theme.palette.mode === "dark"
                            ? "1px solid rgba(1, 87, 155, 0.8)"
                            : "1px solid rgba(1, 1, 1, 0.2)",
                    "&.MuiChip-root": {
                        borderRadius: "8px",
                        margin: "0px",
                    },
                }}
                rounded={false}
            />
        </Box>
    );
};

export default SearchHeader;
