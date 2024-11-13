'use client';

import { motion } from 'framer-motion';
import { RainbowButtonDemo } from './rain-bow-button';
import { AuroraBackground } from './ui/aurora-background';

export function Hero() {
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
        className='relative overflow-hidden flex flex-col gap-4 items-center justify-center px-4'
      >
        <div className=' text-[2.6rem] -space-y-2 md:space-y-3 font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 md:text-8xl md:font-black text-center'>
          <p>Federasyon</p>
          <p>Òganizasyon</p>
          <p>Sosyalis</p>
        </div>
        <div className='font-medium text-base md:font-light text-center md:text-xl dark:text-neutral-200 py-4 text-muted-foreground'>
          Yon altenativ peyi, nan grandè anperè Jean Jacques Dessalines.
        </div>
        <RainbowButtonDemo />
      </motion.div>
    </AuroraBackground>
  );
}
