import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="md:mx-28 mx-8 my-10 ">
      <div className="grid lg:grid-cols-2  gap-y-16">
        <div>
          <h3 className="text-xl uppercase font-bold  text-center mb-8 text-indigo-500">
            Month Wise Sell
          </h3>
          <LineChart
            width={500}
            height={300}
            className="mx-auto"
            data={data}
            margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </div>
        <div>
          <h3 className="text-xl uppercase font-bold  text-center mb-8 text-indigo-500">
            Investment vs revenue
          </h3>
          <ResponsiveContainer width={500} height={300} className="mx-auto">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Area
                type="monotone"
                dataKey="investment"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-xl uppercase font-bold  text-center mb-8 text-indigo-500">
            Investment vs revenue
          </h3>
          <ResponsiveContainer width={500} height={300} className="mx-auto">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" stackId="a" fill="#8884d8" />
              <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-xl uppercase font-bold  text-center mb-8 text-indigo-500">
            Investment vs revenue
          </h3>
          <ResponsiveContainer width={500} height={300} className="mx-auto">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                dataKey="investment"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
              />
              <Pie
                data={data}
                dataKey="revenue"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
