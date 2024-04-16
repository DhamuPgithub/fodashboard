import React from "react";
import { Doughnut } from "react-chartjs-2";

const SemiCircleDonutChart = ({ data, options }) => {
  return (
    <div>
      <Doughnut data={data} options={options} width={400} height={200} />
    </div>
  );
};

export default SemiCircleDonutChart;
