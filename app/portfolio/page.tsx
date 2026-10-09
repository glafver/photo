"use client";
import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Lightbox from "yet-another-react-lightbox";
import Hero from '../components/Hero';
import { Fade } from "react-awesome-reveal";
import PhotoAlbum from "../components/PhotoAlbum";
import photos, { categories, type Category } from "../photos";

type CategorySlug = Category | "all";

function PortfolioGallery() {
    const [filteredPhotos, setFilteredPhotos] = useState(photos);
    const [activeCategory, setActiveCategory] = useState<CategorySlug>("all");
    const [index, setIndex] = useState(-1);

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleCategoryChange = (categorySlug: string) => {
        setActiveCategory(categorySlug as CategorySlug);
        router.push(`?category=${categorySlug}`, { scroll: false });
    };

    useEffect(() => {
        const categorySlug = (searchParams.get("category") || "all") as CategorySlug;
        setActiveCategory(categorySlug);

        if (categorySlug === "all") {
            setFilteredPhotos(photos);
        } else {
            setFilteredPhotos(photos.filter((photo) => photo.category === categorySlug));
        }
    }, [searchParams]);

    return (
        <>
            <Fade>
                <Hero
                    imageUrl="https://storage.googleapis.com/photo_website/photo_website-26.jpg"
                    imageAlt="Beautiful modern home in real estate photography"
                    heading="Welcome to My Photography Journey"
                    subheading="I love capturing the essence of homes. Explore my portfolio to see the spaces that inspire me and the stories they tell."
                />
                <div className='md:hidden py-8 flex items-center gap-8 justify-center'>
                    <p className='font-bold'>Categories: </p>
                    <select
                        value={activeCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="border rounded p-2"
                    >
                        {categories.map((category) => (
                            <option key={category.slug} value={category.slug}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='container px-4 mx-auto hidden md:flex items-center flex-col md:flex-row justify-between py-16 md:py-24'>
                    {categories.map((category) => (
                        <button
                            key={category.slug}
                            type="button"
                            onClick={() => handleCategoryChange(category.slug)}
                            aria-pressed={activeCategory === category.slug}
                            className={`cursor-pointer transition duration-300 ease-in-out hover:text-stone-400 ${activeCategory === category.slug ? 'underline font-bold text-stone-800' : ''}`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                <div className='container mx-auto px-4 pb-16 lg:pb-32'>
                    <div className="lg:hidden">
                        <PhotoAlbum photos={filteredPhotos}
                            columns={2}
                            onClick={({ index }) => setIndex(index)} />
                    </div>
                    <div className="hidden lg:block">
                        <PhotoAlbum photos={filteredPhotos}
                            columns={3}
                            onClick={({ index }) => setIndex(index)} />
                    </div>
                </div>
            </Fade>
            <Lightbox
                slides={filteredPhotos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
            />
        </>
    );
}

const Page: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PortfolioGallery />
        </Suspense>
    );
};

export default Page;
