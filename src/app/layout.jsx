import Navbar from './components/Navigation/Navbar';
import Player from './components/Player/Player';
import Footer from './components/Footer/Footer';
import ReduxProvider from './redux/ReduxProvider';
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
    <html lang="en" className={inter.className}>
      <body>
        <ReduxProvider>
          <div>
            <Navbar />

            <div>
              <main>
                {children}
              </main>
            </div>

            <Player />
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
