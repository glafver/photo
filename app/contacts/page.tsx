"use client";
import Hero from '../components/Hero';
import { Fade } from "react-awesome-reveal";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";

const contactsMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.599104369378!2d13.00075931592569!3d55.60587398052919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465397f63e1619ab%3A0x259675b1d673668b!2sVagnmakarebyn%203C%2C%20213%2077%20Malm%C3%B6%2C%20Sweden!5e0!3m2!1sen!2sus!4v1631293421931!5m2!1sen!2sus";

const Page: React.FC = () => {
    return (
        <>
            <Fade>
                <Hero
                    imageUrl="https://storage.googleapis.com/photo_website/photo_website-02.jpg"
                    imageAlt="Beautiful modern home in real estate photography"
                    heading="Let’s Connect!"
                    subheading="I’m excited to hear from you! Whether you’re interested in booking, don’t hesitate to reach out."
                />
                <section className="py-16 lg:py-32 bg-neutral-200">
                    <div className='px-4 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <div className="text-center md:text-left mb-4 md:mb-0">
                                <h3 className='text-3xl font-semibold mb-6 font-cuba leading-[2]'>Contact me:</h3>
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
                                <h3 className='text-3xl font-semibold mt-12 mb-6 font-cuba leading-[2]'>Book me:</h3>
                                <p className='mb-4'>I am being part of a big team of professional photographers at <a href="https://se360.se/" className='font-bold'>SE360</a></p>
                                <p>To book me just contact them by email <a href="mailto:bilder@se360.se" className="font-bold"> bilder@se360.se</a></p>
                            </div>
                        </div>
                        <div>
                            <iframe
                                src={contactsMap}
                                width="100%"
                                height="450"
                                className="border-0"
                                allowFullScreen={true}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </Fade >
        </>
    );
};

export default Page;
