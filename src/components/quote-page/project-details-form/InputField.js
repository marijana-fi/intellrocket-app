import React, { useState } from "react";

function InputField({ type, label, id, customClass, isRequired }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${customClass} input-wrapper`}>
      <input
        type={type}
        id={id}
        required={isRequired}
        placeholder=" "
        onChange={handleChange}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default InputField;
