'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertCircle, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function ComingSoonPageComponent() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setIsSubmitted(true);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-red-50 flex items-center justify-center'>
      <motion.div
        className='container mx-auto px-4 py-16 text-center'
        initial='initial'
        animate='animate'
        variants={staggerChildren}
      >
        <motion.h1
          className='text-5xl md:text-7xl font-extrabold mb-8'
          variants={fadeInUp}
        >
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800'>
            Paj sa a ap vini byento
          </span>
        </motion.h1>

        <motion.p
          className='text-xl text-gray-600 mb-12 max-w-2xl mx-auto'
          variants={fadeInUp}
        >
          Nou ap travay di pou nou pote w kontni eksepsyonèl. Enskri pou w
          resevwa yon notifikasyon lè paj sa a disponib.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Card className='max-w-md mx-auto shadow-none'>
            <CardContent className='p-6'>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='flex items-center space-x-2'>
                    <AlertCircle className='text-red-600 w-6 h-6' />
                    <p className='text-sm text-gray-600'>
                      Antre imèl ou pou w resevwa mizajou yo
                    </p>
                  </div>
                  <div className='flex space-x-2'>
                    <Input
                      type='email'
                      placeholder='ou@egzanp.com'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className='flex-grow'
                    />
                    <Button
                      type='submit'
                      className='bg-red-600 hover:bg-red-700'
                    >
                      Enskri
                    </Button>
                  </div>
                </form>
              ) : (
                <div className='flex items-center space-x-2 text-green-600'>
                  <CheckCircle className='w-6 h-6' />
                  <p>Mèsi! N ap voye yon notifikasyon ba ou byento.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div className='mt-12' variants={fadeInUp}>
          <Link
            href='/'
            className='inline-flex items-center text-red-600 hover:text-red-700'
          >
            Retounen nan paj akèy la
            <ArrowRight className='ml-2 w-4 h-4' />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
