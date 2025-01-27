import React, { useState } from "react";
import { ansysInc, grupoSSC, mercalabs, alwayssunny, mecalabs } from "../../assets";

const SponsorCard = ({ name, logo }) => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center pb-0 cursor-pointer w-32 h-32" // Fixed width and height
      onClick={handleClick}
    >
      <img
        src={logo}
        alt={name}
        className={`w-full h-full object-contain p-4 transition duration-300 ease-in-out ${
          showText ? "brightness-50" : "hover:brightness-50"
        }`}
      />
      <div
        className={`absolute inset-0 flex justify-center items-center bg-black transition-all duration-300 ${
          showText ? "bg-opacity-85" : "bg-opacity-0 hover:bg-opacity-50"
        }`}
      >
        <p
          className={`text-white text-center transition-all duration-300 ${
            showText ? "opacity-100" : "opacity-0 hover:opacity-100"
          }`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

const Sponsors = () => {
  return (
    <>
      <section id="sponsors">
        <div className="flex flex-col">
          <h2 className="text-2xl text-white font-thin mb-6 text-center">Sponsors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Consistent sizing for all SponsorCard components */}
            <div className="flex justify-center items-center">
              <SponsorCard name="Grupo SSC" logo={grupoSSC} />
            </div>
            <div className="flex justify-center items-center">
              <SponsorCard name="AnsysInc" logo={ansysInc} />
            </div>
            <div className="flex justify-center items-center">
              <SponsorCard name="Merca Labs" logo={mecalabs} />
            </div>
            <div className="flex justify-center items-center">
              <SponsorCard name="Always Sunny" logo={alwayssunny} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
