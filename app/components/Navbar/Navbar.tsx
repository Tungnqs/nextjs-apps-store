import {
  SearchIcon,
  SupportIcon,
  TopUpIcon,
  USAIcon,
  VoucherIcon,
} from "@/public/icon/icons";
import React from "react";
const Navbar = () => {
  const buttons: IButtonItemProps[] = [
    {
      icon: <TopUpIcon className="size-5" />,
      title: "Direct Top up",
      sectionId: "#direct-top-up",
    },
    {
      icon: <VoucherIcon className="size-5" />,
      title: "Voucher",
      sectionId: "#voucher",
    },
    {
      icon: <SupportIcon className="size-5" />,
      title: "Support",
      sectionId: "#support",
    },
  ];
  return (
    <header className="bg-black flex justify-between px-[64px] py-6">
      <div className="flex gap-6 items-center">
        <img src="/images/app-logo.png" alt="Logo" className="h-11" />
        {buttons.map((item, index) => (
          <ButtonItem
            key={index}
            icon={item.icon}
            title={item.title}
            sectionId={item.sectionId}
          />
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <div className="relative">
          <input
            type="text"
            className="rounded-lg bg-white text-black w-[324px] pl-3 py-[10px] pr-[42px] outline-none"
            placeholder="Fortnight: Sabrina"
          />
          <SearchIcon className="absolute right-2 top-[calc(50%_-_10px)]" />
        </div>
        <button className="bg-primary-orange hover:bg-primary-orange-hover font-semibold px-3 py-[10px] rounded-lg cursor-pointer">
          Log in
        </button>
        <USAIcon />
      </div>
    </header>
  );
};

interface IButtonItemProps {
  icon: React.ReactNode;
  title: string;
  sectionId: string;
}
const ButtonItem = ({ icon, title, sectionId }: IButtonItemProps) => {
  return (
    <a href={sectionId} className="flex items-center gap-2 cursor-pointer hover:underline">
      {icon}
      <div className="font-semibold">{title}</div>
    </a>
  );
};

export default Navbar;
