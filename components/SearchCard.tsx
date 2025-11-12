import { Search, X, Mic, Image as ImageIcon, Clock } from "lucide-react";
import React from "react";

const SearchCard = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Search Bar */}
      <div className="bg-white px-5 py-4 rounded-t-3xl">
        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-600" />
          <span className="flex-1 text-sm text-blue-600">Music Video</span>
          <Mic className="w-5 h-5 text-blue-600" />
          <ImageIcon className="w-5 h-5 text-blue-600" />
          <X className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Search Suggestion */}
      <div className="bg-white border-t border-gray-100 rounded-b-3xl">
        <div className="px-5 py-3 flex items-center gap-3">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-xs text-gray-800">
            Top 100 music videos 2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
