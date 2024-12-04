import React, { useState } from 'react';
import Slider from 'react-slick';
import {
    Card,
    CardHeader,
    CardFooter,
    Image,
    Button,
    Skeleton,
} from '@nextui-org/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Individual item component for the carousel
const CarouselItem = ({ image, height, isHoverable, isPressable, objectFit }) => {
    // State to manage hover effect
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="px-2">
            {/* NextUI Card component with updated styling */}
            <Card
                className={`w-full h-full relative overflow-hidden border-none ${objectFit ? "" : "m-3"}`}
                onMouseEnter={() => setIsHovered(isHoverable)} // Handle hover start
                onMouseLeave={() => setIsHovered(false)} // Handle hover end
                isPressable={isPressable}
                isHoverable
                style={{ height }}
                radius={"sm"}
            >
                {/* Card Header */}
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    {image.label && (
                        <p className="text-tiny text-white/60 uppercase font-bold">
                            {image.label}
                        </p>
                    )}
                    <h4 className="text-white font-medium text-lg text-left">{image.alt}</h4>
                </CardHeader>
                {/* Image component with hover effect */}
                <Image
                    removeWrapper
                    radius={"sm"}
                    src={image.src} // Image source URL
                    alt={image.alt} // Alternative text for the image
                    className={`z-0 w-full h-full object-cover transition-transform duration-300 ${
                        isHovered ? 'transform scale-105' : ''
                    } ${objectFit ? 'object-cover' : 'object-contain p-1'}`}
                    // Fallback skeleton while image loads
                    fallback={<Skeleton className="w-full h-full" />}
                />
            </Card>
        </div>
    );
};

// Main carousel component remains the same
const Carousel = ({ images, height = '300px', slidesToShow = 3, autoplay = true, speed = 300, slidesToScroll = 1, isHoverable= false, isPressable=false, autoplaySpeed= 0, objectFit=true, cssEase='', arrows=true}) => {
    // Settings for the react-slick slider
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Enable infinite looping
        speed, // Transition speed in milliseconds
        slidesToShow, // Number of slides to show at once
        autoplay,
        autoplaySpeed,
        slidesToScroll, // Number of slides to scroll per action
        swipeToSlide: true, // Enable swipe to slide
        arrows,
        cssEase,
        responsive: [
            {
                breakpoint: 1024, // Screen width for this setting
                settings: { slidesToShow: 2 }, // Show 2 slides at a time
            },
            {
                breakpoint: 600, // Screen width for this setting
                settings: { slidesToShow: 1, arrows: false }, // Show 1 slide at a time
            },
        ],
    };

    return (
        <Slider {...settings}>
            {/* Map through images array to render carousel items */}
            {images.map((image, index) => (
                <CarouselItem key={index} image={image} height={height} isHoverable={isHoverable} isPressable={isPressable} objectFit={objectFit}/>
            ))}
        </Slider>
    );
};

export default Carousel;
