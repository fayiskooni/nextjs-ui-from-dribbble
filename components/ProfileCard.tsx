import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Check, Ellipsis } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="relative bg-white">
      <div className="flex items-center justify-between m-5">
        <p className="text-xs font-semibold">Profile</p>
        <Ellipsis />
      </div>
      <div className="flex items-center justify-center">
        <Avatar className="h-[100px] w-[100px] relative">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="profile"
            className="rounded-full"
          />
          <AvatarFallback>CN</AvatarFallback>
          <span className="absolute top-1 right-1">
            <Check
              strokeWidth={3}
              className="bg-blue-500 text-white font-extrabold rounded-full border-2 p-1 border-white"
            />
          </span>
        </Avatar>
      </div>
      <div className="flex flex-col items-center mb-2">
        <p className="text-black font-bold">Arthur Curtis</p>
        <p className="text-gray-500 text-xs">@Avenueart86</p>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-medium">128,7K</p>
          <p className="text-xs text-gray-500">Subscribers</p>
        </div>
        <span className="border-[0.5] my-3"></span>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-medium">213</p>
          <p className="text-xs text-gray-500">Videos</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
