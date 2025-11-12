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
    <div className="bg-[#e5f048] rounded-3xl h-full grid grid-rows-[3fr_7fr] pl-8 pr-8 pb-6">
      {/* Row 1 */}
      <div className="text-sm font-bold flex items-end pb-3 mt-5">
        Choose your interests
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap gap-2 text-sm items-start content-start">
        {interests.map((interest) => (
          <button
            key={interest}
            onClick={() => toggleInterest(interest)}
            className={`
              px-4 py-1.5 rounded-full font-medium border-2 
              transition-all duration-200
              ${
                selected.includes(interest)
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-black border-black hover:bg-black/5"
              }
            `}
          >
            <span className="mr-1.5">
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
