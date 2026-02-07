import React from 'react'
import { FaTruck } from "react-icons/fa";
export default function Section2() {
  return (
    <div>

<div className="max-w-7xl h-20  mx-auto px-4">
      <div className="flex h-15 items-center justify-between border border-red-400 rounded-md px-4 py-3 text-sm">
        

        <div className="flex items-center gap-2">
          <FaTruck className="text-gray-700 text-lg" />
          <span className="font-semibold uppercase">Free Shipping</span>
        </div>

      
        <p className="text-gray-600 text-center flex-1">
          Free Delivery Now On Your First Order and over $200
        </p>


        <span className="font-semibold text-gray-800">
          - Only $200*
        </span>

      </div>
    </div>
    </div>
  )
}
