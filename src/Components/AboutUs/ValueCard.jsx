import React from "react";

const ValueCard = ({ Icon, title, description }) => {
  return (
    <div className="flex justify-center px-4 py-8 gap-4 bg-white shadow-lg rounded-lg max-w-xs">
      <Icon size={48} className="text-indigo-700 mb-4" />
      <div className="flex flex-col w-full">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
