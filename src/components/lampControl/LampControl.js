import React from "react";
import { useLamp } from "../../context/LampContext";

const LampControl = () => {
  const { lampState, toggleLamp, changeColor } = useLamp();

  const checkChange = () => {
    changeColor(!lampState.isOn ? "red" : "green");
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-auto ">
      <h2>Lamp Effect Control</h2>
      <p>Taskın şərti: Context Api istifadə edilməsi. sol button kilid və açar rolunu oynayır. Kilid açılmadan rəng dəyişmir.</p>
      <p>Power: {lampState.isOn ? "On" : "Off"}</p>
      <p>Color: {lampState.color}</p>
      <div className="d-flex  gap-3 pb-5">
        <button className="p-2 border-0 bg-primary text-white  " onClick={toggleLamp}>Lock and Unlock</button>
        <button className="p-2 border-0 bg-info text-white " onClick={checkChange}>Change color</button>
      </div>

      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: lampState.color,
          borderRadius: "50%",
          opacity: lampState.brightness,
        }}
      ></div>
    </div>
  );
};

export default LampControl;
