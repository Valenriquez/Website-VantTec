import React from 'react'; // Import React for component creation
import { images } from '../constants'; // Import image data from constants file
import Carousel from './shared/carousel'; // Import the custom Carousel component

/**
 * Research Component
 * Displays a carousel of research publication images
 * Uses predefined images from constants to showcase research papers
 * @returns {JSX.Element} Rendered Research component with carousel
 */
const Research = () => {
    return (
        // Container with responsive padding and centered content
        <div className="container mx-auto px-4 py-8">
            {/* Section title */}
            <h2 className="text-2xl text-white font-thin mb-6 text-center">
                Research Publications on Unmanned Surface Vehicles
            </h2>

            {/* Carousel component with custom configuration */}
            <Carousel
                images={images} // Pass the array of research paper images
                height="550px" // Set a fixed height for carousel items
                slidesToShow={3} // Show 3 slides at once on large screens
                autoplay={true}
                slidesToScroll={1}
                isHoverable={true}
                isPressable={true}
            />
        </div>
    );
};

export default Research; // Export the Research component