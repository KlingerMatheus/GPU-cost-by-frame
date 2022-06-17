import { useState, memo, useEffect } from "react";
import { Chart } from "react-google-charts";

const ChartColumn = (props: { gpus: any }) => {
  const [gpus, setGPUs] = useState<any>([]);

  useEffect(() => {
    insertItems(props.gpus);
  }, [props.gpus]);

  const insertItems = (items: any) => {
    setGPUs([["Model", "", { role: "style" }]]);

    return items.forEach((item: any) => {
      setGPUs((prevState: any) => {
        return [
          ...prevState,
          [
            item.model,
            item.costPerFrame,
            item.brand === "AMD" ? "red" : "green",
          ],
        ];
      });
    });
  };

  return (
    <>
      <div className="section-group section-chart">
        <Chart
          options={{
            hAxis: { title: "GPUs Models" },
            vAxis: { title: "Cost Per Frame" },
            loader: "Loading chart...",
            colors: ["transparent"],
            title: "Cost Per Frame Comparison",
          }}
          chartType="ColumnChart"
          data={gpus}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default memo(ChartColumn);
