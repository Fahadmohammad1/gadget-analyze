import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const chartData = [
    {
      month: "Mar",
      investment: 100000,
      sell: 2041,
      revenue: 20401,
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
      sell: 10226,
      revenue: 107010,
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
      sell: 42170,
      revenue: 261000,
    },
  ];
  return (
    <div>
      <BarChart width={730} height={250} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
      <LineChart
        width={730}
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
  );
};

export default Dashboard;
