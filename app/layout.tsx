import "./globals.css";
import "react-photo-album/columns.css";
import "yet-another-react-lightbox/styles.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Professional real estate photography in Malmö, Lund, and Skåne. High-quality property images by Glafira Veretennikova."
        />
        <meta
          name="keywords"
          content="real estate photography, bostadsfotograf, Malmö, Lund, Skåne, property photography, Glafira Veretennikova"
        />
        <meta name="author" content="Glafira Veretennikova" />
        <title>Glafira Veretennikova | Real Estate Photographer in Malmö & Lund</title>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Glafira Veretennikova | Real Estate Photographer" />
        <meta
          property="og:description"
          content="Professional real estate photography services in Malmö, Lund, and Skåne."
        />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
