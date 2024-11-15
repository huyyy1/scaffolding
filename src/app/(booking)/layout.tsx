import { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Navigation } from '@/components/shared/navigation';
import { ThemeProvider } from '@/components/shared/theme-provider';
import '@/styles/globals.css';

interface BookingLayoutProps {
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
  title: 'Book Cleaning Services | SimplyMaid',
  description: 'Book your professional cleaning service with SimplyMaid. Easy online booking process.',
};

export default function BookingLayout({
  children,
  theme = {
    defaultTheme: 'system',
    enableSystem: true,
  },
  navigation,
}: BookingLayoutProps) {
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
          <main className="min-h-screen bg-background">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}