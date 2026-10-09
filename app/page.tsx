"use client";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Hero from './components/Hero';
import CitationSection from './components/CitationSection';
import ServicesSection from './components/ServicesSection';
import StatsBand from "./components/StatsBand";
import FirmsDonut from "./components/FirmsDonut";
import PhotoAlbum from "./components/PhotoAlbum";
import ButtonDark from "./components/ButtonDark";
import AboutSection from './components/AboutSection';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";

import photos from "./photos";

const Page: React.FC = () => {
  const [index, setIndex] = useState(-1);
  const displayedPhotos = photos.slice(0, 20);

  return (
    <>
      <Fade damping={50}>
        <Hero
          imageUrl="https://storage.googleapis.com/photo_website/photo_website-30.jpg"
          imageAlt="Beautiful modern home in real estate photography"
          heading="Stunning Real Estate Photos"
          subheading="Professional real estate photography that makes your property stand out"
        />
        <CitationSection />
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-greige-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-cuba text-center mb-12">A few numbers I’m proud of</h2>
            <StatsBand />
            <div className="mt-12 text-center">
              <Link href="/journey" className="text-brand-600 hover:text-brand-700 font-semibold">
                See my full journey →
              </Link>
            </div>
          </div>
        </section>
        <ServicesSection />
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-cuba text-center mb-4">The real estate agencies I worked with</h2>
            <p className="text-center max-w-2xl mx-auto mb-10 text-neutral-600">
              From large agencies to small local offices — these are the teams that trust me with their listings.
            </p>
            <FirmsDonut />
          </div>
        </section>
        <section className="py-16 lg:py-32 flex flex-col justify-center items-center">
          <div className="container mx-auto px-4">
            <div className="lg:hidden">
              <PhotoAlbum photos={displayedPhotos}
                columns={2}
                onClick={({ index }) => setIndex(index)} />
            </div>
            <div className="hidden lg:block">
              <PhotoAlbum photos={displayedPhotos}
                columns={3}
                onClick={({ index }) => setIndex(index)} />
            </div>
          </div>
          <div className="mt-8">
            <ButtonDark text="Go to portfolio" src='/portfolio' />
          </div>
        </section>
        <AboutSection />
        <Lightbox
          slides={displayedPhotos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </Fade>
    </>
  );
};

export default Page;
