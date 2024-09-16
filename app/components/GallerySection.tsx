import { ColumnsPhotoAlbum } from "react-photo-album";
import ButtonDark from "./ButtonDark";
import photos from "../photos";

interface GallerySectionProps {
    openModal: (src: string) => void;
}

const GallerySection: React.FC<GallerySectionProps> = ({ openModal }) => {
    const randomizedPhotos = photos
        .sort(() => 0.5 - Math.random())
        .slice(0, 20);

    return (
        <section className="py-16 lg:py-32 flex flex-col justify-center items-center">
            <div className="container mx-auto px-4">
                <div className="lg:hidden">
                    <ColumnsPhotoAlbum photos={randomizedPhotos}
                        columns={2}
                        onClick={(e) => {
                            openModal(e.photo.src);
                        }} />
                </div>
                <div className="hidden lg:block">
                    <ColumnsPhotoAlbum photos={randomizedPhotos}
                        columns={3}
                        onClick={(e) => {
                            openModal(e.photo.src);
                        }} />
                </div>
            </div>
            <div className="mt-8">
                <ButtonDark text="Go to portfolio" src='/portfolio' />
            </div>
        </section>
    );
};

export default GallerySection;
