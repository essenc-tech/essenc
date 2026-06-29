import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SearchProvider from '@/features/search/search-provider';
import ThemeProvider from '@/components/providers/theme-provider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Essenc — The Connected Workspace',
  description: 'All your tools. One workspace.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`}>
        <ThemeProvider>
          <SearchProvider>
            {children}
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}