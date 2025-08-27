import React from "react";
import { FaAppleAlt } from "react-icons/fa";

const HoverCard = () => {
  return (
    <div className="group relative bg-white rounded-2xl p-6 overflow-hidden transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl w-64 hover:w-[28rem] h-44 flex flex-col justify-between">
      {/* Top Section: Icon + Text */}
      <div className="relative z-10 w-40"> {/* fixed width to prevent shifting */}
        <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full mb-2">
          <FaAppleAlt className="text-purple-600 text-xl" />
        </div>
        <h3 className="text-base font-bold text-gray-900">
          Nutrition & Wellness
        </h3>
        <p className="text-gray-600 text-sm mt-1 leading-snug">
          Expert dietitians covering <br /> multiple health areas.
        </p>
      </div>

      {/* Image appears bottom-right on hover */}
      <div className="absolute bottom-3 right-3 w-24 h-24 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-200 ease-out">
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=60"
          alt="Wellness"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HoverCard;
