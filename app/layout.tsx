import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Practispeak | Learn English Through Gaming',
  description:
    'ESL lessons designed for gamers. Master English vocabulary, phrasal verbs, and conversation skills through gaming contexts.',
  metadataBase: new URL('https://practispeak.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-poppins bg-[#F7F7F7] text-black min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
