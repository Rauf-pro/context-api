import React from "react";
import { useForm } from "../../context/FormContext";

const Form = () => {
    const {formData, updateFormData} = useForm();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        updateFormData(name, value);

    }
  return (
    <div>
      <h2>Form</h2>
      <form className="d-flex flex-column gap-3">
        <label>
          Username: <br />
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label>
        <label>
          Email: <br />
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
      </form>
    </div>
  );
};

export default Form;
