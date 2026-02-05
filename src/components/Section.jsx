import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoChevronDownOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";

export default function Section() {
  const [open, setOpen] = useState(false);

  return (
    <section className="border-t pt-[20px] border-gray-200">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-3 text-sm text-gray-700">

        <div className="flex items-center gap-6 relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 font-semibold cursor-pointer select-none"
          >
            <HiOutlineMenuAlt2 className="text-lg" />
            <span>SHOP BY CATEGORIES</span>
            <IoChevronDownOutline
              className={`text-sm transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>

          {open && (
            <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-lg border rounded-md z-50">
              <ul className="py-2">
                {[
                  "Fashion",
                  "Electronics",
                  "Bags",
                  "Footwear",
                  "Groceries",
                  "Beauty",
                  "Wellness",
                  "Jewellery",
                ].map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <nav className="flex items-center gap-6 ml-4">
            <span className="cursor-pointer hover:text-black">Home</span>
            <span className="cursor-pointer hover:text-black">Fashion</span>
            <span className="cursor-pointer hover:text-black">Electronics</span>
            <span className="cursor-pointer hover:text-black">Bags</span>
            <span className="cursor-pointer hover:text-black">Footwear</span>
            <span className="cursor-pointer hover:text-black">Groceries</span>
            <span className="cursor-pointer hover:text-black">Beauty</span>
            <span className="cursor-pointer hover:text-black">Wellness</span>
            <span className="cursor-pointer hover:text-black">Jewellery</span>
          </nav>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FiTruck className="text-lg" />
          <span>Free International Delivery</span>
        </div>

      </div>
    </section>
  );
}
