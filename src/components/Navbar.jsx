import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Banner */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5">
          <p className="text-gray-600 cursor-pointer text-xs sm:text-sm md:text-base font-medium">
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

      {/* Main Navbar */}
      <section className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer gap-2 md:gap-3">
            <img src="/bag.png" alt="Bag" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <div className="flex flex-col justify-center">
              <h1 className="text-[#1A1A1A] font-bold text-xl md:text-2xl lg:text-3xl leading-none tracking-tight">
                CLASSYSHOP
              </h1>
              <p className="text-gray-400 ml-3 md:ml-5 pt-1 text-[8px] md:text-[10px] tracking-[0.2em] uppercase mt-1 leading-none">
                <span className="pr-1">Big</span>
                <span className="pr-1">mega</span>
                <span>store</span>
              </p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:block flex-1 max-w-2xl mx-8">
            <div className="relative">
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

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {/* User Info */}
            <div className="hidden lg:flex items-center gap-2 cursor-pointer group">
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

            {/* Divider */}
            <div className="hidden lg:block h-8 w-px bg-gray-200"></div>

            {/* Action Icons */}
            <div className="flex items-center gap-4">
              <div className="relative cursor-pointer group">
                <AiOutlineHeart className="w-6 h-6 lg:w-7 lg:h-7 text-gray-700 group-hover:text-red-500 transition-colors" />
              </div>
              <div className="relative cursor-pointer group">
                <HiOutlineShoppingBag className="w-6 h-6 lg:w-7 lg:h-7 text-gray-700 group-hover:text-green-600 transition-colors" />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Search Bar - Mobile & Tablet */}
        <div className="lg:hidden mt-4">
          <div className="relative">
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            {/* User Info Mobile */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
              <HiOutlineUserCircle className="w-10 h-10 text-gray-400" />
              <div className="flex flex-col">
                <span className="text-gray-800 text-sm font-semibold">
                  Rinku Verma
                </span>
                <span className="text-gray-400 text-xs mt-1">
                  rinkuv37@gmail.com
                </span>
              </div>
            </div>

            {/* Mobile Icons */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 cursor-pointer">
                <AiOutlineHeart className="w-7 h-7 text-gray-700" />
                <span className="text-sm text-gray-700">Wishlist</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <HiOutlineShoppingBag className="w-7 h-7 text-gray-700" />
                <span className="text-sm text-gray-700">Cart</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
              <a href="#" className="text-sm text-gray-600 hover:text-black transition">
                Help Center
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-black transition">
                Order Tracking
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}