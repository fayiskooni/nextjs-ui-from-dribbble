import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Check } from "lucide-react";
import React from "react";

const SubscribersCard = () => {
  return <div className="bg-gray-200 rounded-3xl h-full grid grid-rows-[2fr_4fr_4fr] pl-8">
    {/* Row 1  */}
      <div className="text-sm font-semibold flex items-end">
       your Subscribers
      </div>

      {/* Row 2  */}
      <div className="flex items-end">
         <Avatar className="h-12 w-12 relative">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="profile"
            className="rounded-full"
          />
          <AvatarFallback>CN</AvatarFallback>
          <span className="absolute top-0 right-0">
            <Check
              strokeWidth={3}
              className="bg-blue-500 text-white font-extrabold rounded-full border p-1 border-white h-4 w-4"
            />
          </span>
        </Avatar>
        <div className="flex flex-col ml-2 justify-center">
          <p className="text-sm font-semibold">Crafts Corner</p>
          <p className="text-xs text-gray-500">823K Subscribers</p>
        </div>
      </div>

      {/* Row 3  */}
      <div className="flex items-center">
        <Avatar className="h-12 w-12">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="profile"
            className="rounded-full"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col ml-2 justify-center">
          <p className="text-sm font-semibold">Zone Explorers</p>
          <p className="text-xs text-gray-500">75K Subscribers</p>
        </div>
      </div>
  </div>;
};

export default SubscribersCard;
