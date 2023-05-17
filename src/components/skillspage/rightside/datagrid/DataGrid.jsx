import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid as MuiDataGrid, GridToolbar } from "@mui/x-data-grid";
import { SidebarContext } from "@/components/contexts/SidebarContext";
const DataGrid = (props) => {
    const { javascript, css, database, github, selectedValue } = props;
    const [dataGridRowsJS, setDataGridRowsJS] = React.useState([]);
    const [dataGridRowsCSS, setDataGridRowsCSS] = React.useState([]);
    const [dataGridRowsDatabase, setDataGridRowsDatabase] = React.useState([]);
    const [dataGridRowsGithub, setDataGridRowsGithub] = React.useState([]);

    const theme = useTheme();

    React.useEffect(() => {
        if (selectedValue === "JavaScript") {
            javascript.map((item) => {
                setDataGridRowsJS((prev) => [
                    ...prev,
                    {
                        id: item.label,
                        skill: item.label,
                        proficiency: item.value,
                        dateCreated: new Date("2021-10-10"),
                    },
                ]);
            });
            setDataGridRowsCSS([]);
            setDataGridRowsDatabase([]);
            setDataGridRowsGithub([]);
        }
        if (selectedValue === "CSS") {
            css.map((item) => {
                setDataGridRowsCSS((prev) => [
                    ...prev,
                    {
                        id: item.label,
                        skill: item.label,
                        proficiency: item.value,
                        dateCreated: new Date("2021-10-10"),
                    },
                ]);
            });
            setDataGridRowsDatabase([]);
            setDataGridRowsGithub([]);
            setDataGridRowsJS([]);
        }
        if (selectedValue === "Database") {
            database.map((item) => {
                setDataGridRowsDatabase((prev) => [
                    ...prev,
                    {
                        id: item.label,
                        skill: item.label,
                        proficiency: item.value,
                        dateCreated: new Date("2021-10-10"),
                    },
                ]);
            });
            setDataGridRowsCSS([]);
            setDataGridRowsGithub([]);
            setDataGridRowsJS([]);
        }
        if (selectedValue === "Git & GitHub") {
            github.map((item) => {
                setDataGridRowsGithub((prev) => [
                    ...prev,
                    {
                        id: item.label,
                        skill: item.label,
                        proficiency: item.value,
                        dateCreated: new Date("2021-10-10"),
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
            type: "number",
            editable: false,
        },
        {
            field: "dateCreated",
            headerName: "Date Created",
            type: "date",
            width: 100,
            editable: false,
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
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.secondary.text,
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
                }}
                style={{
                    backgroundColor: theme.palette.background.paper,
                    height: "365px",
                    borderColor: "transparent",
                    borderRadius: "5px",
                }}
                slots={{ toolbar: GridToolbar }}
            />
        </Box>
    );
};

export default DataGrid;
