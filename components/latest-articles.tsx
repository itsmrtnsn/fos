'use client';

import { BlogPost } from '@/lib/get-articles';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  posts: BlogPost[];
}

export default function LatestArticlesWithCTA({ posts }: Props) {
  return (
    <section className='py-24 bg-white lg:px-10'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Dènye Atik</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className='bg-slate-100 shadow-none    rounded-lg overflow-hidden hover:scale-105  transition-all  ease-linear duration-300'
            >
              <div className='h-[14rem] p-2 '>
                <Image
                  alt=''
                  src={post.imageUrl}
                  className='object-cover w-full h-full rounded-lg'
                />
              </div>
              <div className='p-6 '>
                <span className='text-sm font-semibold text-primary mb-2 inline-block'>
                  {post.category}
                </span>
                <h3 className='text-xl font-bold mb-2 line-clamp-1'>
                  {post.title}
                </h3>
                <p className='text-gray-600 mb-4 line-clamp-3'>
                  {post.content}
                </p>

                <Link
                  className='text-primary flex items-center gap-2'
                  href={`/blog/${post.id}`}
                >
                  <span>Li Plis</span>
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
