import type { Metadata, Viewport } from 'next';
import { Source_Serif_4, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/custom/providers';

const display = Source_Serif_4({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-data',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://historyiasacademy.vercel.app'),
  title: {
    default: 'History IAS Academy | UPSC, PCS, Judiciary & Defence Coaching, Varanasi',
    template: '%s | History IAS Academy',
  },
  description:
    'History IAS Academy, Varanasi — teaching since April 2007. Comprehensive UPSC CSE (IAS/IPS Prelims, Mains & Interview), UPPSC / State PCS, PCS Judiciary, CLAT, UGC NET/JRF, CUET, CTET, CHS entrance, NDA and CDS coaching from the Durgakund and Lanka BHU Road campuses. Hybrid learning on the History IAS Academy app, GS SCORE offline test series and one-on-one mentoring. Your Pathway to IAS, PCS, and UPSC Success.',
  keywords: [
    'UPSC coaching Varanasi',
    'IAS academy Varanasi',
    'UPPSC PCS coaching Varanasi',
    'NDA CDS coaching Varanasi',
    'PCS Judiciary CLAT coaching BHU',
    'CUET CTET UGC NET coaching Varanasi',
    'History IAS Academy',
  ],
  icons: { icon: '/brand/logo.png', apple: '/brand/logo.png' },
  openGraph: {
    title: 'History IAS Academy',
    description:
      'Your Pathway to IAS, PCS, and UPSC Success. Since April 2007 · Durgakund & Lanka BHU Road, Varanasi.',
    images: ['/brand/logo.png'],
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#13157e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} min-h-screen bg-background font-sans text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
