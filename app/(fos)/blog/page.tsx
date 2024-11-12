import getArticles from '@/lib/get-articles';
import { BlogCard } from './blog-post';

export default async function BlogCardPage() {
  const posts = await getArticles();
  return (
    <div className='container mx-auto px-4 py-8 lg:mx-10 '>
      <h1 className='text-3xl font-bold mb-16 text-primary text-center'>
        Atik nou yo
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
