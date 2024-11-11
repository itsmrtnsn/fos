import getArticles, { BlogPost } from '@/lib/get-articles';
import { CalendarIcon } from 'lucide-react';
import Image from 'next/image';

interface Props {
  params: { blog_id: string };
}

export default async function BlogPostDetail({ params }: Props) {
  const { blog_id } = await params;
  const posts: BlogPost[] = await getArticles();
  const blog = posts.find((post) => post.id === blog_id);

  return (
    <article className='max-w-3xl mx-auto px-4 py-8'>
      {blog?.imageUrl && (
        <div className='mb-8 rounded-lg overflow-hidden'>
          <Image
            src={blog.imageUrl}
            alt={blog.imageAlt}
            width={800}
            height={400}
            className='w-full h-auto object-cover'
          />
        </div>
      )}

      <header className='mb-8'>
        <h1 className='text-3xl font-bold mb-2'>{blog?.title}</h1>
        <div className='flex items-center text-gray-600'>
          <CalendarIcon className='w-4 h-4 mr-2' />
          <time dateTime={blog?.date.split(', ')[1]}>{blog?.date}</time>
        </div>
      </header>

      <div className='prose prose-lg'>
        {blog?.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className='mt-8 border-t pt-4'>
        {blog?.authors.map((author, index) => (
          <div key={index} className={index > 0 ? 'mt-4' : ''}>
            <p className='font-semibold'>{author.name}</p>
            <p className='text-gray-600'>{author.title}</p>
          </div>
        ))}
      </footer>
    </article>
  );
}
