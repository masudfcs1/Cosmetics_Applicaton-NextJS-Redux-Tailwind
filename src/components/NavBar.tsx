import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className=" bg-slate-400 py-4 sticky top-0 z-10 ">
      <div className=" container flex justify-between items-center">
        <RxHamburgerMenu className=" cursor-pointer text-[26px] hidden" />
        <Link href="/" className=" text-2xl font-semibold hover:text-accent">
          Shamu
        </Link>
        <ul className="md:flex hidden gap-6">
          <Link href="/">Home</Link>
          <li className=" cursor-pointer hover:text-accent">Shop</li>
          <li className=" cursor-pointer hover:text-accent">Blog</li>
          <li className=" cursor-pointer hover:text-accent">Pages</li>
          <li className=" cursor-pointer hover:text-accent">Contact</li>
        </ul>

        <div className="flex gap-5 text-[26px]">
          <div className=" relative cursor-pointer">
            <AiOutlineShoppingCart className=" text-[23px]" />
            <div className="absolute top-[-10px]  bg-red-600 rounded-full justify-center w-[22px] h-[22px] right-[-10px] text-[15px] text-center grid place-items-center  ">
              0
            </div>
          </div>
          <BsSearch className="text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
