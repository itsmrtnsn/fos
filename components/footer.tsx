import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-100 text-gray-600 py-12'>
      <div className='container mx-auto px-4 '>
        <div className='flex flex-col gap-8  lg:flex-row lg:justify-around'>
          <div className='space-y-4 w-[20rem]'>
            <h3 className='text-lg font-semibold text-black'>About Us</h3>
            <p className='text-sm'>
              We are passionate about delivering high-quality content and
              insights to our readers, helping them stay informed and inspired.
            </p>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-black'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-sm hover:text-red-600 transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/articles'
                  className='text-sm hover:text-red-600 transition-colors'
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-sm hover:text-red-600 transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-sm hover:text-red-600 transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-black'>
              Connect With Us
            </h3>
            <div className='flex space-x-4'>
              <a
                href='#'
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
                info@example.com
              </a>
            </div>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-200 text-center'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
