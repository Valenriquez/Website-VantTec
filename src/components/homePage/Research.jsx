/**
 * Research Component
 * Displays research publications in a responsive carousel
 * Features:
 * - Responsive design for all screen sizes
 * - Consistent styling with other components
 * - Animated transitions
 * - Accessible carousel navigation
 */
import React from 'react';
import { images } from '../../constants/index.js';
import Carousel from '../shared/Carousel.jsx';
import { motion } from 'framer-motion';

const Research = () => {
    return (
        <section id="research" className="xs:h-min-[100%] lg:h-min-[70%] text-white flex flex-col justify-center items-center w-full">
            <div className="container mx-auto px-2 sm:px-6 py-2 sm:py-12 space-y-6">
                {/* Animated Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                        RESEARCH PUBLICATIONS
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-light leading-relaxed">
                        Exploring unmanned surface vehicles through academic research and innovation
                    </p>
                </motion.div>

                {/* Responsive Carousel Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full bg-white/5 rounded-xl border border-white/10 p-4 sm:p-6"
                >
                    <Carousel
                        images={images} // Pass the array of research paper images
                        height="550px" // Set a fixed height for carousel items
                        slidesToShow={3} // Show 3 slides at once on large screens
                        autoplay={true}
                        autoplaySpeed={3000}
                        speed={400}
                        slidesToScroll={1}
                        isHoverable={true}
                        isPressable={true}
                        objectFit={true}
                        arrows={true}
                        customCardClass="bg-white/5 border border-white/10"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Research;