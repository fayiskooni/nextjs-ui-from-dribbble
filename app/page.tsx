"use client";
import { House, Radius, RotateCcw, Search, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import VideoCard from "@/components/VideoCard";
import ProfileCard from "@/components/ProfileCard";
import AudioCard from "@/components/AudioCard";
import PaymentCard from "@/components/PaymentCard";
import SearchCard from "@/components/SearchCard";
import GraphCard from "@/components/GraphCard";
import HobbyCard from "@/components/HobbyCard";
import RevenueCard from "@/components/RevenueCard";
import SubscribersCard from "@/components/SubscribersCard";

const HomeLayout = () => {
  const [click, setClick] = useState(0);
  return (
    <div className="p-10 flex gap-5 bg-slate-100 h-screen">
      {/* Sidebar */}
      <div className=" flex flex-col bg-white rounded-3xl relative">
        <div className="flex gap-1 m-3">
          <span className=" bg-red-500 rounded-full w-2 h-2"></span>
          <span className="bg-yellow-500 rounded-full w-2 h-2"></span>
          <span className="bg-green-500 rounded-full w-2 h-2"></span>
        </div>
        <div className="flex flex-col h-full p-6 relative justify-between">
          <Radius
            className="bg-blue-500 text-white p-2 rounded-2xl"
            size={50}
          />
          <div className="flex flex-col items-center mt-12 gap-8 text-gray-500">
            <House
              className={
                click === 0
                  ? "bg-black text-white rounded-2xl p-2 cursor-pointer"
                  : "cursor-pointer"
              }
              size={click === 0 ? 50 : 30}
              onClick={() => setClick(0)}
            />
            <Search
              className={
                click === 1 ? "bg-black text-white rounded-2xl p-2 cursor-pointer"
                  : "cursor-pointer"
              }
              size={click === 1 ? 50 : 30}
              onClick={() => setClick(1)}
            />
            <RotateCcw
              className={
                click === 2 ? "bg-black text-white rounded-2xl p-2 cursor-pointer"
                  : "cursor-pointer"
              }
              size={click === 2 ? 50 : 30}
              onClick={() => setClick(2)}
            />
            <Video
              className={
                click === 3 ? "bg-black text-white rounded-2xl p-2 cursor-pointer"
                  : "cursor-pointer"
              }
              size={click === 3 ? 50 : 30}
              onClick={() => setClick(3)}
            />
          </div>
          <div className="flex flex-col items-center mt-12 gap-5">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-10">
            <span className="flex border px-0.5 mb-2"></span>
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      {/* Right section */}
      <div className=" w-full h-full relative justify-between">
        <div className="grid grid-cols-20 gap-5 h-[35%] mb-5">
          <div className="col-span-20 md:col-span-10">
            <VideoCard />
          </div>
          <div className="col-span-20 md:col-span-6 bg-white rounded-3xl">
            <ProfileCard />
          </div>
          <div className="col-span-20 md:col-span-4 rounded-2xl">
            <AudioCard />
          </div>
        </div>
        <div className="grid grid-cols-20 gap-5 h-[60%]">
          <div className="col-span-20 md:col-span-8 h-full">
            <div className="h-[80%] mb-5">
              <PaymentCard />
            </div>
            <div className="h-[20%]">
              <SearchCard />
            </div>
          </div>
          <div className="col-span-20 md:col-span-7">
            <div className="h-[70%]">
              <GraphCard />
            </div>
            <div className="h-[30%]">
              <HobbyCard />
            </div>
          </div>
          <div className="col-span-20 md:col-span-5">
            <div className="h-[65%] mb-5">
              <RevenueCard />
            </div>
            <div className="h-[35%]">
              <SubscribersCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
