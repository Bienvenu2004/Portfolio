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

    



    return (
        <Suspense fallback={<Loading/>}>
            {selectedChartValue === "Bar" && selectedValue === "JavaScript" && (
                <BarChart
                    data={[
                        {
                            skills: "JS",
                            JS: 75,
                            color: "hsl(40, 70%, 50%)",
                        },
                        {
                            skills: "NodeJS",
                            NodeJS: 70,
                            color: "hsl(134, 70%, 50%)",
                        },
                        {
                            skills: "ReactJS",
                            ReactJS: 70,
                            color: "hsl(216, 70%, 50%)",
                        },
                        {
                            skills: "NextJS",
                            NextJS: 70,
                            color: "hsl(216, 70%, 50%)",
                        },
                        {
                            skills: "ExpressJS",
                            ExpressJS: 65,
                            color: "hsl(262, 70%, 50%)",
                        },
                    ]}
                    keys={["JS", "NodeJS", "ReactJS", "NextJS", "ExpressJS"]}
                />
            )}
            {selectedChartValue === "Bar" && selectedValue === "CSS" && (
                <BarChart
                    data={[
                        {
                            skills: "CSS",
                            CSS: 75,
                            color: "hsl(40, 70%, 50%)",
                        },
                        {
                            skills: "Antd",
                            Antd: 70,
                            color: "hsl(134, 70%, 50%)",
                        },
                        {
                            skills: "Bootstrap",
                            Bootstrap: 70,
                            color: "hsl(216, 70%, 50%)",
                        },
                        {
                            skills: "MUI5",
                            MUI5: 70,
                            color: "hsl(216, 70%, 50%)",
                        },
                        {
                            skills: "PrimeReact",
                            PrimeReact: 65,
                            color: "hsl(262, 70%, 50%)",
                        },
                    ]}
                    keys={["CSS", "Antd", "Bootstrap", "MUI5", "PrimeReact"]}
                />
            )}
            {selectedChartValue === "Bar" && selectedValue === "Database" && (
                <BarChart
                    data={[
                        {
                            skills: "MongoDB",
                            MongoDB: 75,
                            color: "hsl(134, 70%, 50%)",
                        },
                        {
                            skills: "AWS",
                            AWS: 70,
                            color: "hsl(40, 70%, 50%)",
                        },
                        {
                            skills: "Firebase",
                            Firebase: 70,
                            color: "hsl(216, 70%, 50%)",
                        },
                        {
                            skills: "MySQL",
                            MySQL: 79,
                            color: "hsl(216, 70%, 50%)",
                        },
                        {
                            skills: "PostgreSQL",
                            PostgreSQL: 78,
                            color: "hsl(262, 70%, 50%)",
                        },
                    ]}
                    keys={["MongoDB", "AWS", "Firebase", "MySQL", "PostgreSQL"]}
                />
            )}
            {selectedChartValue === "Bar" &&
                selectedValue === "Git & GitHub" && (
                    <BarChart
                        data={[
                            {
                                skills: "Git & GitHub",
                                Git: 75,
                                color: "hsl(134, 70%, 50%)",
                            },
                            {
                                skills: "GitHub",
                                GitHub: 85,
                                color: "hsl(40, 70%, 50%)",
                            },
                            {
                                skills: "Vercel",
                                Vercel: 70,
                                color: "hsl(216, 70%, 50%)",
                            },
                        ]}
                        keys={["Git", "GitHub", "Vercel"]}
                    />
                )}
        </Suspense>
    );
};

export default BarCharts;
