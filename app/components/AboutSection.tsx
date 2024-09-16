import React from 'react';
import ButtonDark from './ButtonDark';

const title = "About Me";
const p_1 = `
    I’m passionate about capturing the unique beauty and personality of your home. 
    With a keen eye for detail and a love for creating stunning visuals, I bring a personal touch to every shoot. 
    Whether it’s the vibrant daylight that showcases your home’s lively spirit or the enchanting twilight that adds a cozy, inviting glow, 
    my goal is to highlight what makes your space truly special.`;

const AboutSection: React.FC = () => {
    return (
        <section className="py-16 lg:py-32 bg-neutral-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row items-center">
                    <div className="md:w-1/2 p-6">
                        <h3 className="text-xl font-semibold mb-2 font-cuba text-center">{title}</h3>
                        <p className="">{p_1}</p>
                        <ButtonDark text="Read more" src='/about' />
                    </div>
                    <div className="mb-12 h-full w-full md:w-1/2 flex justify-center md:justify-end">
                        <img
                            src="https://storage.googleapis.com/photo_website/about-1.jpg"
                            alt="Glafira Veretennikova | real estate photographer"
                            className="w-[70%] lg:w-1/2 object-cover rounded"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
