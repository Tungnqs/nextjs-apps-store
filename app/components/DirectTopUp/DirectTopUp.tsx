import React from "react";
import TripleValueButton from "../TripleValueButton/TrippleValueButton";
import { GemIcon, GlobeIcon } from "@/public/icon/icons";

const DirectTopUp = () => {
  const topUpItemList: IDirectTopUpItemCardProps[] = [
    {
      imgSrc: "/images/gem1.png",
      title: "Small Pack",
    },
    {
      imgSrc: "/images/gem2.png",
      title: "Medium Pack",
    },
    {
      imgSrc: "/images/gem3.png",
      title: "Giant Pack",
    },
    {
      imgSrc: "/images/gem4.png",
      title: "Enormous Pack",
    },
  ];
  return (
    <div className="pb-[124px] flex flex-col gap-9">
      <div className="h-[64px] text-[48px] flex justify-center items-center font-bold">
        Direct Top-up
      </div>
      <div className="flex flex-col gap-6 items-center px-[64px]">
        <TripleValueButton />
        <div className="flex justify-between w-full">
          {topUpItemList.map((item, index) => (
            <DirectTopUpItemCard
              key={index}
              imgSrc={item.imgSrc}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface IDirectTopUpItemCardProps {
  imgSrc: string;
  title: string;
}

const DirectTopUpItemCard = ({ imgSrc, title }: IDirectTopUpItemCardProps) => {
  return (
    <div className="pb-[21px] px-4 flex flex-col gap-2 rounded-2xl w-[24%] bg-dark-red-1 border border-alternative-gray">
      <img className="aspect-square" src={imgSrc} alt="top up icon" />
      <div className="text-center font-bold">{title}</div>
      <div className="flex justify-between items-center bg-red-gray px-3 py-[10px] font-bold">
        <div className="flex items-center gap-[10px]">
          <GemIcon />
          <div>Gem</div>
        </div>
        <div>20</div>
      </div>
      <div className="flex gap-2 font-semibold">
        <button className="flex-1 h-11 flex justify-center items-center bg-primary-orange cursor-pointer">
          $9.99
        </button>
        <button className="size-11 flex justify-center items-center bg-primary-orange cursor-pointer">
          <GlobeIcon />
        </button>
      </div>
    </div>
  );
};

export default DirectTopUp;
