"use client";

import Image from "next/image";
import Link from "next/link";
import { headerData } from "@/app/data/data";
import { FaSistrix, FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

import { useState } from "react";

interface MobileMenuProps {
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ setSideMenuOpen }: MobileMenuProps) => {
  const closeMenu = () => {
    setSideMenuOpen(false);
  };

  return (
    <div className="container absolute py-5 top-0 left-0 w-full bg-white h-screen md:w-1/2 lg:hidden">
      <div className="w-full flex items-center justify-between">
        <p className="font-semibold text-xl">Menu</p>
        <MdClose onClick={closeMenu} />
      </div>
      <div className="py-5">
        <div className="flex flex-col justify-left gap-6">
          {headerData.map((item, index) => {
            return (
              <Link
                key={index}
                className="font-medium link-hover transition hover:duration-300"
                href={item.path}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const openMenu = () => {
    setSideMenuOpen(true);
  };

  return (
    <header className="container py-5">
      {sideMenuOpen && <MobileMenu setSideMenuOpen={setSideMenuOpen} />}
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-6 lg:col-span-3">
          <Image src="/syntax_logo.png" alt="Logo" width={250} height={50} />
        </div>
        <nav className="hidden lg:block col-span-6">
          <div className="w-full flex items-center justify-center gap-10">
            {headerData.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="font-medium link-hover transition hover:duration-300"
                  href={item.path}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="hidden justify-end lg:col-span-3 lg:flex">
          <div className="border-2 border-slate-100 flex items-center pr-2 py-1">
            <input
              placeholder="Search"
              className="px-5 py-1 outline-none text-base-content rounded"
            ></input>
            <FaSistrix />
          </div>
        </div>
        <div className="flex col-span-6 justify-end lg:hidden">
          <FaBars onClick={openMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
