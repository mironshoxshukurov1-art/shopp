import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoChevronDownOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import { HiX } from "react-icons/hi";

export default function Section() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    "Fashion",
    "Electronics",
    "Bags",
    "Footwear",
    "Groceries",
    "Beauty",
    "Wellness",
    "Jewellery",
  ];

  return (
    <section className="border-t border-gray-200 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between py-3">
          
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="relative">
              <div
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 font-semibold cursor-pointer select-none text-gray-700 hover:text-black transition"
              >
                <HiOutlineMenuAlt2 className="text-xl" />
                <span className="hidden sm:inline text-sm">SHOP BY CATEGORIES</span>
                <span className="sm:hidden text-sm">CATEGORIES</span>
                <IoChevronDownOutline
                  className={`text-sm transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </div>

              {open && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setOpen(false)}
                  ></div>
                  <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-lg border rounded-md z-50">
                    <ul className="py-2">
                      {categories.map((item) => (
                        <li
                          key={item}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                          onClick={() => setOpen(false)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>

            <nav className="hidden xl:flex items-center gap-6 text-sm text-gray-700">
              <span className="cursor-pointer hover:text-black transition whitespace-nowrap">Home</span>
              <span className="cursor-pointer hover:text-black transition whitespace-nowrap">Fashion</span>
              <span className="cursor-pointer hover:text-black transition whitespace-nowrap">Electronics</span>
              <span className="cursor-pointer hover:text-black transition whitespace-nowrap">Bags</span>
              <span className="cursor-pointer hover:text-black transition whitespace-nowrap">Footwear</span>
              <span className="cursor-pointer hover:text-black transition whitespace-nowrap">Groceries</span>
              <span className="cursor-pointer hover:text-black transition whitespace-nowrap">Beauty</span>
              <span className="cursor-pointer hover:text-black transition whitespace-nowrap">Wellness</span>
              <span className="cursor-pointer hover:text-black transition whitespace-nowrap">Jewellery</span>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-2 text-gray-600 text-sm">
            <FiTruck className="text-lg flex-shrink-0" />
            <span className="whitespace-nowrap">Free International Delivery</span>
          </div>

          <button
            className="xl:hidden text-gray-700 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiOutlineMenuAlt2 className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-3">
              {["Home", "Fashion", "Electronics", "Bags", "Footwear", "Groceries", "Beauty", "Wellness", "Jewellery"].map((item) => (
                <span
                  key={item}
                  className="cursor-pointer hover:text-black transition text-sm text-gray-700 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </span>
              ))}
            </nav>
            <div className="md:hidden flex items-center gap-2 text-gray-600 text-sm mt-4 pt-4 border-t border-gray-200">
              <FiTruck className="text-lg" />
              <span>Free International Delivery</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}