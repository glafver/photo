import "./globals.css";
import "react-photo-album/columns.css";
import "yet-another-react-lightbox/styles.css";
import Header from './components/Header';
import Footer from './components/Footer';

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
