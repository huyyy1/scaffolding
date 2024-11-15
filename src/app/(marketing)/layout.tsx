import { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Navigation } from '@/components/shared/navigation';
import { ThemeProvider } from '@/components/shared/theme-provider';
import '@/styles/globals.css';

// Force static rendering for marketing pages
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

interface MarketingLayoutProps {
  children: React.ReactNode;
  metadata?: Metadata;
  theme?: {
    defaultTheme?: string;
    enableSystem?: boolean;
  };
  navigation?: {
    logo?: {
      icon: React.ReactNode;
      text: string;
    };
    services?: Array<{
      name: string;
      description: string;
      href: string;
    }>;
    mainLinks?: Array<{
      name: string;
      href: string;
    }>;
    authLinks?: {
      signIn: {
        text: string;
        href: string;
      };
      signUp: {
        text: string;
        href: string;
      };
    };
  };
}

export const metadata: Metadata = {
  title: 'SimplyMaid - Professional Cleaning Services',
  description: 'Book professional cleaning services for your home or office. Trusted, reliable, and experienced cleaners at your service.',
};

export default function MarketingLayout({
  children,
  theme = {
    defaultTheme: 'system',
    enableSystem: true,
  },
  navigation,
}: MarketingLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme={theme.defaultTheme}
          enableSystem={theme.enableSystem}
          disableTransitionOnChange
        >
          <Navigation {...navigation} />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}