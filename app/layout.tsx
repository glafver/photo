import "./globals.css";
import "react-photo-album/columns.css";
import "yet-another-react-lightbox/styles.css";
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: "Glafira Veretennikova | Real Estate Photographer in Malmö & Lund",
  description:
    "Professional real estate photography in Malmö, Lund, and Skåne. High-quality property images by Glafira Veretennikova.",
  keywords:
    "real estate photography, bostadsfotograf, Malmö, Lund, Skåne, property photography, interior photography, Glafira Veretennikova",
  openGraph: {
    type: "website",
    title: "Glafira Veretennikova | Real Estate Photographer",
    description:
      "Professional real estate photography services in Malmö, Lund, and Skåne.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
