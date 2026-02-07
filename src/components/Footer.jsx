import React, { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && agreed) {
      alert("Successfully subscribed!");
      setEmail("");
      setAgreed(false);
    }
  };

  return (
  <footer className="bg-gray-100 text-gray-600 pt-12">
  <div className="
    max-w-7xl mx-auto px-4
    grid grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-8
    text-center sm:text-left
  ">

    {/* CONTACT */}
    <div>
      <h3 className="text-gray-800 font-semibold mb-4 text-lg">
        Contact us
      </h3>

      <div className="space-y-3">
        <p className="text-sm font-medium">
          Classyshop - Mega Super Store
        </p>

        <div className="flex items-start justify-center sm:justify-start gap-2 text-sm">
          <MapPin className="w-4 h-4 mt-0.5 text-gray-500" />
          <span>507-Union Trade Centre France</span>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-2 text-sm">
          <Mail className="w-4 h-4 text-gray-500" />
          <a href="mailto:sales@yourcompany.com" className="hover:text-red-500">
            sales@yourcompany.com
          </a>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-2">
          <Phone className="w-4 h-4 text-red-500" />
          <a href="tel:+919876543210" className="text-red-500 font-semibold">
            (+91) 9876-543-210
          </a>
        </div>

        <button className="
          flex items-center gap-3
          mt-4 p-3 w-full
          bg-white rounded-lg shadow-sm
          hover:shadow-md transition
        ">
          <div className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="text-sm font-medium text-gray-800 block">
              Online Chat
            </span>
            <span className="text-xs text-gray-500">
              Get Expert Help
            </span>
          </div>
        </button>
      </div>
    </div>

    {/* PRODUCTS */}
    <div>
      <h3 className="text-gray-800 font-semibold mb-4 text-lg">
        Products
      </h3>
      <ul className="space-y-2.5 text-sm">
        {["Prices drop","New products","Best sales","Contact us","Sitemap","Stores"].map((item,i)=>(
          <li key={i}>
            <a href="#" className="hover:text-red-500 transition">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* COMPANY */}
    <div>
      <h3 className="text-gray-800 font-semibold mb-4 text-lg">
        Our company
      </h3>
      <ul className="space-y-2.5 text-sm">
        {["Delivery","Legal Notice","Terms and conditions","About us","Secure payment","Login"].map((item,i)=>(
          <li key={i}>
            <a href="#" className="hover:text-red-500 transition">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* SUBSCRIBE */}
    <div>
      <h3 className="text-gray-800 font-semibold mb-4 text-lg">
        Subscribe
      </h3>

      <p className="text-sm mb-4">
        Get news about special discounts.
      </p>

      <form className="space-y-3">
        <input
          type="email"
          placeholder="Your Email"
          className="
            w-full px-4 py-2.5
            border rounded-lg
            focus:ring-2 focus:ring-red-400
          "
        />

        <button className="
          w-full bg-red-500 text-white
          py-2.5 rounded-lg
          hover:bg-red-600 transition
        ">
          SUBSCRIBE
        </button>
      </form>
    </div>
  </div>

  <div className="border-t mt-10 py-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Ecommerce Template
  </div>
</footer>

  );
}