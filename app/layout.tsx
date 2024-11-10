import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/nav-bar';

export const metadata: Metadata = {
  title: 'FÒS | Home',
  description: 'Federasyon Òganizasyon Sosyalis',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ht' suppressHydrationWarning>
      <body
        className={cn(
          'antialiased min-h-screen bg-background',
          GeistSans.className
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system'>
          <div>
            <NavBar />
          </div>
          <main className='pt-16 lg:pt-16'> {children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
