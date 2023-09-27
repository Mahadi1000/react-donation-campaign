/* eslint-disable react/prop-types */

import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Statistics({ totalPrices }) {
  const totalDonation = 4; // Replace with your total donation value

  const data = [
    { name: "Total Donation", value: totalDonation },
    { name: "Total Prices", value: totalPrices },
  ];

  // Calculate the percentage of total prices relative to total donations
  const percentage = (totalPrices / totalDonation) * 100;

  return (
    <div className="mt-24 w-1/4 mx-auto">
      <h2>Donations Statistics</h2>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`#${index !== 0 ? "82ca9d" : "8884d8"}`}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <p>
        Total Prices as a Percentage of Total Donation: {percentage.toFixed(2)}%
      </p>
    </div>
  );
}
