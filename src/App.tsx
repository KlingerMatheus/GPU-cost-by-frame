import { useState } from "react";
import "./App.css";
import FormInsertGPU from "./components/FormInsertGPU";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  type GPU_Info = {
    id: number;
    name: string;
    brand: string;
    fps: number;
    price: number;
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

  return (
    <div className="App">
      <Header />
      <div className="container">
        <FormInsertGPU
          handleInsertionGPUs={(newItem: GPU_Info) =>
            handleInsertionGPUs(newItem)
          }
          removeGPU={(id: number) => removeGPU(id)}
        />
        <List gpus={gpus} />
      </div>
    </div>
  );
}

export default App;
