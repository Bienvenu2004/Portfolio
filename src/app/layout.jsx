import { Bebas_Neue } from 'next/font/google';
import Providers from './providers';
import Cursor from '@/components/ui/Cursor';
import { site } from '@/data/site';
import '@/styles/globals.css';

// Display face only — body copy stays on the system stack for speed.
// `variable` exposes it as --font-display for the token system.
const display = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: 'website',
    images: [site.portrait],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0d10',
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: next-themes stamps data-theme before hydration
    <html lang="en" className={display.variable} suppressHydrationWarning>
      <body>
        {/* scroll reveals hide content only when JS is running (see globals.css) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.dataset.js='true'" }} />
        <Providers>
          <Cursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
