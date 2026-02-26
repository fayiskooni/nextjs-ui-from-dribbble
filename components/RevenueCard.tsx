import { DollarSign, ArrowUpRight } from "lucide-react";
import React from "react";

const RevenueCard = () => {
  return (
    <div className="flex flex-col justify-between h-full bg-white rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center justify-center flex-1">
        <DollarSign className="h-20 w-20 md:h-24 md:w-24 bg-red-500 text-red-100 rounded-full border-[12px] md:border-[16px] border-red-100 pt-1 md:pt-2" strokeWidth={3} />
      </div>

      <div className="flex items-center justify-center text-xs md:text-sm text-gray-500 mt-6 mb-2">
        Estimated Revenue
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-2 md:gap-4 lg:items-end">
        <p className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-none">$10M</p>
        <div className="flex items-center text-green-800 bg-green-100 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap lg:mb-1">
          <ArrowUpRight size={16} className="mr-1" />
          <p>$615K</p>
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
