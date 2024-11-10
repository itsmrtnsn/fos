'use client';

import image_2 from '@/app/assets/img-2.jpg';
import image_3 from '@/app/assets/img-3.jpg';
import image_4 from '@/app/assets/img-4.jpg';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: StaticImageData | string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the web.',
    category: 'Technology',
    image: image_2,
  },
  {
    id: 2,
    title: 'Mastering React Hooks',
    excerpt: "A deep dive into React's powerful hook system.",
    category: 'Programming',
    image: image_3,
  },
  {
    id: 3,
    title: 'Designing for Accessibility',
    excerpt: 'Best practices for creating inclusive web experiences.',
    category: 'Design',
    image: image_4,
  },
  // Add more articles as needed
];

export default function LatestArticlesWithCTA() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Dènye Atik</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {articles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              onHoverStart={() => setHoveredId(article.id)}
              onHoverEnd={() => setHoveredId(null)}
              className='bg-gray-100 border  rounded-lg overflow-hidden hover:scale-105  transition-all duration-300'
            >
              <div className='h-[16rem] p-2 '>
                <Image
                  alt=''
                  src={article.image}
                  className='object-cover w-full h-full rounded-lg'
                />
              </div>
              <div className='p-6 '>
                {/* <span className='text-sm font-semibold text-red-600 mb-2 inline-block'>
                  {article.category}
                </span> */}
                <h3 className='text-xl font-bold mb-2'>{article.title}</h3>
                <p className='text-gray-600 mb-4'>{article.excerpt}</p>
                <motion.div
                  initial={false}
                  animate={{ x: hoveredId === article.id ? 5 : 0 }}
                  className='flex items-center text-red-600 font-semibold'
                >
                  Read More
                  <ArrowRight className='ml-2 h-4 w-4' />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
