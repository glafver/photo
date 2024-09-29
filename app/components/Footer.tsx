import React from 'react';
import Link from 'next/link';
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-800 text-neutral-100 pt-8 pb-8">
            <div className="container mx-auto px-4">

                <div className="flex gap-8 flex-col md:flex-row justify-between items-center md:items-start">
                    <Link href="/" aria-label="Main Page" className="flex flex-col items-center font-semibold hover:text-neutral-100">
                        <p className='tracking-[6px] text-3xl'>GLAFIRA</p>
                        <p className='text-sm tracking-[6px]'>PHOTOGRAPHY</p>
                    </Link>
                    <div className="flex flex-col justify-center items-center md:items-start">
                        <Link href="/portfolio" aria-label="View Portfolio">Portfolio</Link>
                        <Link href="/about" aria-label="Learn About Glafira Veretennikova">About</Link>
                        <Link href="/contacts" aria-label="Contact Information">Contacts</Link>
                        <Link href="/staging_tips" aria-label="Get Staging Tips">Staging Tips</Link>
                    </div>

                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <div className="flex justify-center md:justify-start gap-3 items-center">
                            <MdOutlineEmail />
                            <a
                                href="mailto:glafira.se@gmail.com"
                                className=""
                            >
                                glafira.se@gmail.com
                            </a>
                        </div>
                        <div className="mb-1 justify-center md:justify-start flex gap-3 items-center">
                            <MdLocalPhone />
                            <a
                                href="tel:+46760558355"
                                className=""
                            >
                                +46760558355
                            </a>
                        </div>
                        <div className='mb-1 flex gap-2 justify-center md:justify-start items-center'>
                            <a
                                href="https://www.instagram.com/glafira_foto/"
                                className="text-xl"
                            >
                                <IoLogoInstagram />
                            </a>
                            <a
                                href="https://www.facebook.com/glafver"
                                className=""
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/glafver/"
                                className="text-xl"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                        <p className=" text-neutral-600">
                            {new Date().getFullYear()}
                            <a className="ms-3" href="https://www.linkedin.com/in/glafver/">by @glafver</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
