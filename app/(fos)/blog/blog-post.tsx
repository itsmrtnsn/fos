import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { BlogPost } from '@/lib/get-articles';
import { CalendarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  post: BlogPost;
}

export function BlogCard({ post }: Props) {
  return (
    <Card className='flex border-[0.1px] flex-col h-full shadow-none bg-white'>
      {post.imageUrl && (
        <div className='relative w-full pt-[56.25%]'>
          <Image
            src={post.imageUrl}
            alt={post.imageAlt || ''}
            layout='fill'
            objectFit='cover'
            className='rounded-t-lg'
          />
        </div>
      )}
      <CardHeader>
        <h2 className='text-2xl font-bold line-clamp-1'>{post.title}</h2>
        <div className='flex items-center text-muted-foreground text-sm'>
          <CalendarIcon className='w-4 h-4 mr-2' />
          <time dateTime={post.date.split(', ')[1]}>{post.date}</time>
        </div>
      </CardHeader>
      <CardContent className='flex-grow'>
        <p className='text-muted-foreground line-clamp-4'>{post.content}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/blog/${post.id}`}>Li plis</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
