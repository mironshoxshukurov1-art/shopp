import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Truck, RotateCcw, ShieldCheck, Heart, Minus, Plus } from 'lucide-react';

export default function Detail() {
  const { detail } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${detail}`,
      );
      setData(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Yuklanmoqda...</div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <Link to="/">
          <button className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
            <span>Orqaga</span>
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex items-center justify-center bg-gray-50 rounded-lg p-8">
            <img
              alt={data.title}
              className="max-h-[500px] object-contain"
              src={data.image || "https://dummyimage.com/500x500"}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-sm text-gray-500 uppercase tracking-wider">
                {data.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {data.title}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">(4.0) 128 ta sharh</span>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">
                ${data.price}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {data.description}
            </p>

            <div className="mb-6">
              <span className="text-sm font-semibold text-gray-900 mb-3 block">
                Rang tanlang
              </span>
              <div className="flex gap-3">
                {['bg-black', 'bg-gray-600', 'bg-blue-500', 'bg-red-500'].map((color, i) => (
                  <button
                    key={i}
                    className={`w-10 h-10 rounded-full ${color} border-2 ${
                      selectedColor === color ? 'border-gray-900' : 'border-gray-300'
                    } hover:scale-110 transition`}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="mb-8">
              <span className="text-sm font-semibold text-gray-900 mb-3 block">
                O'lcham tanlang
              </span>
              <div className="flex gap-3">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`px-6 py-2 border rounded-lg font-medium transition ${
                      selectedSize === size
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <span className="text-sm font-semibold text-gray-900 mb-3 block">
                Miqdor
              </span>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    className="p-3 hover:bg-gray-100 transition"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-semibold">{quantity}</span>
                  <button
                    className="p-3 hover:bg-gray-100 transition"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-gray-900 text-white py-4 px-8 rounded-lg font-semibold hover:bg-gray-800 transition">
                Savatga qo'shish
              </button>
              <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <Heart className="w-6 h-6 text-gray-600" />
              </button>
            </div>

  
            <div className="border-t pt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">Bepul yetkazib berish $100 dan ortiq buyurtmalar uchun</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">30 kun ichida qaytarish imkoniyati</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">Xavfsiz to'lov tizimi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}