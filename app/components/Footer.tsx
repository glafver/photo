import React from 'react';
import Link from 'next/link';
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { siteConfig } from '../../lib/site';

const Footer: React.FC = () => {
    const { socials } = siteConfig;

    return (
        <footer className="bg-neutral-800 text-neutral-100 pt-8 pb-8">
            <div className="container mx-auto px-4">
                <div className="flex gap-8 flex-col md:flex-row justify-between items-center md:items-start">
                    <Link href="/" aria-label="Main Page" className="flex flex-col items-center font-semibold hover:text-neutral-100">
                        <p className='tracking-[6px] text-3xl'>GLAFIRA</p>
                        <p className='text-sm tracking-[6px]'>PHOTOGRAPHY</p>
                    </Link>
                    <div className="flex flex-col justify-center items-center md:items-start">
                        {siteConfig.navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <div className="flex justify-center md:justify-start gap-3 items-center">
                            <MdOutlineEmail />
                            <a href={`mailto:${siteConfig.email}`}>
                                {siteConfig.email}
                            </a>
                        </div>
                        <div className="mb-1 justify-center md:justify-start flex gap-3 items-center">
                            <MdLocalPhone />
                            <a href={siteConfig.phoneHref}>
                                {siteConfig.phone}
                            </a>
                        </div>
                        <div className='mb-1 flex gap-2 justify-center md:justify-start items-center'>
                            <a href={socials.instagram.url} aria-label={socials.instagram.label} target="_blank" rel="noopener noreferrer" className="text-xl">
                                <IoLogoInstagram />
                            </a>
                            <a href={socials.facebook.url} aria-label={socials.facebook.label} target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href={socials.linkedin.url} aria-label={socials.linkedin.label} target="_blank" rel="noopener noreferrer" className="text-xl">
                                <FaLinkedin />
                            </a>
                        </div>
                        <p className="text-neutral-600">
                            {new Date().getFullYear()}
                            <a className="ms-3" href={socials.linkedin.url}>by @glafver</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
