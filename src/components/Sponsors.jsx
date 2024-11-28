import React, { useState } from 'react'
import { boat } from '../assets'


const SponsorCard = ({ name, logo }) => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="relative w-1/2 flex flex-col justify-center items-center p-4 pb-0 cursor-pointer" onClick={handleClick}>
      <img
        src={logo}
        alt={name}
        className={`w-full h-full object-cover transition duration-300 ease-in-out ${showText ? 'brightness-50' : ''}`}
      />
      {showText && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <p className="text-white text-center">{name}</p>
        </div>
      )}
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className='flex flex-col'>
      <h1 className="text-3xl sm:text-5xl font-bold font-roboto mb-6 ml-10">
        Sponsors
      </h1>
      <div className='m-8 mb-0 flex flex-row'>
        <SponsorCard name="Sponsor 1" logo={boat} />
        <SponsorCard name="Sponsor 1" logo={boat} />
      </div>
    </div>

  )
}

export default Sponsors