"use client";
import Hero from '../components/Hero';
import { Fade } from "react-awesome-reveal";

const Page: React.FC = () => {
    return (
        <>
            <Fade>
                <Hero
                    imageUrl="https://storage.googleapis.com/photo_website/photo_website-02.jpg"
                    imageAlt="Beautiful modern home in real estate photography"
                    heading="Capture Stunning Real Estate Photos"
                    subheading="Professional real estate photography that makes your property stand out"
                />
            </Fade>

        </>
    );
};

export default Page;