import { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Navigation } from '@/components/shared/navigation';
import { ThemeProvider } from '@/components/shared/theme-provider';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'SimplyMaid - Professional Cleaning Services',
  description: 'Book professional cleaning services for your home or office. Trusted, reliable, and experienced cleaners at your service.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}