import React, { useState } from 'react';
import { Card, Modal, Button, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { motion } from 'framer-motion';

const sponsorsData = [
    {
        id: 1,
        name: "Tec de Monterrey",
        logo: "/companies_logo/logo-tec-de-monterrey.webp",
        description: "Educational partner providing resources and support for robotics research.",
        website: "https://tec.mx",
        partnershipYear: "2017",
        contributions: [
            "Research facilities",
            "Technical mentorship",
            "Educational resources"
        ]
    },
    {
        id: 2,
        name: "Ansys",
        logo: "/companies_logo/Ansys_logo_(2019).svg.png",
        description: "Educational partner providing resources and support for robotics research.",
        website: "https://www.ansys.com/",
        partnershipYear: "2017",
        contributions: [
            "Research facilities",
            "Technical mentorship",
            "Educational resources"
        ]
    },
    {
        id: 3,
        name: "Grupo SCC",
        logo: "/companies_logo/logo_grupossc.webp",
        description: "Educational partner providing resources and support for robotics research.",
        website: "https://www.grupossc.com/",
        partnershipYear: "2017",
        contributions: [
            "Research facilities",
            "Technical mentorship",
            "Educational resources"
        ]
    }
];

const SponsorCard = ({ sponsor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <motion.div
                className="w-full"
            >
                <Card
                    isPressable
                    isHoverable={true}
                    onPress={() => setIsOpen(true)}
                    className="w-full aspect-square bg-white shadow-md"
                    radius="lg"
                    onMouseEnter={() => setIsHovered(true)} // Handle hover start
                    onMouseLeave={() => setIsHovered(false)} // Handle hover end
                >
                    <div className="p-4 h-full w-full flex items-center justify-center">
                        <img
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            className={`max-w-[70%] max-h-[70%] object-contain transition-transform duration-300 ${
                        isHovered ? 'transform scale-105' : ''
                    }`}
                        />
                    </div>
                </Card>
            </motion.div>

            <Modal
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                size="2xl"
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        {sponsor.name}
                    </ModalHeader>
                    <ModalBody>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                                <img
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} logo`}
                                    className="max-w-full max-h-48 object-contain"
                                />
                            </div>
                            <div className="space-y-4">
                                <p>{sponsor.description}</p>
                                <div>
                                    <h4 className="font-medium mb-2">Contributions:</h4>
                                    <ul className="list-disc list-inside">
                                        {sponsor.contributions.map((contribution, idx) => (
                                            <li key={idx}>{contribution}</li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Partnership since: {sponsor.partnershipYear}
                                </p>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            variant="ghost"
                            onPress={() => window.open(sponsor.website, '_blank')}
                        >
                            Visit Website
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

const Sponsors = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-left mb-12"
                >
                    <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
                        Our Sponsors
                    </h2>
                    <p className="text-xl text-gray-200 font-light mb-6 leading-relaxed">
                        Partnering with industry leaders to drive innovation in autonomous robotics
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sponsorsData.map((sponsor) => (
                        <SponsorCard key={sponsor.id} sponsor={sponsor} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;