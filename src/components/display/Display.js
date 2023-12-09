import React from "react";
import { useForm } from "../../context/FormContext";
import { useColor } from "../../context/colorContext";
const Display = () => {
  const { formData } = useForm();
  const {color, toggleColor} = useColor();
  return (
    <div>
      <h2>Display Data</h2>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <button onClick={toggleColor} style={{color: color}} >Change Color</button>
    </div>
  );
};

export default Display;
