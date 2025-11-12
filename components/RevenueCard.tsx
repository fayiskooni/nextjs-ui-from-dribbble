import { DollarSign, ArrowUpRight } from "lucide-react";
import React from "react";

const RevenueCard = () => {
  return (
    <div className="grid grid-rows-[5fr_1_4fr] h-full bg-white rounded-3xl">
      {/* Row 1  */}
      <div className="flex items-center justify-center">
        <DollarSign className="h-20 w-20 bg-red-500 text-red-200 rounded-full border-15 border-red-200" />
      </div>

      {/* Row 2  */}
      <div className="flex items-center justify-center text-sm text-gray-500">
        Estimated Revenue
      </div>

      {/* Row 3  */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl font-bold">$10M</p>
        <div className="flex items-center text-green-800 bg-green-100 p-1 rounded-2xl">
            <ArrowUpRight size={16} />
          <p>
            $615K
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
