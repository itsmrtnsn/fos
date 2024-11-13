'use client';

import navLinks from '@/lib/nav-links';
import { cn } from '@/lib/utils';
import { Facebook, Instagram, Mail, MapPinHouse, Twitter } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLaptopCode } from 'react-icons/fa';

const socialLinks = [
  {
    id: 1,
    name: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/share/1Q6mY5p7z3/',
  },
  {
    id: 2,
    name: 'Twitter',
    icon: Twitter,
    href: 'https://x.com/fosAyiti509?t=rjDV9nUwmbWyS8RK7O7lUQ&s=08',
  },
  {
    id: 3,
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/federasyonoganizasyonsosyalis',
  },
  // {
  //   id: 4,
  //   name: 'LinkedIn',
  //   icon: Linkedin,
  //   href: 'https://www.linkedin.com/share/1Q6mY5p7z3/',
  // },
];

export default function Footer() {
  const currentPath = usePathname();

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
            <h3 className='text-lg font-semibold text-black'>Konekte ak nou</h3>
            <div className='flex space-x-4'>
              {socialLinks.map((link) => (
                <Link href={link.href} key={link.id}>
                  <link.icon className='h-6 w-6 text-primary hover:text-primary transition-colors' />
                </Link>
              ))}
            </div>
            <div className='flex items-center space-x-2'>
              <Mail className='h-4 w-4 text-red-600' />
              <a
                href='mailto:info@example.com'
                className='text-sm hover:text-red-600 transition-colors'
              >
                federasyonoganizasyonsosyalis@gmail.com
              </a>
            </div>
            <div className='flex items-center space-x-2'>
              <MapPinHouse className='w-4 h-4 text-primary' />
              <p className='text-sm cursor-pointer  hover:text-primary transition-colors ease-linear duration-300'>
                ri Sejourné Dèlma 19
              </p>
            </div>
          </div>
        </div>
        <div className='mt-8 py-8  border-gray-200 text-center text-sm bg-white border-[0.1px] rounded-xl'>
          <p className='text-xs'>
            &copy; {new Date().getFullYear()} Federasyon Òganizasyon Sosyalis
            <br />
            (FÒS) - Tout dwa rezève
          </p>
          <p className='text-sm flex items-center text-center justify-center mt-2 gap-2'>
            Kreye pa
            <FaLaptopCode className='w-5 h-5 text-red-600' />
            <span className='text-red-600 text-xs font-medium'>
              devsettings2001@gmail.com
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
