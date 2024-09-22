"use client";
import Hero from '../components/Hero';
import { Fade } from "react-awesome-reveal";

const title = "Hi, my name is Glafira";
const p1 = `I’m a passionate photographer who loves capturing the beauty of home design. Growing up in an artistic family — my mom was an art historian and my dad a furniture designer — meant I was surrounded by creativity from a young age. This upbringing gave me a keen eye for beauty and a natural sense of harmony.`;

const p2 = `Alongside my photography, I’m also a frontend developer. I love to combine my creative and technical skills. With over 15 years of experience in administration and management, I’ve honed my organizational and problem-solving abilities.`;

const p3 = `I’m 36 years old and currently based in Malmö, Sweden. I relocated here five years ago from St. Petersburg, Russia. Fluent in both Swedish and English, I enjoy connecting with people from different backgrounds. I believe in kindness, respect, and finding common ground, which guide me in both my personal and professional life.`;

const p4 = `Traveling and exploring new cultures are my other passions. I love seeing how different people live and drawing inspiration from the world around me. Whether I’m behind the camera or coding a new project, I aim to create beauty and share warmth in everything I do.`;


const Page: React.FC = () => {
    return (
        <>
            <Fade>
                <Hero
                    imageUrl="https://storage.googleapis.com/photo_website/photo_website-10.jpg"
                    imageAlt="Beautiful modern home in real estate photography"
                    heading="About Me"
                    subheading="I cherish the moments spent capturing the heart and soul of every home."
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
                            <h3 className="text-3xl font-semibold mb-12 font-cuba text-center leading-[2]">{title}</h3>
                            <p className="mb-6">{p1}</p>
                            <p className="mb-6">{p2}</p>
                            <p className="mb-6">{p3}</p>
                            <p className="mb-6">{p4}</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Page;;