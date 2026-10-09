"use client";
import Hero from '../components/Hero';
import { Fade } from "react-awesome-reveal";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { siteConfig } from '../../lib/site';
import ContactForm from '../components/ContactForm';

const Page: React.FC = () => {
    const { socials } = siteConfig;

    return (
        <>
            <Fade>
                <Hero
                    imageUrl="https://storage.googleapis.com/photo_website/photo_website-02.jpg"
                    imageAlt="Beautiful modern home in real estate photography"
                    heading="Let’s Connect!"
                    subheading="I’m excited to hear from you! Whether you’re interested in booking, don’t hesitate to reach out."
                />
                <section className="py-16 lg:py-32 bg-gradient-to-b from-white to-greige-100">
                    <div className='px-4 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <div className="text-center md:text-left mb-4 md:mb-0">
                                <h3 className='text-3xl font-semibold mb-6 font-cuba leading-[2]'>Contact me:</h3>
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
                                <h3 className='text-3xl font-semibold mt-12 mb-6 font-cuba leading-[2]'>Book me:</h3>
                                <p className='mb-4'>I am being part of a big team of professional photographers at <a href={siteConfig.bookingUrl} className='font-bold' target="_blank" rel="noopener noreferrer">SE360</a></p>
                                <p>To book me just contact them by email <a href={`mailto:${siteConfig.bookingEmail}`} className="font-bold"> {siteConfig.bookingEmail}</a></p>
                            </div>
                        </div>
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </Fade>
        </>
    );
};

export default Page;
