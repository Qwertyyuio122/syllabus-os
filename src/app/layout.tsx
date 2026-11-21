import type { Metadata } from 'next';
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import 'katex/dist/katex.min.css';
import './globals.css';
import { APP_NAME, APP_TAGLINE } from '@/config/brand';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${APP_NAME} · ${APP_TAGLINE}`,
    template: `%s · ${APP_NAME}`,
  },
  description:
    'Notion-inspired IB Diploma Class of 2028 study workspace with official syllabi, interactive study guides, markscheme-calibrated question bank, and EE/TOK/CAS/IA rubric evaluation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-white text-[#37352F] antialiased dark:bg-[#191919] dark:text-[#EBEBEB]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
