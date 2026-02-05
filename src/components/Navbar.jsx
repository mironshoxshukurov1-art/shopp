import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi"; // Profil uchun
import { AiOutlineHeart } from "react-icons/ai";    // Yurakcha uchun
import { HiOutlineShoppingBag } from "react-icons/hi2"; // Savatcha uchun
export default function Navbar() {
  return (
    <div>
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5">
          <p className="text-gray-600 cursor-pointer text-sm md:text-base font-medium">
            Get up to 50% off seasonal styles, limited time only!
          </p>
          <div className="flex items-center gap-8">
            <div className="hidden sm:flex gap-6 text-sm text-gray-600 font-medium">
              <a href="#" className="hover:text-black transition">
                Help Center
              </a>
              <a href="#" className="hover:text-black transition">
                Order Tracking
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5">
          <div className="border-b border-gray-200 w-full"></div>
        </div>
      </div>
<section className="flex items-center">
  <div className="flex items-center cursor-pointer pt-5 gap-3">
    <img src="/bag.png" alt="Bag" className="w-16 h-16 object-contain" />
    <div className="flex flex-col justify-center">
      <h1 className="text-[#1A1A1A] font-bold text-3xl leading-none tracking-tight">
        CLASSYSHOP
      </h1>
      <p className="text-gray-400 ml-5 pt-1 text-[10px] tracking-[0.2em] uppercase mt-1 leading-none">
        <span className="pr-1">Big</span>
        <span className="pr-1">mega</span>
        <span>store</span>
      </p>
    </div>
  </div>

  <div className="pt-[30px] ml-[50px]">
    <div className="w-[670px] max-w-xl relative">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full bg-gray-200 text-gray-600 placeholder-gray-500
        py-3 pl-4 pr-12 rounded-md outline-none
        focus:ring-2 focus:ring-gray-300"
      />
      <IoSearchSharp
        className="absolute right-4 top-1/2 -translate-y-1/2
        text-gray-500 text-xl cursor-pointer"
      />
    </div>
  </div>

  <div className="flex items-center pr-[20px] pt-5 gap-6 font-sans ml-auto">
    <div className="flex items-center gap-2 cursor-pointer group">
      <HiOutlineUserCircle className="w-9 h-9 text-gray-400 group-hover:text-gray-600 transition-colors" />
      <div className="flex flex-col">
        <span className="text-gray-800 text-sm font-semibold leading-none">
          Rinku Verma
        </span>
        <span className="text-gray-400 text-xs mt-1 leading-none">
          rinkuv37@gmail.com
        </span>
      </div>
    </div>

    <div className="h-8 w-px bg-gray-200 mx-2"></div>

    <div className="flex items-center gap-5">
        <div className="relative cursor-pointer group">
          <AiOutlineHeart className="w-7 h-7 text-gray-700 group-hover:text-red-500 transition-colors" />
        </div>
      <div className="relative cursor-pointer group">
        <HiOutlineShoppingBag className="w-7 h-7 text-gray-700 group-hover:text-green-600 transition-colors" />
      </div>
    </div>
  </div>


</section>


    </div>
  );
}
