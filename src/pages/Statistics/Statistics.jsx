import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  const Donation = JSON.parse(localStorage.getItem("Donated"));
  let number = (Donation.length / 12) * 100;
  number = number.toFixed(2);
  let remaining = 100 - number;
  remaining = remaining.toFixed(2);
  return (
    <>
      <div className="md:flex hidden justify-center items-center w-full">
        <PieChart
          colors={["red", "blue"]}
          series={[
            {
              arcLabel: (item) => `${item.label} (${item.value}%)`,
              arcLabelMinAngle: 20,
              data: [
                { id: 0, value: number, label: "Your Donation" },
                { id: 1, value: remaining, label: "Total Donation" },
              ],
              outerRadius: 200,
            },
          ]}
          width={600}
          height={600}
        />
      </div>
      <div className="flex md:hidden justify-center items-center w-full">
        <PieChart
          colors={["red", "blue"]}
          series={[
            {
              arcLabel: (item) => `${item.label} (${item.value}%)`,
              arcLabelMinAngle: 20,
              data: [
                { id: 0, value: number, label: "Your Donation" },
                { id: 1, value: remaining, label: "Total Donation" },
              ],
              outerRadius: 150,
            },
          ]}
          width={400}
          height={400}
        />
      </div>
    </>
  );
}
