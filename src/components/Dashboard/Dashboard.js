import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const chartData = [
    {
      month: "Mar",
      investment: 100000,
      sell: 16041,
      revenue: 30401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 8236,
      revenue: 74500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 180226,
      revenue: 207010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 15529,
      revenue: 140405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 19101,
      revenue: 250900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 262170,
      revenue: 461000,
    },
  ];
  return (
    <div>
      <ResponsiveContainer width={700} height="80%">
        <AreaChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
          <ReferenceLine
            y={4000}
            label="Max"
            stroke="red"
            strokeDasharray="3 3"
          />
          <Area
            type="monotone"
            dataKey="month"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mx-auto">
        <LineChart
          width={530}
          height={250}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="investment" stroke="#ff4000" />
          <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
          <Line type="monotone" dataKey="revenue" stroke="	#0000ff" />
        </LineChart>
      </div>
    </div>
  );
};

export default Dashboard;
