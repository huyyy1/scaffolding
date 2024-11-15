import { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@/components/shared/theme-provider';
import '@/styles/globals.css';

interface AuthLayoutProps {
  children: React.ReactNode;
  metadata?: Metadata;
  theme?: {
    defaultTheme?: string;
    enableSystem?: boolean;
  };
  className?: string;
}

export const metadata: Metadata = {
  title: 'Authentication | SimplyMaid',
  description: 'Sign in or create an account with SimplyMaid.',
};

export default function AuthLayout({
  children,
  theme = {
    defaultTheme: 'system',
    enableSystem: true,
  },
  className,
}: AuthLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme={theme.defaultTheme}
          enableSystem={theme.enableSystem}
          disableTransitionOnChange
        >
          <main className={cn(
            "min-h-screen flex items-center justify-center bg-background",
            className
          )}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}