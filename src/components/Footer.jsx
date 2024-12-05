import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { boat, tecBlanco, vanttecBlanco } from '../assets';

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString();
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString();
    };

    return (
        <div className="text-center text-md">
            <div>Fecha: {formatDate(date)}</div>
            <div>Hora: {formatTime(date)}</div>
        </div>
    );
};

const Footer = () => {
    return (
        <section>
            <div className='h-fit flex sm:flex-row flex-col bg-black items-center'>
                <div className='sm:w-1/2 w-full flex flex-row p-8 pr-0'>
                    <div className="w-1/2 flex flex-col justify-evenly">
                        <div>
                            <p className='font-bold text-md'>Contacto</p>
                            <dl className='text-sm'>
                                <dt>Tecnologico de Monterrey</dt>
                                <dd>+52 81 8358 2000</dd>
                            </dl>
                        </div>
                        <div>
                            <p className='font-bold text-md sm:mt-0 mt-4'>Direccion</p>
                            <dl className='text-sm'>
                                <dt>Av. Eugenio Garza Sada 2501 Sur</dt>
                                <dd>Tecnológico 64700 Monterrey, N.L.</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="w-1/2 flex sm:flex-row flex-col justify-center">
                        <div className="sm:mt-0 mt-4">
                            <p className='font-bold text-md'>Navigation</p>
                            <div className='flex flex-col space-y-2'>
                                <a className='text-sm' href='/about'>About</a>
                                <a className='text-sm' href='/projects'>Projects</a>
                                <a className='text-sm' href='/research'>Research</a>
                                <a className='text-sm' href='/awards'>Awards</a>
                                <a className='text-sm' href='/sponsors'>Sponsors</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:w-1/2 w-full p-8 pl-0 flex flex-row'>
                    <div className="w-1/2 object-contain">
                        <img src={tecBlanco} alt="" className='h-[90px] p-4 filter place-self-center' style={{ filter: 'invert(35%) sepia(0%) saturate(0%) hue-rotate(264.436deg) brightness(100%) contrast(100%)' }} />
                        <Clock />
                    </div>
                    <div className="w-1/2">
                        <img src={vanttecBlanco} alt="" className='h-[100px] place-self-center filter' style={{ filter: 'invert(35%) sepia(0%) saturate(0%) hue-rotate(264.436deg) brightness(100%) contrast(100%)' }} />
                        <div className='flex flex-wrap space-x-4 mt-4 place-self-center'>
                            <a href='https://www.facebook.com/VantTec' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faFacebook} size='2x' />
                            </a>
                            <a href='https://twitter.com/vantTECmx' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faTwitter} size='2x' />
                            </a>
                            <a href='https://www.instagram.com/vanttec/' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faInstagram} size='2x' />
                            </a>
                            <a href="https://github.com/vanttec">
                                <FontAwesomeIcon icon={faGithub} size='2x' />
                            </a>
                            <a href="https://www.youtube.com/@vanttecmty">
                                <FontAwesomeIcon icon={faYoutube} size='2x' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;