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
    <div
      style={{
        backgroundImage: `url("/images/cold.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="direct-top-up"
      className="pb-[124px] max-lg:pb-[60px] flex justify-center"
    >
      <div className="flex flex-col gap-9 max-w-1280 w-full">
        <div className="h-[64px] text-[48px] flex justify-center items-center font-bold">
          Direct Top-up
        </div>
        <div className="flex flex-col gap-6 items-center px-[64px] max-lg:px-[40px]">
          <TripleValueButton />
          <div className="flex justify-between w-full max-md:flex-col max-md:justify-start max-md:gap-5 max-md:items-center">
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
    </div>
  );
};

interface IDirectTopUpItemCardProps {
  imgSrc: string;
  title: string;
}

const DirectTopUpItemCard = ({ imgSrc, title }: IDirectTopUpItemCardProps) => {
  return (
    <div className="pb-[21px] px-4 flex flex-col gap-2 rounded-2xl w-[24%] max-md:w-[70%] max-sm:w-full bg-dark-red-1 border border-alternative-gray">
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
        <button className="flex-1 h-11 flex justify-center items-center bg-primary-orange hover:bg-primary-orange-hover cursor-pointer">
          $9.99
        </button>
        <button className="size-11 flex justify-center items-center bg-primary-orange hover:bg-primary-orange-hover cursor-pointer">
          <GlobeIcon />
        </button>
      </div>
    </div>
  );
};

export default DirectTopUp;
