import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], 
];

export const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: true,
  colors:['rgb(53,138,148)','rgb(37,11,165)','rgb(40,34,70)','#f39f2a','#188310']
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="270px"
      data={data}
      options={options}
    />
  );
}
