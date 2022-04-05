import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
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

  console.log(data);

  return (
    <div className="md:mx-28 mx-8 my-10 ">
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-xl uppercase font-bold  text-center mb-8 text-indigo-500">
            Month Wise Sell
          </h3>
          <LineChart
            width={400}
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
          </LineChart>
        </div>
        <div>
          <h3 className="text-xl uppercase font-bold  text-center mb-8 text-indigo-500">
            Investment vs revenue
          </h3>
          <ResponsiveContainer width={400} height={300} className="mx-auto">
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
      </div>
    </div>
  );
};

export default Dashboard;
