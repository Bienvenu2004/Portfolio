import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid as MuiDataGrid, GridToolbar } from "@mui/x-data-grid";
import { renderProgress } from "./renderProgress";

const DataGrid = (props) => {
    const { javascript, css, database, github, selectedValue } = props;
    const [dataGridRowsJS, setDataGridRowsJS] = React.useState([]);
    const [dataGridRowsCSS, setDataGridRowsCSS] = React.useState([]);
    const [dataGridRowsDatabase, setDataGridRowsDatabase] = React.useState([]);
    const [dataGridRowsGithub, setDataGridRowsGithub] = React.useState([]);

    const theme = useTheme();

    React.useEffect(() => {
        if (selectedValue === "JavaScript") {
            javascript?.map((item) => {
                setDataGridRowsJS((prev) => [
                    ...prev,
                    {
                        id: item.label,
                        skill: item.label,
                        proficiency: item.value,
                    },
                ]);
            });
            setDataGridRowsCSS([]);
            setDataGridRowsDatabase([]);
            setDataGridRowsGithub([]);
        }
        if (selectedValue === "CSS") {
            css?.map((item) => {
                setDataGridRowsCSS((prev) => [
                    ...prev,
                    {
                        id: item.label,
                        skill: item.label,
                        proficiency: item.value,
                    },
                ]);
            });
            setDataGridRowsDatabase([]);
            setDataGridRowsGithub([]);
            setDataGridRowsJS([]);
        }
        if (selectedValue === "Database") {
            database?.map((item) => {
                setDataGridRowsDatabase((prev) => [
                    ...prev,
                    {
                        id: item.label,
                        skill: item.label,
                        proficiency: item.value,
                    },
                ]);
            });
            setDataGridRowsCSS([]);
            setDataGridRowsGithub([]);
            setDataGridRowsJS([]);
        }
        if (selectedValue === "Git & GitHub") {
            github?.map((item) => {
                setDataGridRowsGithub((prev) => [
                    ...prev,
                    {
                        id: item.label,
                        skill: item.label,
                        proficiency: item.value,
                    },
                ]);
            });
            setDataGridRowsCSS([]);
            setDataGridRowsDatabase([]);
            setDataGridRowsJS([]);
        }
    }, [selectedValue]);

    const columns = [
        { field: "skill", headerName: "Skill", width: 80, editable: false },
        {
            field: "proficiency",
            headerName: "Proficiency",
            renderCell: renderProgress,
            type: "number",
            width: 120,
        },
    ];
    return (
        <Box
            flexGrow={1}
            display={"flex"}
            pt={1.25}
            width={"100%"}
            sx={{
                "& .MuiDataGrid-toolbarContainer": {
                    backgroundColor:
                        selectedValue === "JavaScript" ? "rgb(232, 200, 37)"
                            : selectedValue === "CSS" ? "rgb(0, 126, 253)"
                                : selectedValue === "Database" ? "rgb(1, 236, 100)"
                                    : "rgb(149, 0, 174)",
                    color: "#FFF",
                    width: "95%",
                    margin: "auto",
                    mt: 1,
                    borderRadius: "5px",
                    padding: "5px",
                    "& .MuiButton-root": {
                        color: theme.palette.secondary.text,
                    },
                },
            }}
        >
            <MuiDataGrid
                rows={
                    selectedValue === "JavaScript"
                        ? dataGridRowsJS
                        : selectedValue === "CSS"
                            ? dataGridRowsCSS
                            : selectedValue === "Database"
                                ? dataGridRowsDatabase
                                : dataGridRowsGithub
                }
                columns={columns}
                rowCount={5}
                sx={{
                    borderColor: theme.palette.background.alt,
                    "& .MuiDataGrid-cell": {
                        borderColor: theme.palette.background.alt,
                    },
                    "& .MuiDataGrid-columnHeaderTitleContainer > div > span > input": {
                        backgroundColor: theme.palette.background.alt,
                        transition: "background-color 0.3s ease-in-out"
                    },
                    "& .MuiDataGrid-columnHeaderTitleContainer > div > span > svg": {
                        backgroundColor: theme.palette.background.alt,
                        transition: "background-color 0.3s ease-in-out"
                    },
                    "& .Mui-selected > div > span > input": {
                        backgroundColor:
                            selectedValue === "JavaScript" ? "rgb(232, 200, 37)"
                                : selectedValue === "CSS" ? "rgb(0, 126, 253)"
                                    : selectedValue === "Database" ? "rgb(1, 236, 100)"
                                        : "rgb(149, 0, 174)",
                        transition: "background-color 0.3s ease-in-out",
                    },
                    "& .Mui-selected > div > span > svg": {
                        backgroundColor:
                            selectedValue === "JavaScript" ? "rgb(232, 200, 37)"
                                : selectedValue === "CSS" ? "rgb(0, 126, 253)"
                                    : selectedValue === "Database" ? "rgb(1, 236, 100)"
                                        : "rgb(149, 0, 174)",
                        transition: "background-color 0.3s ease-in-out",
                    },
                }}
                style={{
                    backgroundColor: theme.palette.background.paper,
                    height: "365px",
                    borderColor: "transparent",
                    borderRadius: "5px",
                }}
                slots={{ toolbar: GridToolbar }}
                checkboxSelection
                disableSelectionOnClick
                pagination
            />
        </Box>
    );
};

export default DataGrid;
