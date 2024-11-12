import { ChevronRight } from 'lucide-react';
import { RainbowButton } from './ui/rainbow-button';
import Link from 'next/link';

export function RainbowButtonDemo() {
  return (
    <RainbowButton className='rounded-md font-normal'>
      <Link href='/konsenan'>
        <span className='hover:mr-2 transition-all duration-200 ease-linear'>
          Aprann plis
        </span>
      </Link>
      <ChevronRight strokeWidth={1} />
    </RainbowButton>
  );
}
