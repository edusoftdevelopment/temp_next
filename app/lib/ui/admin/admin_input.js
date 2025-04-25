"use client";
import React from "react";

const AdminInput = ({
  defaultValue = "",
  onChange = () => null,
  name,
  label,
  subText = "",
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-gray-800 font-semibold text-sm"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          onChange={onChange}
          defaultValue={defaultValue}
          type="text"
          name={name}
          className="w-full block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
        />
      </div>

      {subText && (
        <label className="pt-1 block text-gray-500 text-sm">
          Some Description
        </label>
      )}
    </div>
  );
};

export default AdminInput;
