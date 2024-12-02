import { section } from 'framer-motion/client';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <section>
            <div className='h-fit flex sm:flex-row flex-col bg-black'>
                <div className='sm:w-3/5 w-full flex flex-row p-8'>
                    <div className="w-1/2">
                        <p className='font-bold text-lg'>Contacto</p>
                        <dl className=''>
                            <dt>Tecnologico de Monterrey</dt>
                            <dd>+52 81 0000 0000</dd>
                        </dl>

                        <p className='font-bold text-lg mt-4'>Direccion</p>
                        <dl className=''>
                            <dt>Pais Calle Ciudad</dt>
                            <dd>Codigo Postal, Numero</dd>
                        </dl>
                    </div>
                    <div className="w-1/2 flex sm:flex-row flex-col">
                        <div className="w-1/2">
                            <p className='font-bold text-lg'>Links</p>
                            <ul>
                                <li>Link 1</li>
                                <li>Link 2</li>
                                <li>Link 3</li>
                            </ul>
                        </div>
                        <div className="w-1/2 sm:mt-0 mt-4">
                            <p className='font-bold text-lg'>Navigation</p>
                            <div className='flex flex-col space-y-2'>
                                <a href='/about'>About</a>
                                <a href='/projects'>Projects</a>
                                <a href='/research'>Research</a>
                                <a href='/awards'>Awards</a>
                                <a href='/sponsors'>Sponsors</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:w-2/5 w-full p-8'>
                    <p>Redes Sociales</p>
                    <div className='flex flex-wrap space-x-4 mt-4'>
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
        </section>
    )
}

export default Footer;