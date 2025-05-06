import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex justify-between px-[60px] pt-10 pb-5">
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-2xl font-bold uppercase">Order</h1>
          <a className="text-xl hover:underline w-fit" href="#">
            Return & Refund Policy
          </a>
          <a className="text-xl hover:underline w-fit" href="#">
            Cancellation/Order
          </a>
          <a className="text-xl hover:underline w-fit" href="#">
            Change
          </a>
          <a className="text-xl hover:underline w-fit" href="#">
            DMCA
          </a>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-2xl font-bold uppercase">Resources</h1>
          <a className="text-xl hover:underline w-fit" href="#">
            Privacy Policy
          </a>
          <a className="text-xl hover:underline w-fit" href="#">
            Payment Methods
          </a>
          <a className="text-xl hover:underline w-fit" href="#">
            Terms of Services
          </a>
          <a className="text-xl hover:underline w-fit" href="#">
            About Us
          </a>
          <a className="text-xl hover:underline w-fit" href="#">
            FAQs
          </a>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-2xl font-bold uppercase">Customers</h1>
          <a className="text-xl hover:underline w-fit" href="#">
            Case Studies
          </a>
          <a className="text-xl hover:underline w-fit" href="#">
            Store Examples
          </a>
        </div>
        <div className="flex flex-col gap-6">
          <button className="px-3 py-[10px] font-semibold bg-primary-orange hover:bg-primary-orange-hover cursor-pointer">
            Contact Us
          </button>
          <div className="flex flex-col gap-2">
            <a className="text-base hover:underline w-fit" href="#">
              X
            </a>
            <a className="text-base hover:underline w-fit" href="#">
              Facebook
            </a>
            <a className="text-base hover:underline w-fit" href="#">
              LinkedIn
            </a>
            <a className="text-base hover:underline w-fit" href="#">
              YouTube
            </a>
            <a className="text-base hover:underline w-fit" href="#">
              Pinterest
            </a>
            <a className="text-base hover:underline w-fit" href="#">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="px-[34px] h-[100px] flex items-center justify-between">
        <img
          src="/images/app-logo.png"
          alt="Logo"
          className="h-[78px] w-auto"
        />
        <div className="flex items-center gap-1 text-[#616161]">
          <a className="text-base hover:underline w-fit" href="#">
            © 2025 HABBY PTE. LTD. All Rights Reserved.
          </a>
          <div>|</div>
          <a className="text-base hover:underline w-fit" href="#">
            Privacy Policy
          </a>
          <div>|</div>
          <a className="text-base hover:underline w-fit" href="#">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
