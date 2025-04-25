"use client";

import React from "react";

const AdminButton = ({ type = "button", onClick = () => null, label }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
    >
      <span className="text-center w-full">{label}</span>
      <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
        {label}
      </div>
    </button>
  );
};

export default AdminButton;
