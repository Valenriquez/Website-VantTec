import { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { videoBG, logo } from '../assets';
import { Button } from "@nextui-org/react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    // Refs for DOM elements
    const bottomNavRef = useRef(null);
    const videoContainerRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState('100vh');

    /**
     * Adjusts the video container height based on bottom navigation height
     */
    useEffect(() => {
        const adjustHeight = () => {
            if (bottomNavRef.current) {
                const navHeight = bottomNavRef.current.offsetHeight;
                const viewportHeight = window.innerHeight;
                setContainerHeight(`${viewportHeight}px`);

                if (videoContainerRef.current) {
                    videoContainerRef.current.style.height = `${viewportHeight - navHeight}px`;
                }
            }
        };

        // Initial adjustment and event listener setup
        adjustHeight();
        window.addEventListener('resize', adjustHeight);

        return () => window.removeEventListener('resize', adjustHeight);
    }, []);

    /**
     * Handles smooth scroll to content section
     */
    const handleScroll = () => {
        const navHeight = bottomNavRef.current?.offsetHeight || 0;
        const scrollTarget = window.innerHeight - navHeight;

        window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative" style={{ height: containerHeight }}>
            {/* Video Container */}
            <div
                ref={videoContainerRef}
                className="relative overflow-hidden"
            >
                <video
                    src={videoBG}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-[#00000066]" />
            </div>

            {/* Bottom Navigation Bar */}
            <div
                ref={bottomNavRef}
                className="absolute bottom-0 left-0 right-0 bg-black border-t border-white/10"
            >
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        {/* Logo and Text Section */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <img
                                src={logo}
                                alt="VantTEC Logo"
                                className="h-12 w-auto"
                            />

                            {/* Desktop Content */}
                            <div className="hidden lg:block">
                                <p className="text-white/90 font-light text-lg">
                                    Technology and Research Group Pioneering Work in Autonomous Vehicles
                                </p>
                            </div>

                            {/* Mobile/Tablet Typing Animation */}
                            <div className="block lg:hidden">
                                <TypeAnimation
                                    sequence={[
                                        'The Future of Technology',
                                        1000,
                                        'The Future of Mobility',
                                        1000,
                                        'The Future of Innovation',
                                        1000,
                                        'The Future of Research',
                                        1000,
                                        'Navigating the Future',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={30}
                                    repeat={Infinity}
                                    className="text-white/90 font-light text-base sm:text-lg text-center"
                                />
                            </div>
                        </div>

                        {/* Action Button */}
                        <Button
                            radius="lg"
                            className="bg-white/10 backdrop-blur-sm border border-white/10
                                     text-white font-light px-6 py-3
                                     hover:bg-white/20 transition-all duration-300
                                     min-w-[140px]"
                            onClick={handleScroll}
                        >
                            Explore More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;