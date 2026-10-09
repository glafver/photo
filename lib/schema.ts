import { siteConfig } from "./site";

const sameAs = [
    siteConfig.socials.instagram.url,
    siteConfig.socials.facebook.url,
    siteConfig.socials.linkedin.url,
];

export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Real Estate Photographer",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    url: siteConfig.url,
    image: "https://storage.googleapis.com/photo_website/about-1.jpg",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Malmö",
        addressRegion: "Skåne",
        addressCountry: "SE",
    },
    sameAs,
};

export const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} Photography`,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: "https://storage.googleapis.com/photo_website/photo_website-30.jpg",
    priceRange: "$$",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Malmö",
        addressRegion: "Skåne",
        addressCountry: "SE",
    },
    areaServed: ["Malmö", "Lund", "Skåne"],
    sameAs,
    founder: { "@type": "Person", name: siteConfig.name },
};
