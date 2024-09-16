"use client";
import { Fade } from "react-awesome-reveal";
import Hero from './components/Hero';
import CitationSection from './components/CitationSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import { useState } from 'react';
import Modal from './components/Modal';

const Page: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState('');
  const openModal = (src: string) => {
    setImage(src);
    setModalOpen(true);
  };
  const closeModal = () => {
    setImage('');
    setModalOpen(false);
  };
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
        <GallerySection openModal={openModal} />
        <AboutSection />
      </Fade>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={image}
      />
    </>
  );
};

export default Page;
