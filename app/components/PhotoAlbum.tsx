"use client";
import Image from "next/image";
import { ColumnsPhotoAlbum } from "react-photo-album";
import type { Photo as AlbumPhoto, RenderImage } from "react-photo-album";

// Render each gallery photo through the Next.js Image optimizer so images are
// resized to their display size and served as WebP/AVIF instead of full-res JPEGs.
const renderImage: RenderImage = (props, { photo, width }) => (
    <Image
        src={props.src}
        alt={props.alt ?? ""}
        title={props.title}
        width={photo.width}
        height={photo.height}
        sizes={`${Math.round(width)}px`}
        quality={80}
        className="react-photo-album--image"
    />
);

interface PhotoAlbumProps {
    photos: AlbumPhoto[];
    columns: number;
    onClick: (params: { index: number }) => void;
}

const PhotoAlbum: React.FC<PhotoAlbumProps> = ({ photos, columns, onClick }) => (
    <ColumnsPhotoAlbum
        photos={photos}
        columns={columns}
        onClick={onClick}
        render={{ image: renderImage }}
    />
);

export default PhotoAlbum;
