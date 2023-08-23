import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Chart } from "react-google-charts";

import "./bigChartBox.scss";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];
const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Top Song View</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
        <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />

        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
