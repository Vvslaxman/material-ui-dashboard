import React from "react";
import { Chart } from "react-google-charts";
import { useThemeContext } from '../pages/ThemeContext';

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
  ["2018", 1170, 460, 250],
  ["2019", 660, 1120, 300],
  ["2020", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
  colors:["rgb(53,138,148)","rgb(37,11,165)","#188310"]
};

export default function BarChart() {
  const { isDarkMode } = useThemeContext();
  
  return (
    <Chart
    style={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }}
      chartType="Bar"
      width="100%"
      height="350px"
      data={data}
      options={options}
      loader={<div>Loading Chart...</div>}
      rootProps={{ 'data-testid': '2' }}
      
    />
  );
}
