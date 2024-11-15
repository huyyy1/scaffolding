import { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@/components/shared/theme-provider';
import { DashboardNav } from '@/components/dashboard/nav';
import '@/styles/globals.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
  metadata?: Metadata;
  theme?: {
    defaultTheme?: string;
    enableSystem?: boolean;
  };
  navigation?: {
    items?: Array<{
      title: string;
      href: string;
      icon: React.ComponentType;
    }>;
  };
}

export const metadata: Metadata = {
  title: 'Dashboard | SimplyMaid',
  description: 'SimplyMaid admin dashboard and content management system.',
};

export default function DashboardLayout({
  children,
  theme = {
    defaultTheme: 'system',
    enableSystem: true,
  },
  navigation,
}: DashboardLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme={theme.defaultTheme}
          enableSystem={theme.enableSystem}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <DashboardNav {...navigation} />
            <main className="flex-1 p-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}