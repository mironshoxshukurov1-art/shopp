import { 
  HiOutlineShoppingBag, 
  HiOutlineDevicePhoneMobile 
} from "react-icons/hi2";
import { 
  GiHandBag, 
  GiRunningShoe, 
  GiFruitBowl, 
  GiSparkles, 
  GiMeditation, 
  GiNecklace 
} from "react-icons/gi";

const categories = [
  { id: 1, name: "Fashion", icon: <HiOutlineShoppingBag className="w-10 h-10 text-pink-500" /> },
  { id: 2, name: "Electronics", icon: <HiOutlineDevicePhoneMobile className="w-10 h-10 text-purple-500" /> },
  { id: 3, name: "Bags", icon: <GiHandBag className="w-10 h-10 text-orange-400" /> },
  { id: 4, name: "Footwear", icon: <GiRunningShoe className="w-10 h-10 text-red-500" /> },
  { id: 5, name: "Groceries", icon: <GiFruitBowl className="w-10 h-10 text-green-500" /> },
  { id: 6, name: "Beauty", icon: <GiSparkles className="w-10 h-10 text-yellow-500" /> },
  { id: 7, name: "Wellness", icon: <GiMeditation className="w-10 h-10 text-cyan-500" /> },
  { id: 8, name: "Jewellery", icon: <GiNecklace className="w-10 h-10 text-blue-600" /> },
];

const Section1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-wrap items-center justify-between border-t border-l border-gray-100">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="flex-1 min-w-[120px] h-[140px] flex flex-col items-center justify-center bg-white border-r border-b border-gray-100 hover:shadow-lg hover:z-10 transition-all cursor-pointer group"
          >
            <div className="mb-3 transform group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
  
            <span className="text-gray-700 font-medium text-sm">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;