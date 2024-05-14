"use client"
import React from 'react';
import { Chart } from "react-google-charts";


export const data = [
    ["Produto", "Quantidade"],
    ["teclados", 20],
    ["Mouses", 15],
    ["brinquedos", 30],
    ["Canetas", 25],
    ["Garrafas", 10],
];

export const options = {
    title: "Quantidade de Produtos",
};

export const data2 = [
    ["Lista de entrada de item", "local", "Em falta?"],
    ["teclados", "B12", false],
    ["Mouses", "C102", true],
    ["brinquedos", "A25", false],
    ["Canetas", "B17", false],
    ["Garrafas", "F29", true],
];

export const options2 = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
    pageSize: 10,
};

export const data3 = [
    ["Produtos", "Peso", { role: "style" }],
    ["teclados", 20.0, "#34b3e2"],
    ["Mouses", 10.49, "#34b3e2"],
    ["brinquedos", 19.3, "#34b3e2"],
    ["Canetas", 21.45, "#34b3e2"],
    ["Garrafas", 15.0, "#34b3e2"],
];

export const GraphicsCharts = () => {
    return (
        <div>
            <div className='flex'>
                <div >
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"300px"}
                    />
                </div>
                <div>
                    <Chart chartType="ColumnChart" width="600px" height="300px" data={data3}   />
                </div>
            </div>

            <div>
                <Chart
                    chartType="Table"
                    width={"100%"}
                    height="400px"
                    data={data2}
                    options={options2}
                />
            </div>

        </div>
    )
}

export default GraphicsCharts;
