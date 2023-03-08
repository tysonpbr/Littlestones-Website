import React from 'react';

const FormFieldLarge = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900 font-sans"
      >
        {labelName}
      </label>
    </div>
    <textarea
      rows="5"
      cols="60"
      type={type}
      id={name}
      name={name}
      className="bg-gray-100 border border-none text-gray-900 text-sm outline-none block w-full p-3 font-sans"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    ></textarea>
  </div>
);

export default FormFieldLarge;