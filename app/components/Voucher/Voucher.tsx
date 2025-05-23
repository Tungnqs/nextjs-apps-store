import React from "react";
import TripleValueButton from "../TripleValueButton/TrippleValueButton";

const Voucher = () => {
  const voucherList: IVoucherItemCardProps[] = [
    {
      imgSrc: "/images/vng-game-sale.png",
      actualPrice: "$23",
      discountedPrice: "$12.44",
      description: "Using Apps Store coin to buy VNG with half price",
      title: "VNG Games Sales",
    },
    {
      imgSrc: "/images/pokemon-1.png",
      actualPrice: "$23",
      discountedPrice: "$12.44",
      description: "Receive Koraidon/Miraidon when buying by Apps Store",
      title: "Pokemon Scarlet/Violet",
    },
    {
      imgSrc: "/images/pokemon-2.png",
      actualPrice: "$23",
      discountedPrice: "$12.44",
      description: "Using Apps Store coin to buy VNG with half price",
      title: "Sleep Pokemon",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url("/images/rock.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="voucher"
      className="pb-[124px] max-lg:pb-[60px] flex justify-center"
    >
      <div className="flex flex-col gap-9 max-w-1280 w-full">
        <div className="h-[64px] text-[48px] flex justify-center items-center font-bold">
          Voucher
        </div>
        <div className="flex flex-col gap-6 items-center px-[64px] max-lg:px-[40px]">
          <TripleValueButton />
          <div className="flex justify-between w-full max-md:flex-col max-md:justify-start max-md:gap-5 max-md:items-center">
            {voucherList.map((item, index) => (
              <VoucherItemCard
                key={index}
                imgSrc={item.imgSrc}
                title={item.title}
                discountedPrice={item.discountedPrice}
                actualPrice={item.actualPrice}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface IVoucherItemCardProps {
  imgSrc: string;
  title: string;
  description: string;
  actualPrice: string;
  discountedPrice: string;
}

const VoucherItemCard = ({
  imgSrc,
  actualPrice,
  description,
  discountedPrice,
  title,
}: IVoucherItemCardProps) => {
  return (
    <div className="px-[21px] py-4 flex flex-col gap-2 rounded-2xl w-[32%] max-md:w-[70%] max-sm:w-full bg-dark-red-1 border border-alternative-gray">
      <img src={imgSrc} alt="voucher image" />
      <div className="text-xl font-bold truncate">{title}</div>
      <div className="text-xl font-light truncate-2-lines">{description}</div>
      <button className="px-4 py-[10px] flex gap-[10px] bg-primary-orange hover:bg-primary-orange-hover border border-alternative-gray items-center justify-center font-bold cursor-pointer">
        <div className="line-through text-medium-gray">{actualPrice}</div>
        <div>{discountedPrice}</div>
      </button>
    </div>
  );
};

export default Voucher;
