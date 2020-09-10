import React, { useState } from "react";
import { forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";

const JobInputField = forwardRef((props, ref) => {
  const { type, label, id, customClass, name, errors, textarea, file } = props;

  const [fileName, setFileName] = useState("");

  const error = Object.keys(errors).length === 0 ? "" : "mb-5";
  const fileWrap = file ? "file-wrap" : null;

  return (
    <div className={`${fileWrap} input-wrapper label-visible ${error}`}>
      <label htmlFor={id} className={customClass}>
        {customClass === "upload" ? <span className="icon"></span> : null}
        {label} <span className="asterisk">*</span>
        {file ? <p className="file-name">{fileName}</p> : null}
        {file ? <small className="upload-type">Allowed Type(s): .pdf, .doc, .docx</small> : null}
      </label>

      {textarea ? (
        <textarea ref={ref} name={name} id={id} cols="30" rows="5"></textarea>
      ) : (
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          placeholder=" "
          accept={file ? ".pdf, .doc, .docx" : null}
          onChange={file ? (e) => setFileName(e.target.files[0].name) : null}
        />
      )}

      {errors ? (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <small className={file ? "error-text file-error" : "error-text"}>{message}</small>
          )}
        />
      ) : null}
    </div>
  );
});

export default JobInputField;
