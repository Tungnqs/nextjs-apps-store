"use client";

import {
  MenuIcon,
  SearchIcon,
  SupportIcon,
  TopUpIcon,
  USAIcon,
  VoucherIcon,
} from "@/public/icon/icons";
import React, { useState } from "react";
import CollapseSidebar from "../CollapseSidebar/CollapseSidebar";
const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

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
    <header className="bg-black flex justify-between px-[64px] max-sm:px-4 py-6">
      <CollapseSidebar
        isOpen={isSideBarOpen}
        toggleSideBar={toggleSideBar}
        buttons={buttons}
      />
      <div className="flex gap-6 items-center">
        <div onClick={toggleSideBar} className="hidden max-lg:block size-8">
          <MenuIcon className="text-white size-8" />
        </div>
        <img src="/images/app-logo.png" alt="Logo" className="h-11" />
        <div className="flex gap-6 items-center max-lg:hidden">
          {buttons.map((item, index) => (
            <ButtonItem
              key={index}
              icon={item.icon}
              title={item.title}
              sectionId={item.sectionId}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="relative w-[70%] max-md:hidden">
          <input
            type="text"
            className="rounded-lg bg-white w-full text-black  pl-3 py-[10px] pr-[42px] outline-none "
            placeholder="Fortnight: Sabrina"
          />
          <SearchIcon className="absolute right-2 top-[calc(50%_-_10px)]" />
        </div>
        <button className="bg-primary-orange hover:bg-primary-orange-hover font-semibold w-[75px] px-3 py-[10px] rounded-lg cursor-pointer">
          Log in
        </button>
        <USAIcon />
      </div>
    </header>
  );
};

export interface IButtonItemProps {
  icon: React.ReactNode;
  title: string;
  sectionId: string;
}

export const ButtonItem = ({ icon, title, sectionId }: IButtonItemProps) => {
  return (
    <a
      href={sectionId}
      className="flex items-center gap-2 cursor-pointer hover:underline"
    >
      {icon}
      <div className="font-semibold">{title}</div>
    </a>
  );
};

export default Navbar;
