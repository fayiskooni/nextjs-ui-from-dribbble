import { Search, X, Mic, Image as ImageIcon, Clock } from "lucide-react";
import React from "react";

const SearchCard = () => {
  return (
    <div className="w-full flex flex-col shadow-sm rounded-3xl overflow-hidden bg-white">
      {/* Search Bar */}
      <div className="px-4 md:px-5 py-3 md:py-4 border-b border-gray-100">
        <div className="flex items-center gap-2 md:gap-3">
          <Search className="w-4 h-4 md:w-5 md:h-5 text-gray-600 shrink-0" />
          <span className="flex-1 text-xs md:text-sm text-blue-600 truncate font-medium">Music Video</span>
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <Mic className="w-4 h-4 md:w-5 md:h-5 text-blue-600 cursor-pointer" />
            <ImageIcon className="w-4 h-4 md:w-5 md:h-5 text-blue-600 cursor-pointer" />
            <X className="w-4 h-4 md:w-5 md:h-5 text-gray-500 cursor-pointer ml-1 md:ml-2 hover:text-gray-800 transition" />
          </div>
        </div>
      </div>

      {/* Search Suggestion */}
      <div>
        <div className="px-4 md:px-5 py-3 flex items-center gap-2 md:gap-3">
          <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 shrink-0" />
          <span className="text-[10px] md:text-xs text-gray-600 truncate font-medium">
            Top 100 music videos 2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
