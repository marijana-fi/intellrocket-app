import React from "react";
import { forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";

const InputField = forwardRef((props, ref) => {
  const { type, label, id, customClass, name, errors, textarea, rows } = props;

  return (
    <div className={`${customClass} input-wrapper`}>
      {textarea ? (
        <textarea ref={ref} name={name} id={id} cols="30" rows={rows} placeholder=" "></textarea>
      ) : (
        <input ref={ref} type={type} id={id} name={name} placeholder=" " />
      )}
      {errors ? (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <small className="error-text">{message}</small>}
        />
      ) : null}

      <label htmlFor={id}>{label}</label>
    </div>
  );
});

export default InputField;
