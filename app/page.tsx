"use client";
import { House, Radius, RotateCcw, Search, Video, Menu, X } from "lucide-react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="p-4 md:p-6 lg:p-8 flex flex-col xl:flex-row gap-4 lg:gap-6 bg-slate-100 min-h-screen">
      {/* Mobile Topbar */}
      <div className="xl:hidden flex items-center justify-between bg-white rounded-3xl p-4 md:p-6 shadow-sm">
        <Radius
          className="bg-blue-500 text-white p-2 rounded-2xl"
          size={48}
        />
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-3 bg-gray-100 rounded-2xl hover:bg-gray-200 transition"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "flex" : "hidden"
        } xl:flex flex-col bg-white rounded-3xl relative xl:sticky xl:top-8 xl:h-[calc(100vh-64px)] z-20 w-full xl:w-auto shrink-0 shadow-sm`}
      >
        <div className="flex gap-1.5 m-4 md:m-6 shrink-0 relative">
          <span className="bg-red-500 rounded-full w-2.5 h-2.5"></span>
          <span className="bg-yellow-500 rounded-full w-2.5 h-2.5"></span>
          <span className="bg-green-500 rounded-full w-2.5 h-2.5"></span>
        </div>
        <div className="flex flex-col xl:flex-col flex-1 p-4 md:p-6 pt-0 md:pt-0 relative justify-between gap-6 xl:gap-0 h-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Radius
            className="hidden xl:block bg-blue-500 text-white p-2.5 rounded-2xl"
            size={56}
          />
          <div className="flex flex-row xl:flex-col items-center justify-center mt-0 xl:mt-12 gap-6 xl:gap-8 text-gray-400">
            <House
              className={
                click === 0
                  ? "bg-black text-white rounded-2xl p-2.5 cursor-pointer shadow-md"
                  : "cursor-pointer hover:text-black transition p-2.5"
              }
              size={click === 0 ? 50 : 44}
              onClick={() => setClick(0)}
            />
            <Search
              className={
                click === 1
                  ? "bg-black text-white rounded-2xl p-2.5 cursor-pointer shadow-md"
                  : "cursor-pointer hover:text-black transition p-2.5"
              }
              size={click === 1 ? 50 : 44}
              onClick={() => setClick(1)}
            />
            <RotateCcw
              className={
                click === 2
                  ? "bg-black text-white rounded-2xl p-2.5 cursor-pointer shadow-md"
                  : "cursor-pointer hover:text-black transition p-2.5"
              }
              size={click === 2 ? 50 : 44}
              onClick={() => setClick(2)}
            />
            <Video
              className={
                click === 3
                  ? "bg-black text-white rounded-2xl p-2.5 cursor-pointer shadow-md"
                  : "cursor-pointer hover:text-black transition p-2.5"
              }
              size={click === 3 ? 50 : 44}
              onClick={() => setClick(3)}
            />
          </div>
          <div className="flex flex-row xl:flex-col items-center justify-center mt-2 xl:mt-12 gap-4 xl:gap-6">
            <Avatar className="h-10 w-10 md:h-12 md:w-12 xl:h-14 xl:w-14">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-10 w-10 md:h-12 md:w-12 xl:h-14 xl:w-14">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-10 w-10 md:h-12 md:w-12 xl:h-14 xl:w-14">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-2 xl:mt-10 mb-4 xl:mb-0 flex flex-col items-center justify-center">
            <span className="hidden xl:flex border-b border-gray-200 w-full mb-6"></span>
            <Avatar className="h-10 w-10 md:h-12 md:w-12 xl:h-14 xl:w-14 ring-2 ring-gray-100 ring-offset-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex-1 w-full flex flex-col gap-4 lg:gap-6 min-w-0">
        {/* Top row cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          <div className="lg:col-span-6 w-full h-full min-h-[250px] md:min-h-[300px]">
            <VideoCard />
          </div>
          <div className="lg:col-span-3 bg-white rounded-3xl w-full h-full shadow-sm">
            <ProfileCard />
          </div>
          <div className="lg:col-span-3 rounded-3xl w-full h-full min-h-[200px] lg:min-h-0">
            <AudioCard />
          </div>
        </div>

        {/* Bottom row cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 xl:flex-1">
          <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6 w-full h-full">
            <div className="flex-1 w-full min-h-[300px]">
              <PaymentCard />
            </div>
            <div className="w-full shrink-0">
              <SearchCard />
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6 w-full h-full">
            <div className="flex-[0.7] w-full min-h-[250px]">
              <GraphCard />
            </div>
            <div className="flex-[0.3] w-full min-h-[160px]">
              <HobbyCard />
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-6 w-full h-full">
            <div className="flex-[0.6] w-full min-h-[220px]">
              <RevenueCard />
            </div>
            <div className="flex-[0.4] w-full min-h-[160px]">
              <SubscribersCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;

