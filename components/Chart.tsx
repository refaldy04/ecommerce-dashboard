"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartComponent {
  title: string;
  data: any[];
  dataKey: string;
  grid?: boolean;
}

const Chart: React.FC<ChartComponent> = ({ title, data, dataKey, grid }) => {
  console.log({ grid });
  return (
    <div className="p-6 my-6 shadow-lg">
      <h3 className="mb-5 text-xl font-semibold">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
