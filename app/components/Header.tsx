"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="p-5 lg:p-[2%] relative">
            <div className="container flex justify-between items-center mx-auto">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="https://storage.googleapis.com/photo_website/GV_logo_dark.png"
                            alt="Glafira Veretennikova Logo"
                            width={125}
                            height={125}
                            priority={true}
                        />
                    </Link>
                    <p className="ml-4">
                        <strong>Glafira Veretennikova</strong>
                    </p>
                </div>

                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 focus:outline-none"
                        aria-label="Toggle Navigation Menu"
                    >
                        <IoIosMenu className="w-8 h-8" />
                    </button>
                </div>

                <nav
                    aria-label="Mobile Navigation"
                    className={`absolute top-full z-50 justify-end text-end right-0 min-w-max bg-white transition-all duration-200 ease-in-out lg:hidden font-cuba ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <Link href="/portfolio" aria-label="View Portfolio" className="block p-4 lg:p-0">Portfolio</Link>
                    <Link href="/contacts" aria-label="Contact Information" className="block p-4 lg:p-0">Contacts</Link>
                    <Link href="/about" aria-label="Learn About Glafira Veretennikova" className="block p-4 lg:p-0">About</Link>
                    <Link href="/staging_tips" aria-label="Get Staging Tips" className="block p-4 lg:p-0">Staging Tips</Link>
                </nav>

                <nav aria-label="Main Navigation" className="hidden lg:flex space-x-4 gap-6 font-cuba">
                    <Link href="/portfolio" aria-label="View Portfolio">Portfolio</Link>
                    <Link href="/contacts" aria-label="Contact Information">Contacts</Link>
                    <Link href="/about" aria-label="Learn About Glafira Veretennikova">About</Link>
                    <Link href="/staging_tips" aria-label="Get Staging Tips">Staging Tips</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
