import React from 'react';
import { Truck, RotateCcw, CreditCard, Gift, Headphones } from 'lucide-react';

export default function Section3() {
  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-gray-700">
              <Truck className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Free Shipping
            </h3>
            <p className="text-sm text-gray-600">
              For all Orders Over $100
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-gray-700">
              <RotateCcw className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              30 Days Returns
            </h3>
            <p className="text-sm text-gray-600">
              For an Exchange Product
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-gray-700">
              <CreditCard className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Secured Payment
            </h3>
            <p className="text-sm text-gray-600">
              Payment Cards Accepted
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-gray-700">
              <Gift className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Special Gifts
            </h3>
            <p className="text-sm text-gray-600">
              Our First Product Order
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-gray-700">
              <Headphones className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Support 24/7
            </h3>
            <p className="text-sm text-gray-600">
              Contact us Anytime
            </p>
          </div>
        </div>
      </div>
      <span className='block w-full h-1 bg-gray-200 mt-8'></span>
    </div>
  );
}