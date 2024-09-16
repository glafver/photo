"use client";
import Hero from '../components/Hero';
import { Fade } from "react-awesome-reveal";

const title = "Hi, my name is Glafira";
const p_1 = `
    I’m passionate about capturing the unique beauty and personality of your home. 
    With a keen eye for detail and a love for creating stunning visuals, I bring a personal touch to every shoot. 
    Whether it’s the vibrant daylight that showcases your home’s lively spirit or the enchanting twilight that adds a cozy, inviting glow, 
    my goal is to highlight what makes your space truly special.`;

const Page: React.FC = () => {
    return (
        <>
            <Fade>
                <Hero
                    imageUrl="https://storage.googleapis.com/photo_website/photo_website-10.jpg"
                    imageAlt="Beautiful modern home in real estate photography"
                    heading="Capture Stunning Real Estate Photos"
                    subheading="Professional real estate photography that makes your property stand out"
                />
            </Fade>
            <section className="py-16 lg:py-32 bg-neutral-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col-reverse md:flex-row items-center">
                        <div className="mb-12 h-full w-full md:w-1/2 flex justify-center md:justify-end">
                            <img
                                src="https://storage.googleapis.com/photo_website/about-2.jpg"
                                alt="Glafira Veretennikova | real estate photographer"
                                className="w-[70%] m-auto object-cover rounded"
                            />
                        </div>
                        <div className="md:w-1/2 p-6">
                            <h3 className="text-3xl font-semibold mb-12 font-cuba text-center">{title}</h3>
                            <p className="mb-12">{p_1}</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Page;