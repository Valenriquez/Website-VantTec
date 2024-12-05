import React, { useState } from 'react';
import { Card, CardFooter, Button } from "@nextui-org/react";
import { ansysInc, grupoSSC } from '../assets';

const SponsorCard = ({ name, logo }) => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <Card
      isFooterBlurred={true}
      radius="lg"
      className="border-none rounded-lg bg-slate-900/80 justify-center items-center"
      style={{ width: "300px", height: "300px"}}
    >
      <img src={logo} alt="" className='p-8'/>
      <CardFooter className="justify-between bg-black/70 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-lg bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{name}</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Know more
        </Button>
      </CardFooter>
    </Card>
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
          <SponsorCard name="Grupo SSC" logo={grupoSSC} />
        </div>
        <div className='flex-grow flex w-1/2 sm:h-[400px] justify-center items-center'>
          <SponsorCard name="AnsysInc" logo={ansysInc} />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;