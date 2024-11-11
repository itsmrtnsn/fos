import Footer from '@/components/footer';
import NavBar from '@/components/nav-bar';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FÒS | Home',
  description: 'Federasyon Òganizasyon Sosyalis',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='ht' suppressHydrationWarning>
        <body
          className={cn(
            'antialiased min-h-screen bg-background',
            GeistSans.className
          )}
        >
          <ThemeProvider attribute='class' defaultTheme='light'>
            <div>
              <NavBar />
            </div>
            <main className='pt-16 lg:pt-16'> {children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
