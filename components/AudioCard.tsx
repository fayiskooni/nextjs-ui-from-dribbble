import { Play } from "lucide-react";
import Image from "next/image";

const AudioCard = () => {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <Image
        src="/Audio.jpg"
        alt="audio"
        fill
        className="object-cover"
        style={{ objectPosition: "40% center" }}
      />
      <div className="absolute flex justify-between bottom-1 w-full p-5 items-center">
        <p className="text-lg font-semibold text-white z-10">
          Art Mastery <br />
          Journey
        </p>
        <div className="p-2.5 rounded-full bg-white flex items-center justify-center">
          <Play className="w-4 h-4 text-black" fill="none" strokeWidth={2.5} />
        </div>
      </div>

      <div
        className="absolute bottom-0 w-full h-3/15 backdrop-blur-md"
        style={{
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />
    </div>
  );
};

export default AudioCard;
