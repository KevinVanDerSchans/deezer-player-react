import Sidebar from './components/navigation/Sidebar';
import Player from './components/Player/Player';
import Footer from '../app/components/footer';
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
            <Sidebar />

            <section>
              <main>
                {children}
              </main>
            </section>

            <Player />
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
