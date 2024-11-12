import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import AnimatedGradientText from './ui/animated-gradient-text';

export function WelcomeNotice() {
  return (
    <div className='z-50 flex min-h-64 w-full items-center justify-center  cursor-pointer'>
      <AnimatedGradientText>
        🎉 <hr className='mx-2 h-4 w-px shrink-0 bg-gray-300' />
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] font-normal text-xs bg-clip-text text-transparent w-fit`
          )}
        >
          Lansman 18/11/24.
        </span>
        <ChevronRight className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
      </AnimatedGradientText>
    </div>
  );
}
