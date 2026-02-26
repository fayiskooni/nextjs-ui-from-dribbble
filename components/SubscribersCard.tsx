import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Check } from "lucide-react";
import React from "react";

const SubscribersCard = () => {
  return (
    <div className="bg-gray-200 rounded-3xl h-full flex flex-col p-4 md:p-6 gap-4 md:gap-5 shadow-sm min-h-[160px] justify-center">
      <div className="text-xs md:text-sm font-semibold capitalize text-gray-800">
        Your Subscribers
      </div>

      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 md:h-12 md:w-12 relative shrink-0">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="profile"
            className="rounded-full shadow-sm"
          />
          <AvatarFallback>CN</AvatarFallback>
          <span className="absolute -top-1 -right-1">
            <Check
              strokeWidth={3}
              className="bg-blue-500 text-white font-extrabold rounded-full border-2 border-white h-4 w-4 md:h-5 md:w-5 p-0.5"
            />
          </span>
        </Avatar>
        <div className="flex flex-col justify-center min-w-0">
          <p className="text-xs md:text-sm font-semibold truncate text-gray-900">Crafts Corner</p>
          <p className="text-[10px] md:text-xs text-gray-500 truncate mt-0.5">823K Subscribers</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 md:h-12 md:w-12 shrink-0">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="profile"
            className="rounded-full shadow-sm"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center min-w-0">
          <p className="text-xs md:text-sm font-semibold truncate text-gray-900">Zone Explorers</p>
          <p className="text-[10px] md:text-xs text-gray-500 truncate mt-0.5">75K Subscribers</p>
        </div>
      </div>
    </div>
  );
};

export default SubscribersCard;
