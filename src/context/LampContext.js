import { createContext, useContext, useState } from "react";

const LampContext = createContext();

export const LampProvider = ({ children }) => {
  const [lampState, setLampState] = useState({
    isOn: false,
    color: "red",
    brightness: 50,
  });

  const toggleLamp = () => {
    setLampState((prevState) => ({ ...prevState, isOn: !prevState.isOn }));
  };

  const changeColor = (newColor) => {
    setLampState((prevState) => ({ ...prevState,  color: newColor }));
  };



  return (
    <LampContext.Provider
      value={{ lampState, toggleLamp, changeColor }}
    >
      {children}
    </LampContext.Provider>
  );
};

export const useLamp = () => {
  return useContext(LampContext);
};
