import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { tecBlanco, logo } from '../assets';

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="text-white/80 text-sm space-y-1">
            <div>{date.toLocaleDateString()}</div>
            <div>{date.toLocaleTimeString()}</div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10">
            <div className="container mx-auto px-4 py-8 sm:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Section - Contact & Navigation */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-3">Contact</h3>
                                <div className="space-y-2">
                                    <p className="text-white/80 text-sm">Tecnologico de Monterrey</p>
                                    <p className="text-white/80 text-sm">+52 81 8358 2000</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold text-lg mb-3">Address</h3>
                                <div className="space-y-2">
                                    <p className="text-white/80 text-sm">Av. Eugenio Garza Sada 2501 Sur</p>
                                    <p className="text-white/80 text-sm">Tecnológico 64700 Monterrey, N.L.</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-3">Navigation</h3>
                            <nav className="flex flex-col space-y-2">
                                {['About', 'Projects', 'Research', 'Awards', 'Sponsor'].map((item) => (
                                    <a
                                        key={item}
                                        href={`/#${item.toLowerCase()}`}
                                        className="text-white/80 text-sm hover:text-white transition-colors"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Right Section - Logos & Social */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* TEC Logo & Clock */}
                        <div className="flex flex-col items-center space-y-4">
                            <img
                                src={tecBlanco}
                                alt="TEC"
                                className="h-16 sm:h-20 object-contain"
                            />
                            <Clock />
                        </div>

                        {/* VantTEC Logo & Social */}
                        <div className="flex flex-col items-center space-y-4">
                            <img
                                src={logo}
                                alt="VantTEC"
                                className="h-16 sm:h-20 object-contain"
                            />

                            {/* Social Media Icons */}
                            <div className="grid grid-cols-5 gap-4">
                                {[
                                    { icon: faFacebook, url: 'https://www.facebook.com/VantTec' },
                                    { icon: faTwitter, url: 'https://twitter.com/vantTECmx' },
                                    { icon: faInstagram, url: 'https://www.instagram.com/vanttec/' },
                                    { icon: faGithub, url: 'https://github.com/vanttec' },
                                    { icon: faYoutube, url: 'https://www.youtube.com/@vanttecmty' }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/80 hover:text-white transition-colors"
                                    >
                                        <FontAwesomeIcon icon={social.icon} size="lg" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;