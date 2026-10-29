import type { Metadata } from 'next';
import '@fontsource-variable/epilogue';
import './globals.css';
import './hero.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.oneokstudio.com'),
  title: 'One Ok Studio: Design & Development Studio from Indonesia',
  description: 'A small design and development studio in Indonesia. We design and build apps, interfaces, and websites, from first sketch to working release.',
  alternates: { canonical: '/' },
  openGraph: { title: 'One Ok Studio — Design that works. Built to ship.', description: 'Clear design. Clean code. One studio. Based in Indonesia, working worldwide.', url: '/', siteName: 'One Ok Studio', type: 'website' },
  twitter: { card: 'summary_large_image' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
