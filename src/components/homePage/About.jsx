/**
 * About Page Component with responsive design
 * Includes stats, carousel and company showcase
 *
 * Breakpoints:
 * Mobile: < 640px
 * Tablet: 640px - 1024px
 * Desktop: > 1024px
 */

import React from 'react';
import { motion } from 'framer-motion';
import { home_aboutus_images, home_about_us_companies_images } from "../../constants/index.js";
import { Trophy, Users, FileText, Award } from 'lucide-react';
import Carousel from "../shared/Carousel.jsx";

/**
 * BigStats Component
 * Displays team statistics in a responsive grid
 */
const BigStats = () => {
    const stats = [
        {
            icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 opacity-80" />,
            number: "7",
            label: "International Competitions"
        },
        {
            icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 opacity-80" />,
            number: "18",
            label: "International Awards"
        },
        {
            icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 opacity-80" />,
            number: "73",
            label: "Members"
        },
        {
            icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 opacity-80" />,
            number: "12",
            label: "Papers Published"
        },
    ];

    return (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="bg-white/5 rounded-xl p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4 border border-white/10"
                >
                    {stat.icon}
                    <div>
                        <p className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                            {stat.number}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400 font-light line-clamp-2">
                            {stat.label}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

/**
 * FirstCarousel Component
 * Main image carousel with responsive height adjustments
 */
const FirstCarousel = () => (
    <div className="w-full">
        <Carousel
            images={home_aboutus_images}
            slidesToShow={1}
            height="h-max-[40%]"
            arrows={false}
            autoplay={true}
            autoplaySpeed={3000}
            speed={400}
            isHoverable={true}
            objectFit={true}
        />
    </div>
);

/**
 * SecondCarousel Component
 * Companies showcase with responsive adjustments
 */
const SecondCarousel = () => (
    <div className="flex flex-col space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl tracking-tight">
            Our alumni have established themselves in leading technology and research institutions worldwide
        </h2>
        <div className="w-full overflow-hidden h-[80px]">
            <Carousel
                images={home_about_us_companies_images}
                isHoverable={false}
                arrows={false}
                autoplay={true}
                autoplaySpeed={0}
                speed={7000}
                slidesToShow={6}
                height="80px"
                width="80px"
                objectFit={false}
                cssEase="linear"
            />
        </div>
    </div>
);

/**
 * Main About Component
 * Handles overall layout and responsive behavior
 */
const About = () => {
    return (
        <div className="xs:h-min-[100%] lg:h-min-[70%] min text-white flex flex-col justify-center items-center w-full h-full">
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16">
                {/* Main content section with responsive layout */}
                <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8 xl:gap-12">
                    {/* Text and Stats Content - Always on top for mobile/tablet */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                            ABOUT US
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-light mb-6 leading-relaxed">
                            Pioneering autonomous vehicle technology with innovation, research, and passion.
                            We're not just building vehicles; we're shaping the future of transportation.
                        </p>

                        <BigStats />
                    </motion.div>

                    {/* Carousel - Moves below on tablet/mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full"
                    >
                        <FirstCarousel />
                    </motion.div>
                </div>

                {/* Companies Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full"
                >
                    <SecondCarousel />
                </motion.div>
            </div>
        </div>
    );
};

export default About;