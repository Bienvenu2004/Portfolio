import { Empty } from "antd";
import { Typography, useTheme } from "@mui/material";

const NoData = ({ isTyping, isLandScape, screenHeight }) => {
    const theme = useTheme();
    return (
        <Empty
            imageStyle={{
                transition: "all 0.5s ease-in-out",
            }}
            description={
                <Typography
                    sx={{
                        fontSize:
                            isLandScape && screenHeight < 504 ? "12px" : "14px",
                        color: theme.palette.secondary.text,
                    }}
                >
                    {isTyping ? (
                        "Searching..."
                    ) : (
                        <p>
                            No{" "}
                            <span
                                style={{
                                    color: "#0072F5",
                                }}
                            >
                                results
                            </span>{" "}
                            found
                        </p>
                    )}
                </Typography>
            }
            className={isTyping && "noData"}
            style={{
                marginTop: "15%",
                position: "relative",
                transition: "all 0.5s ease-in-out",
            }}
        />
    );
};

export default NoData;
