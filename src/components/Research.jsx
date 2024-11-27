import React from 'react';

const Carousel = () => {
  const images = [
    { src: "/1-rp-image.png", alt: "1.  Finite-time control for an Unmanned Surface Vehicle based on adaptive sliding mode strategy", info: "1.  Finite-time control for an Unmanned Surface Vehicle based on adaptive sliding mode strategy" },
    { src: "/2-rp-image.jpg", alt: "2. Adaptive dynamic programming and deep reinforcement learning for the control of an unmanned surface vehicle: Experimental results", info: "2. Adaptive dynamic programming and deep reinforcement learning for the control of an unmanned surface vehicle: Experimental results" },
    { src: "/3-rp-image.png", alt: "3. Guidance and Control Based on Adaptive Sliding Mode Strategy for a USV Subject to Uncertainties", info: "3. Guidance and Control Based on Adaptive Sliding Mode Strategy for a USV Subject to Uncertainties" },
    { src: "/4-rp-image.png", alt: "4. Adaptive Integral Terminal Sliding Mode Control for an Unmanned Surface Vehicle Against External Disturbances", info: "4. Adaptive Integral Terminal Sliding Mode Control for an Unmanned Surface Vehicle Against External Disturbances" },
    { src: "/5-rp-image.png", alt: "5. A Real-Time NMPC Guidance Law and Robust Control for an Autonomous Surface Vehicle", info: "5. A Real-Time NMPC Guidance Law and Robust Control for an Autonomous Surface Vehicle" },
    { src: "/7-rp-image.png", alt: "7. Control of an Unmanned Surface Vehicle Based on Adaptive Dynamic Programming and Deep Reinforcement Learning", info: "7. Control of an Unmanned Surface Vehicle Based on Adaptive Dynamic Programming and Deep Reinforcement Learning" },
    { src: "/8-rp-image.png", alt: "8. USV Path-Following Control Based On Deep Reinforcement Learning and Adaptive Control", info: "8. USV Path-Following Control Based On Deep Reinforcement Learning and Adaptive Control" },
  ];

  return (
    <div className="w-full min-h-full">
      <div className="carousel rounded-box">
        {images.map((image, index) => (
          <div key={index} className="carousel-item relative">
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-48 h-auto object-cover"
            />
            {/* Hover Information */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center px-4">{image.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Research = () => {
  return (
    <section className="w-full min-h-full mx-auto flex flex-col">
      <div className="mt-[80px] m-16">
        <h1 className="text-3xl sm:text-5xl font-bold font-roboto mb-6">
          Research
        </h1>
        <Carousel />
      </div>
    </section>
  );
};

export default Research;
