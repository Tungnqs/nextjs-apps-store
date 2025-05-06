import React from "react";

const PromotionCode = () => {
  return (
    <div className="pb-[124px] px-[64px]">
      <div className="background-linear-blue rounded-[36px] border border-alternative-gray p-8 flex gap-8 font-bold">
        <div className="flex flex-col gap-[26px] flex-1">
          <div className="text-xl">Redeem code</div>
          <div className="text-[40px]">
            Grant discounts and in-game bonuses to your players
          </div>
          <div className="font-semibold w-1/2 flex flex-col gap-[14px]">
            <input
              className="text-[#727272] px-3 py-[10px] bg-[#F6F6F69E] w-full outline-none"
              placeholder="Enter promo code"
              type="text"
            />
            <button className="w-full h-11 bg-primary-orange hover:bg-primary-orange-hover flex justify-center items-center cursor-pointer">Redeem Code</button>
          </div>
        </div>
        <img src="/images/presents.png" alt="present image" />
      </div>
    </div>
  );
};

export default PromotionCode;
