import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import "react-photo-album/columns.css";
import "yet-another-react-lightbox/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteConfig } from "../lib/site";

const lexend = Lexend({
    subsets: ["latin"],
    variable: "--font-lexend",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "real estate photography",
        "bostadsfotograf",
        "Malmö",
        "Lund",
        "Skåne",
        "property photography",
        "interior photography",
        "Glafira Veretennikova",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [
            {
                url: "https://storage.googleapis.com/photo_website/photo_website-30.jpg",
                width: 1200,
                height: 800,
                alt: "Glafira Veretennikova real estate photography",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={lexend.variable}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
