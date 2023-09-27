import React, { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";

const Statistics = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy the previous chart instance if it exists
      chartRef.current.chartInstance.destroy();
    }
  }, []);

  const data = {
    // Your chart data here
  };

  const options = {
    // Your chart options here
  };

  return (
    <div className="mt-20">
      <h1 className="text-3xl font-semibold text-center mb-4">
        Donation Statistics
      </h1>
      <div className="w-80 mx-auto">
        <Pie ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default Statistics;
