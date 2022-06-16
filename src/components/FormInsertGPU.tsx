import { useState } from "react";
import OptionGPUModel from "./OptionGPUModel";
import { listAMD, listNVIDIA } from "../allGPUs";

const FormInsertGPU = (props: {
  handleInsertionGPUs: CallableFunction;
  removeGPU: CallableFunction;
}) => {
  const [brand, setBrand] = useState<string>("default");
  const [model, setModel] = useState<string>("default");
  const [fps, setFps] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  function renderGPUModels() {
    if (brand === "NVidia") {
      return (
        <>
          {listNVIDIA.map((model) => {
            return <OptionGPUModel name={model.name} key={model.name} />;
          })}
        </>
      );
    } else if (brand === "AMD") {
      return (
        <>
          {listAMD.map((model) => {
            return <OptionGPUModel name={model.name} key={model.name} />;
          })}
        </>
      );
    }
  }

  function validateInsertion() {
    if (brand === "default" || model === "default" || fps === 0 || price === 0)
      return false;
    return true;
  }

  function clearInputs() {
    setBrand("default");
    setModel("default");
    setFps(0);
    setPrice(0);
  }

  function insertGPU() {
    if (!validateInsertion()) return alert("Complete the fields correctly!");

    props.handleInsertionGPUs({
      id: Math.random(),
      brand: brand,
      model: model,
      fps: fps,
      price: price,
    });
    clearInputs();
  }

  return (
    <>
      <div className="section-container">
        <div className="section-group">
          <p className="section-title">Insert your GPU</p>
          <div className="input-group">
            <label htmlFor="gpu-brand">Brand</label>
            <select value={brand} onChange={(e) => setBrand(e.target.value)}>
              <option value="default" disabled>
                Choose the brand
              </option>
              <option value="NVidia">NVIDIA</option>
              <option value="AMD">AMD</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="gpu-brand">Model</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              disabled={brand === "default" ? true : false}
            >
              <option value="default">Choose your option</option>
              {renderGPUModels()}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="gpu-fps">FPS</label>
            <input
              type="number"
              placeholder="Type here..."
              id="gpu-fps"
              value={fps}
              onChange={(e) => setFps(Number(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label htmlFor="gpu-price">Price</label>
            <input
              type="number"
              placeholder="Type here..."
              id="gpu-price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div className="btn-group">
            <button onClick={insertGPU} className="btn-add">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormInsertGPU;
