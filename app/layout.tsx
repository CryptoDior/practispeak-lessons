import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Practispeak | Learn English Through Gaming',
  description:
    'ESL lessons designed for gamers. Master English vocabulary, phrasal verbs, and conversation skills through gaming contexts.',
  metadataBase: new URL('https://practispeak.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="font-nunito bg-[#F7F7F7] text-black min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
