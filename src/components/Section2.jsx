import React from "react";
import { FaTruck } from "react-icons/fa";

export default function Section2() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div
        className="
          border border-red-400 rounded-md
          px-4 py-3 text-sm
          flex flex-col gap-2
          sm:flex-row sm:items-center sm:justify-between
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <FaTruck className="text-gray-700 text-lg" />
          <span className="font-semibold uppercase">
            Free Shipping
          </span>
        </div>

        {/* CENTER */}
        <p className="text-gray-600 text-center sm:flex-1">
          Free Delivery Now On Your First Order and over $200
        </p>

        {/* RIGHT */}
        <span className="font-semibold text-gray-800 text-center sm:text-right">
          - Only $200*
        </span>
      </div>
    </div>
  );
}
