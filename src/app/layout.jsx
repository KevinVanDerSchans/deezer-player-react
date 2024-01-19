import { Inter } from 'next/font/google';
import '../scss/style.scss';

import Header from '../app/components/header'

const inter = Inter({ subsets: ["latin"] });

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
        </div>
      </body>
    </html>
  );
}