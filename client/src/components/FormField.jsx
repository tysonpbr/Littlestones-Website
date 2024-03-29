import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
}) => (
  <div className="w-full">
    <div className="w-full flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="w-full block text-sm font-medium text-gray-900 font-sans"
      >
        {labelName}
      </label>
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-100 border border-none text-gray-900 text-sm outline-none block w-full p-3 font-sans"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;