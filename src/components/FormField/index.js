import React from "react";

function FormField({ label, type, name, value, onChange, maxlength }) {
  return (
    <div>
      <label>
        {label}: 
        <input required
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          maxlength={maxlength}
        />
      </label>
    </div>
  )
}


export default FormField;