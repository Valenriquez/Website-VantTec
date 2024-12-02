import React from 'react';
import { images } from '../constants';


const Carousel = () => {
  return (
    <div className="w-full min-h-full">
      <div className="carousel rounded-box w-full sm:w-auto">
        {images.map((image, index) => (
          <div key={index} className="carousel-item relative p-8">
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-48 h-auto object-cover rounded-xl"
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
      <div className="mt-[80px] m-0 sm:m-16">
        <h1 className="text-3xl sm:text-5xl font-bold font-roboto mb-6">
          Research
        </h1>
        <Carousel />
      </div>
    </section>
  );
};

export default Research;
