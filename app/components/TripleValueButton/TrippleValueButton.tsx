import React from "react";

const TripleValueButton = () => {
  return (
    <button className="py-5 px-4 rounded-[16px] flex gap-2 items-center background-linear-orange border border-alternative-gray button-hover transition cursor-pointer">
      <div className="px-2 py-1 rounded-2xl text-black bg-white text-xs font-bold">
        200+
      </div>
      <div className="font-bold">Triple the value of the first purchase!</div>
    </button>
  );
};

export default TripleValueButton;
