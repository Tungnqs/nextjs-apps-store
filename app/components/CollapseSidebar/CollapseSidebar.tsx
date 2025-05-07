import { CloseIcon } from "@/public/icon/icons";
import React from "react";
import { ButtonItem, IButtonItemProps } from "../Navbar/Navbar";

const CollapseSidebar = ({
  isOpen,
  toggleSideBar,
  buttons,
}: {
  isOpen: boolean;
  toggleSideBar: () => void;
  buttons: IButtonItemProps[];
}) => {
  return (
    <div
      tabIndex={-1}
      className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform w-80 bg-black border-r border-light-gray ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        type="button"
        onClick={toggleSideBar}
        className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center hover:bg-gray-600 hover:text-white"
      >
        <CloseIcon />
        <span className="sr-only">Close menu</span>
      </button>
      <div className="text-xl flex flex-col gap-6">
        <div className="font-bold text-center text-2xl">Menu</div>
        <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default CollapseSidebar;
