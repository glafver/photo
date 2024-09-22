"use client";
import { Fade } from "react-awesome-reveal";
import Hero from './components/Hero';
import CitationSection from './components/CitationSection';
import ServicesSection from './components/ServicesSection';
import { ColumnsPhotoAlbum } from "react-photo-album";
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
        <ServicesSection />
        <section className="py-16 lg:py-32 flex flex-col justify-center items-center">
          <div className="container mx-auto px-4">
            <div className="lg:hidden">
              <ColumnsPhotoAlbum photos={displayedPhotos}
                columns={2}
                onClick={({ index }) => setIndex(index)} />
            </div>
            <div className="hidden lg:block">
              <ColumnsPhotoAlbum photos={displayedPhotos}
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
