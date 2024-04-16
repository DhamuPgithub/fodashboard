import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function DataChartComponent() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: documentStyle.getPropertyValue("--blue-500"), // Set custom bar color
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: documentStyle.getPropertyValue("--blue-200"), // Set custom bar color
          borderColor: documentStyle.getPropertyValue("--blue-200"),
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.9,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 600,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <>
      <div style={{ marginTop: 20, backgroundColor: "white" }}>
        <Chart type="bar" data={chartData} options={chartOptions} />
      </div>
    </>
  );
}
