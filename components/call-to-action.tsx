'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';

function CallToAction() {
  return (
    <div className='bg-red-600 text-white rounded-lg p-10 shadow-lg mx-5 lg:mx-10'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center'
      >
        <h3 className='text-2xl font-bold mb-4'>
          Stay Updated with Our Newsletter
        </h3>
        <p className='mb-6'>
          Get the latest articles and insights delivered straight to your inbox.
        </p>
        <form className='flex flex-col sm:flex-row justify-center items-center gap-4'>
          <input
            type='email'
            placeholder='Enter your email'
            className='w-full sm:w-64 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400'
            required
          />
          <Button
            type='submit'
            className='w-full sm:w-auto bg-white text-red-600 hover:bg-red-100'
          >
            Subscribe
          </Button>
        </form>
      </motion.div>
    </div>
  );
}

export default CallToAction;
