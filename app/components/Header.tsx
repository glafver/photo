"use client";
import Link from 'next/link';
import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="py-3 px-5 lg:p-[2%] relative">
            <div className="container flex justify-between items-center mx-auto">
                <Link onClick={() => setIsMenuOpen(false)} href="/" aria-label="Main Page" className="flex flex-col items-center font-semibold hover:text-neutral-800">
                    <p className='tracking-[6px] text-3xl md:text-5xl'>GLAFIRA</p>
                    <p className='text-sm md:text-lg md:ms-[5px] tracking-[6px]'>PHOTOGRAPHY</p>
                </Link>
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
                    className={`absolute ps-20 top-full z-50 justify-end text-end right-0 min-w-max bg-neutral-200 transition-all duration-200 ease-in-out lg:hidden font-cuba ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <Link onClick={() => setIsMenuOpen(false)} href="/portfolio" aria-label="View Portfolio" className="block p-4 lg:p-0">Portfolio</Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/about" aria-label="Learn About Glafira Veretennikova" className="block p-4 lg:p-0">About</Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/contacts" aria-label="Contact Information" className="block p-4 lg:p-0">Contacts</Link>
                    <Link onClick={toggleMenu} href="/staging_tips" aria-label="Get Staging Tips" className="block p-4 lg:p-0">Staging Tips</Link>
                </nav>

                <nav aria-label="Main Navigation" className="hidden lg:flex space-x-4 gap-6 font-cuba">
                    <Link href="/portfolio" aria-label="View Portfolio">Portfolio</Link>
                    <Link href="/about" aria-label="Learn About Glafira Veretennikova">About</Link>
                    <Link href="/contacts" aria-label="Contact Information">Contacts</Link>
                    <Link href="/staging_tips" aria-label="Get Staging Tips">Staging Tips</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
