'use client';

import navLinks from '@/lib/nav-links';
import { cn } from '@/lib/utils';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPinHouse,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <footer className='bg-gray-100 text-gray-600 py-12'>
      <div className='container mx-auto px-4 '>
        <div className='flex flex-col gap-8  lg:flex-row lg:justify-around'>
          <div className='space-y-4 w-[20rem]'>
            <h3 className='text-lg font-semibold text-black'>Konsènan</h3>
            <p className='text-sm'>
              Federasyon òganizasyon sosyalis (FÒS) se yon Federasyon ki
              regwoupe tout òganizasyon ak endividi ki nan kouran politik lagoch
              epi ki wè tèt yo nan yon sistèm ekonomik sosyalis.
            </p>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-black'>Lyen rapid</h3>
            <ul className='space-y-2'>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.path}
                    className={cn(
                      'flex items-center gap-2',
                      currentPath === link.path
                        ? 'text-red-600 font-semibold'
                        : 'text-gray-600'
                    )}
                  >
                    <link.icon className='h-4 w-4' />
                    <span className='text-sm'>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-black'>Konekte Ak Nou</h3>
            <div className='flex space-x-4'>
              <a
                href=''
                aria-label='Facebook'
                className='text-gray-400 hover:text-red-600 transition-colors'
              >
                <Facebook className='h-6 w-6' />
              </a>
              <a
                href='#'
                aria-label='Twitter'
                className='text-gray-400 hover:text-red-600 transition-colors'
              >
                <Twitter className='h-6 w-6' />
              </a>
              <a
                href='#'
                aria-label='Instagram'
                className='text-gray-400 hover:text-red-600 transition-colors'
              >
                <Instagram className='h-6 w-6' />
              </a>
              <a
                href='#'
                aria-label='LinkedIn'
                className='text-gray-400 hover:text-red-600 transition-colors'
              >
                <Linkedin className='h-6 w-6' />
              </a>
            </div>
            <div className='flex items-center space-x-2'>
              <Mail className='h-5 w-5 text-red-600' />
              <a
                href='mailto:info@example.com'
                className='text-sm hover:text-red-600 transition-colors'
              >
                federasyonoganizasyonsosyalis@gmail.com
              </a>
            </div>
            <div className='flex items-center gap-2'>
              <MapPinHouse className='w-5 h-5 text-primary' />
              <p className='text-sm  hover:text-primary transition-colors ease-linear duration-300'>
                ri séjourné Dèlmas 19
              </p>
            </div>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-200 text-center'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Federasyon Òganizasyon Sosyalis
            (FÒS) - Tout dwa rezève
          </p>
        </div>
      </div>
    </footer>
  );
}
