import { ChevronRight } from 'lucide-react';
import { RainbowButton } from './ui/rainbow-button';

export function RainbowButtonDemo() {
  return (
    <RainbowButton className='rounded-md font-normal'>
      <span className='hover:mr-2 transition-all duration-200 ease-linear'>
        Aprann plis
      </span>
      <ChevronRight strokeWidth={1} />
    </RainbowButton>
  );
}
