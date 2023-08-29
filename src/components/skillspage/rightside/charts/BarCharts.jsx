import React, { Suspense } from "react";
import BarChart from "@/components/charts/BarChart";
import Loading from "@/components/loading/Loading";
const BarCharts = ({
    selectedValue,
    selectedChartValue,
    javascript,
    css,
    database,
    github,
}) => {

    let javascriptData;
    let cssData;
    let databaseData;
    let githubData;

    let javascriptKeys
    let cssKeys
    let databaseKeys
    let githubKeys

    let dataTemplate = (skills) =>{
        let data = [];
        skills.map((skill) => {
            data.push({
                skills: skill.label,
                [skill.label]: skill.value,
                color: skill.color,
            });
        });
        return data;
    }
    let keysTemplate = (skills) =>{
        let keys = [];
        skills.map((skill) => {
            keys.push(skill.label);
        });
        return keys;
    }

    if(selectedValue === "JavaScript"){
        javascriptData = dataTemplate(javascript);
        javascriptKeys = keysTemplate(javascript);
    }
    if(selectedValue === "CSS"){
        cssData = dataTemplate(css);
        cssKeys = keysTemplate(css);
    }
    if(selectedValue === "Database"){
        databaseData = dataTemplate(database);
        databaseKeys = keysTemplate(database);
    }
    if(selectedValue === "Git & GitHub"){
        githubData = dataTemplate(github);
        githubKeys = keysTemplate(github);
    }



    return (
        <>
            {selectedChartValue === "Bar" && selectedValue === "JavaScript" && (
                <BarChart
                    data={javascriptData}
                    keys={javascriptKeys}
                />
            )}
            {selectedChartValue === "Bar" && selectedValue === "CSS" && (
                <BarChart
                    data={cssData}
                    keys={cssKeys}
                />
            )}
            {selectedChartValue === "Bar" && selectedValue === "Database" && (
                <BarChart
                    data={databaseData}
                    keys={databaseKeys}
                />
            )}
            {selectedChartValue === "Bar" &&
                selectedValue === "Git & GitHub" && (
                    <BarChart
                        data={githubData}
                        keys={githubKeys}
                    />
                )}
        </>
    );
};

export default BarCharts;
