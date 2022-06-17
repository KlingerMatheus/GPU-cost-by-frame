import { useState } from "react";
import "./App.css";
import ChartColumn from "./components/ChartColumn";
import FormInsertGPU from "./components/FormInsertGPU";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  type GPU_Info = {
    id: number;
    model: string;
    brand: string;
    fps: number;
    price: number;
    isVisible: boolean;
  };

  const [gpus, setGPUs] = useState<GPU_Info[]>([]);

  function handleInsertionGPUs(newItem: GPU_Info) {
    return setGPUs((prevState) => [...prevState, newItem]);
  }

  function removeGPU(id: number) {
    setGPUs((prevGPUs) =>
      prevGPUs.filter((gpu) => {
        if (gpu.id !== id) return gpu;
      })
    );
  }

  function getCostPerFrame(price: number, fps: number) {
    return (price / fps).toFixed(2);
  }

  function handleChartInsertion() {
    return gpus.map((gpu) => {
      return {
        brand: gpu.brand,
        model: gpu.model,
        costPerFrame: Number(getCostPerFrame(gpu.price, gpu.fps)),
      };
    });
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <FormInsertGPU
          handleInsertionGPUs={(newItem: GPU_Info) =>
            handleInsertionGPUs(newItem)
          }
        />
        <List gpus={gpus} removeGPU={(id: number) => removeGPU(id)} />
        <ChartColumn gpus={handleChartInsertion()} />
      </div>
    </div>
  );
}

export default App;
