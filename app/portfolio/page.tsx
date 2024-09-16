"use client";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Modal from '../components/Modal';
import Hero from '../components/Hero';
import { Fade } from "react-awesome-reveal";
import { ColumnsPhotoAlbum } from "react-photo-album";
import photos from "../photos";

const categories = [
    { name: "All photos", slug: "all" },
    { name: "Dusk photos", slug: "dusk" },
    { name: "Kitchens", slug: "kitchen" },
    { name: "Bedrooms", slug: "bedroom" },
    { name: "Bathrooms", slug: "bathroom" },
    { name: "Living rooms", slug: "living" },
    { name: "Halls", slug: "hall" },
    { name: "Outside", slug: "outside" }
];

const Page: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [image, setImage] = useState('');
    const [filteredPhotos, setFilteredPhotos] = useState(photos);
    const [activeCategory, setActiveCategory] = useState('all');

    const router = useRouter();
    const searchParams = useSearchParams();

    const openModal = (src: string) => {
        setImage(src);
        setModalOpen(true);
    };

    const closeModal = () => {
        setImage('');
        setModalOpen(false);
    };

    const handleCategoryChange = (categorySlug: string) => {
        setActiveCategory(categorySlug);
        router.push(`?category=${categorySlug}`, { scroll: false });
    };

    useEffect(() => {
        const categorySlug = searchParams.get('category') || 'all';
        setActiveCategory(categorySlug);

        if (categorySlug === 'all') {
            setFilteredPhotos(photos);
        } else {
            setFilteredPhotos(photos.filter(photo => photo.category === categorySlug));
        }
    }, [searchParams]);

    return (
        <>
            <Fade>
                <Hero
                    imageUrl="https://storage.googleapis.com/photo_website/photo_website-26.jpg"
                    imageAlt="Beautiful modern home in real estate photography"
                    heading="Capture Stunning Real Estate Photos"
                    subheading="Professional real estate photography that makes your property stand out"
                />
                <div className='container px-4 mx-auto flex items-center flex-col md:flex-row justify-between py-16 md:py-24'>
                    {categories.map((category) => (
                        <a
                            key={category.slug}
                            onClick={() => handleCategoryChange(category.slug)}
                            className={`cursor-pointer ${activeCategory === category.slug ? 'underline' : ''}`}
                        >
                            {category.name}
                        </a>
                    ))}
                </div>
                <div className='container mx-auto px-4 pb-16 lg:pb-32'>
                    <div className="lg:hidden">
                        <ColumnsPhotoAlbum photos={filteredPhotos}
                            columns={2}
                            onClick={(e) => {
                                openModal(e.photo.src);
                            }} />
                    </div>
                    <div className="hidden lg:block">
                        <ColumnsPhotoAlbum photos={filteredPhotos}
                            columns={3}
                            onClick={(e) => {
                                openModal(e.photo.src);
                            }} />
                    </div>
                </div>
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
