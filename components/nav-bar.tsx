'use client';

import logo_red from '@/app/assets/logo-red.png';

import navLinks from '@/lib/nav-links';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { LogIn, Menu, UserPlus2, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from './ui/button';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath = usePathname();

  return (
    <div className=''>
      <header className='px-4 lg:px-6 h-16 flex items-center fixed w-full backdrop-blur bg-white/50 z-50 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link className='flex items-center justify-center mt-2' href='/'>
            <Image src={logo_red} alt='logo' width={90} height={90} />
          </Link>
          <nav className='hidden md:flex space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                className={cn(
                  'text-sm font-normal text-black hover:text-primary transition-colors duration-300 ease-linear',
                  {
                    'text-primary font-medium': currentPath === link.path,
                  }
                )}
                href={link.path}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className='hidden md:flex space-x-4'>
            <Button
              variant='outline'
              // size='sm'
              className='border-primary border-[0.1px] text-primary hover:bg-white hover:text-red-700'
            >
              <LogIn className='h-4 w-4' /> Konekte
            </Button>
            <Button
              // size='sm'
              className='bg-primary hover:bg-red-700  transition-colors duration-300 ease-linear text-white'
            >
              <UserPlus2 className='h-4 w-4' /> Enskri
            </Button>
          </div>

          <div className='flex items-center  md:hidden '>
            <X
              strokeWidth={1}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'w-8 h-8 text-primary md:hidden  hover:text-primary hover:bg-red-50/50 rounded-md transition-all ease-linear duration-300',
                { hidden: !isMenuOpen }
              )}
            />

            <Menu
              strokeWidth={1}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'w-8 h-8 text-primary md:hidden  hover:text-primary hover:bg-red-50/50 rounded-md transition-all ease-linear duration-300',
                {
                  hidden: isMenuOpen,
                }
              )}
            />
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='fixed inset-x-0 top-16 bg-white shadow-lg z-40 md:hidden'
          >
            <nav className='flex flex-col p-4'>
              {navLinks.map((link) => (
                <Link
                  className={cn(
                    'py-2 text-sm text-black hover:text-red-600 transition-colors duration-300 ease-linear flex items-center gap-x-4',
                    {
                      'text-primary font-medium': currentPath === link.path,
                    }
                  )}
                  href={link.path}
                  key={link.id}
                >
                  <link.icon strokeWidth={1} />
                  <span> {link.name}</span>
                </Link>
              ))}

              <div className='mt-4 w-full flex items-center gap-4'>
                <Button
                  variant='outline'
                  size='lg'
                  className=' w-full border-[0.1px] border-primary text-primary'
                >
                  <LogIn className='h-4 w-4' /> Konekte
                </Button>
                <Button
                  size='lg'
                  className=' w-full bg-primary hover:bg-red-700 transition-colors ease-linear duration-300 text-white'
                >
                  <UserPlus2 className='h-4 w-4' /> Enskri
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
