import { ShieldIcon } from "@/public/icon/icons";
import React from "react";

const Overview = () => {
  return (
    <div className="px-[64px] py-[124px] flex flex-col justify-center gap-7 min-h-[608px] text-light-gray relative">
      <div className="text-[64px] font-bold">Welcome to Apps Store</div>
      <div className="p-8 flex flex-col gap-3 bg-dark-red rounded-[36px] border border-alternative-gray">
        <img
          src="/images/spell.png"
          alt="Logo"
          className="h-[376px] w-auto absolute rotate-[-12.97] top-[170px] right-[200px]"
        />
        <div className="text-[48px] font-bold">Get +20% more!</div>
        <div className="text-xl">
          Offer extra discount to players on Web Shop purchases.
        </div>
        <div className="flex gap-2 items-center">
          <LabelWithIcon title="Official Store" />
          <LabelWithIcon title="Secure Payments" />
        </div>
        <button className="bg-primary-orange hover:bg-primary-orange-hover rounded-lg h-[44px] w-[269px] font-semibold text-white cursor-pointer transition button-hover">
          VIEW OFFERS
        </button>
      </div>
    </div>
  );
};

const LabelWithIcon = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-1 items-center">
      <ShieldIcon /> <div className="text-xl font-semibold">{title}</div>
    </div>
  );
};

export default Overview;
