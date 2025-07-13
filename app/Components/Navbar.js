"use client";

import Image from "next/image";
import React from "react";

const Navbar = () => {
  const logoSrc = "/nav-logo.png";
  const dropdownIconSrc = "/images/icon_menu.png";

  return (
    <nav className="bg-[#2E3A44] text-white h-16 flex items-center justify-between px-4 shadow-xl">
      <div className="flex items-center h-full">
        <div className="relative w-[100px] h-[200px] ml-[300px] shrink-0 ">
          <Image
            src={logoSrc}
            alt="IGDB Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="w-px h-8 bg-border-gray mr-4" />
      </div>

      <div className="flex flex-grow justify-center mx-6 mr-[100px]">
        <div className="relative flex items-center w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search"
             suppressHydrationWarning={true}
            className="w-full py-2.5 pl-4 pr-10 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
      </div>

      <div className="shrink-0">
        <button className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-2 px-6 rounded-md shadow-lg flex items-center gap-2 text-sm mr-[100px]">
          <span>Login with Twitch</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
