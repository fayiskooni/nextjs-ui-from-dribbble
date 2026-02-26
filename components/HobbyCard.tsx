import React, { useState } from "react";

const HobbyCard = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const interests = [
    "Architecture",
    "Beauty",
    "Business",
    "Car",
    "Communication",
    "Education",
  ];

  const toggleInterest = (interest: string) => {
    if (selected.includes(interest)) {
      setSelected(selected.filter((item) => item !== interest));
    } else {
      setSelected([...selected, interest]);
    }
  };

  return (
    <div className="bg-[#e5f048] rounded-3xl h-full flex flex-col p-4 md:p-6 shadow-sm overflow-hidden">
      <div className="text-sm md:text-base font-bold pb-2 md:pb-4">
        Choose your interests
      </div>

      <div className="flex flex-wrap gap-2 md:gap-2.5 text-xs md:text-sm flex-1 content-start mt-2">
        {interests.map((interest) => (
          <button
            key={interest}
            onClick={() => toggleInterest(interest)}
            className={`
              px-3 md:px-4 py-1.5 md:py-2 rounded-full font-medium border-2 
              transition-all duration-200 whitespace-nowrap
              ${
                selected.includes(interest)
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-black border-black hover:bg-black/10"
              }
            `}
          >
            <span className="mr-1 md:mr-1.5">
              {selected.includes(interest) ? "✓" : "+"}
            </span>
            {interest}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HobbyCard;
