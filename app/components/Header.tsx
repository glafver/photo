"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { IoIosMenu } from 'react-icons/io';
import { siteConfig } from '../../lib/site';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (href: string) => pathname === href;

    return (
        <header className="py-3 px-5 lg:p-[2%] relative">
            <div className="container flex justify-between items-center mx-auto">
                <Link onClick={closeMenu} href="/" aria-label="Main Page" className="flex flex-col items-center font-semibold hover:text-neutral-800">
                    <p className='tracking-[6px] text-3xl md:text-5xl'>GLAFIRA</p>
                    <p className='text-sm md:text-lg md:ms-[5px] tracking-[6px]'>PHOTOGRAPHY</p>
                </Link>
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 focus:outline-none"
                        aria-label="Toggle Navigation Menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        <IoIosMenu className="w-8 h-8" />
                    </button>
                </div>

                <nav
                    id="mobile-navigation"
                    aria-label="Mobile Navigation"
                    className={`absolute ps-20 top-full z-50 justify-end text-end right-0 min-w-max bg-neutral-200 transition-all duration-200 ease-in-out lg:hidden font-cuba ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    {siteConfig.navLinks.map((link) => (
                        <Link
                            key={link.href}
                            onClick={closeMenu}
                            href={link.href}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={`block p-4 lg:p-0 ${isActive(link.href) ? 'font-bold underline' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <nav aria-label="Main Navigation" className="hidden lg:flex space-x-4 gap-6 font-cuba">
                    {siteConfig.navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={isActive(link.href) ? 'underline font-bold text-stone-800' : ''}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
