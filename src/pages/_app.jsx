import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { Bebas_Neue } from 'next/font/google';
import Cursor from '@/components/ui/Cursor';
import '@/styles/globals.css';

// Display face only — body copy stays on the system stack for speed.
const display = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="data-theme">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* expose the display face as a CSS variable for the token system */}
      <style jsx global>{`
        :root {
          --font-display: ${display.style.fontFamily}, system-ui, sans-serif;
        }
      `}</style>
      <Cursor />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
