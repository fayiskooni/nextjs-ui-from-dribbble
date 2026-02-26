import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Check, Ellipsis } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="relative bg-white h-full flex flex-col justify-between p-4 md:p-6 rounded-3xl content-between">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs sm:text-sm font-semibold">Profile</p>
        <Ellipsis className="w-5 h-5 text-gray-600" />
      </div>
      <div className="flex justify-center mb-4">
        <Avatar className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] relative">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="profile"
            className="rounded-full"
          />
          <AvatarFallback>CN</AvatarFallback>
          <span className="absolute top-1 right-1">
            <Check
              strokeWidth={3}
              className="bg-blue-500 text-white font-extrabold rounded-full border-2 p-1 border-white w-5 h-5 md:w-6 md:h-6"
            />
          </span>
        </Avatar>
      </div>
      <div className="flex flex-col items-center mb-6">
        <p className="text-black font-bold text-base md:text-lg">Arthur Curtis</p>
        <p className="text-gray-500 text-xs sm:text-sm">@Avenueart86</p>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] mt-auto">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl lg:text-3xl font-medium">128,7K</p>
          <p className="text-xs sm:text-sm text-gray-500">Subscribers</p>
        </div>
        <span className="border-r border-gray-200"></span>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl lg:text-3xl font-medium">213</p>
          <p className="text-xs sm:text-sm text-gray-500">Videos</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
