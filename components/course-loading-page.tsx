'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Clock, Users, Star } from 'lucide-react';

export function CourseCardSkeleton() {
  return (
    <Card className='flex flex-col h-full overflow-hidden shadow-none'>
      <Skeleton className='h-48 w-full bg-slate-100' />
      <CardHeader>
        <Skeleton className='h-8 w-3/4 mb-2 bg-slate-100' />
        <Skeleton className='h-4 w-1/2 bg-slate-100' />
      </CardHeader>
      <CardContent className='flex-grow'>
        <Skeleton className='h-4 w-full mb-2 bg-slate-100' />
        <Skeleton className='h-4 w-5/6 mb-4 bg-slate-100' />
        <div className='flex flex-wrap gap-2 mb-4'>
          <Skeleton className='h-6 w-20 bg-slate-100' />
          <Skeleton className='h-6 w-24 bg-slate-100' />
          <Skeleton className='h-6 w-16 bg-slate-100' />
        </div>
        <div className='flex items-center justify-between text-sm text-gray-500'>
          <div className='flex items-center'>
            <Clock className='w-4 h-4 mr-1 text-gray-300' />
            <Skeleton className='h-4 w-16 bg-slate-100' />
          </div>
          <div className='flex items-center'>
            <Users className='w-4 h-4 mr-1 text-gray-300' />
            <Skeleton className='h-4 w-20 bg-slate-100' />
          </div>
          <div className='flex items-center'>
            <Star className='w-4 h-4 mr-1 text-gray-300' />
            <Skeleton className='h-4 w-8 bg-slate-100' />
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between items-center'>
        <Skeleton className='h-8 w-20 bg-slate-100' />
        <Skeleton className='h-10 w-2 bg-slate-1008' />
      </CardFooter>
    </Card>
  );
}
