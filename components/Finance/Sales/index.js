import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "march",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "may",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "june",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "july",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const index = () => {
  return (
    <div className="flex flex-col  w-full h-auto">
      <div className="mt-5">
        <p className=" text-[19px] font-semibold mx-5 ">
          Sales
          <br /> Statistics
        </p>
      </div>
      <div className="mb-5">
        <nav className="flex sm:justify-start space-x-4">
          {[["Day"], ["week"], ["Months"]].map(([title, url, index]) => (
            <a
              key={index}
              className="rounded-lg border-green-950  ml-5  text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
            >
              {title}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-5 mb-10">
        <p>
          Sales
          <br />
          <span>$20000000000000</span>
        </p>
      </div>
      <div className="  ">
        <ResponsiveContainer aspect={2}>
          <AreaChart
            width={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis
              dataKey="name"
              axisLine={{ stroke: "white" }}
              tick={{ fontSize: 9 }}
            />
            <YAxis axisLine={{ stroke: "white" }} tick={{ fontSize: 9 }} />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="green" fill="#74C27B" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default index;
