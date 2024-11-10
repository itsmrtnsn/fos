'use client';

import { motion } from 'framer-motion';
import { RainbowButtonDemo } from './rain-bow-button';
import { AuroraBackground } from './ui/aurora-background';

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='relative  overflow-hidden flex flex-col gap-4 items-center justify-center px-4'
      >
        <div className='text-4xl font-black text-primary md:text-8xl md:font-black dark:text-white text-center space-y-3'>
          <p>Enfòmasyon</p>
          <p>Fòmasyon</p>
          <p>Transfòmasyon</p>
        </div>
        <div className='font-extralight text-base text-center md:text-3xl dark:text-neutral-200 py-4'>
          Yon altenativ peyi , nan grandè anperè jean Jacques Dessalines
        </div>
        {/* <button className='bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2'>
          Debug now
        </button> */}

        <RainbowButtonDemo />
      </motion.div>
    </AuroraBackground>
  );
}
