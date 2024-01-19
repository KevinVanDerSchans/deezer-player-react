import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { IBM_Plex_Sans } from 'next/font/google';
import '../scss/style.scss';

const inter = IBM_Plex_Sans({
  weight: ['400'],
  subsets: ["latin"]
});

export const metadata = {
  title: "Deezer API",
  description: "Deezer API built with Next and React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div>
          <Header />

          <main>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
