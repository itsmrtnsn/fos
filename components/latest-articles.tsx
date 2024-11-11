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
    title: 'Lavni nan Devlopman Entènèt',
    excerpt: 'Eksplore dènye tandans ak teknoloji ki fòme entènèt la.',
    category: 'Teknoloji',
    image: image_2,
  },
  {
    id: 2,
    title: 'Metriz React Hooks',
    excerpt: 'Yon gwo plonje nan pwisan sistèm zen React la.',
    category: 'Pwogramasyon',
    image: image_3,
  },
  {
    id: 3,
    title: 'Designing pou Aksè',
    excerpt: 'Pi bon pratik pou kreye eksperyans web enklizif.',
    category: 'Design',
    image: image_4,
  },
  // Add more articles as needed
];

export default function LatestArticlesWithCTA() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className='py-24 bg-white lg:px-10'>
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
              className='bg-slate-100 shadow-sm   rounded-lg overflow-hidden hover:scale-105  transition-all duration-300'
            >
              <div className='h-[16rem] p-2 '>
                <Image
                  alt=''
                  src={article.image}
                  className='object-cover w-full h-full rounded-lg'
                />
              </div>
              <div className='p-6 '>
                <span className='text-sm font-semibold text-primary mb-2 inline-block'>
                  {article.category}
                </span>
                <h3 className='text-xl font-bold mb-2'>{article.title}</h3>
                <p className='text-gray-600 mb-4'>{article.excerpt}</p>
                <motion.div
                  initial={false}
                  animate={{ x: hoveredId === article.id ? 5 : 0 }}
                  className='flex items-center text-primary font-semibold'
                >
                  Li plis
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
