import React from "react";

const PromotionCode = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/rock.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pb-[124px] px-[64px] max-lg:pb-[60px] max-lg:px-10 flex justify-center"
    >
      <div className="background-linear-blue rounded-[36px] border border-alternative-gray p-8 flex gap-8 items-center font-bold max-w-1280 w-full">
        <div className="flex flex-col gap-[26px] flex-1">
          <div className="text-xl">Redeem code</div>
          <div className="text-[40px] max-md:text-3xl">
            Grant discounts and in-game bonuses to your players
          </div>
          <div className="font-semibold w-1/2 max-md:w-full flex flex-col gap-[14px]">
            <input
              className="text-[#727272] px-3 py-[10px] bg-[#F6F6F69E] w-full outline-none"
              placeholder="Enter promo code"
              type="text"
            />
            <button className="w-full h-11 bg-primary-orange hover:bg-primary-orange-hover flex justify-center items-center cursor-pointer">
              Redeem Code
            </button>
          </div>
        </div>
        <div className="w-[40%] max-md:hidden">
          <img src="/images/presents.png" alt="present image" />
        </div>
      </div>
    </div>
  );
};

export default PromotionCode;
