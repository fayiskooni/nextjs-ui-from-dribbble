import { Play } from "lucide-react";
import Image from "next/image";

const AudioCard = () => {
  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden min-h-[220px]">
      <Image
        src="/Audio.jpg"
        alt="audio"
        fill
        className="object-cover"
        style={{ objectPosition: "40% center" }}
      />
      
      <div
        className="absolute bottom-0 w-full h-1/2 md:h-2/5"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
        }}
      />
      
      <div className="absolute flex justify-between bottom-0 w-full p-4 md:p-6 items-end z-10">
        <p className="text-base md:text-lg lg:text-xl font-semibold text-white leading-tight">
          Art Mastery <br />
          Journey
        </p>
        <div className="p-2 md:p-3 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
          <Play className="w-4 h-4 md:w-5 md:h-5 text-black ml-0.5" fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
