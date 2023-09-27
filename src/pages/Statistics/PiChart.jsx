import { PieChart } from "@mui/x-charts/PieChart";
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
  height={800}
/>;
