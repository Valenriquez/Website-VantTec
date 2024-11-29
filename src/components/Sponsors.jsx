import React, { useState } from 'react'
import { boat } from '../assets'


const SponsorCard = ({ name, logo }) => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="relative w-fit h-full flex flex-col justify-center items-center pb-0 cursor-pointer" onClick={handleClick}>
      <img
        src={logo}
        alt={name}
        className={`w-full h-full object-cover p-4 transition duration-300 ease-in-out ${showText ? 'brightness-50' : 'hover:brightness-50'}`}
      />
      <div className={`absolute inset-0 flex justify-center items-center bg-black transition-all duration-300 ${showText ? 'bg-opacity-85' : 'bg-opacity-0 hover:bg-opacity-50'}`}>
        <p className={`text-white text-center transition-all duration-300 ${showText ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}>{name}</p>
      </div>
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className='flex flex-col'>
      <h1 className="text-3xl sm:text-5xl font-bold font-roboto mb-4 ml-10">
        Sponsors
      </h1>
      <div className='m-8 mb-0 flex flex-row flex-grow'>
        <div className='flex-grow flex w-1/2 sm:h-[400px] justify-center items-center'>
          <SponsorCard name="Sponsor 1" logo={boat} />
        </div>
        <div className='flex-grow flex w-1/2 sm:h-[400px] justify-center items-center'>
          <SponsorCard name="Sponsor 2" logo={boat} />
        </div>
      </div>
    </div>
  )
}

export default Sponsors