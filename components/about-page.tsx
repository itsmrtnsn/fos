'use client';

import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Eye, History } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-red-50'>
      <motion.div
        className='container mx-auto px-4 py-16'
        initial='initial'
        animate='animate'
        variants={staggerChildren}
      >
        <motion.h1
          className='text-5xl md:text-7xl font-extrabold text-center mb-8'
          variants={fadeInUp}
        >
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800'>
            Konsènan nou
          </span>
        </motion.h1>
        <motion.p
          className='text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto'
          variants={fadeInUp}
        >
          Dekouvri istwa nou ak misyon nou pou Ayiti. Ansanm, n ap bati yon avni
          pi klere.
        </motion.p>

        <motion.div
          className='grid md:grid-cols-2 gap-12 mb-16'
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp}>
            <Card className='p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-red-500 to-red-600 text-white'>
              <CardContent className='space-y-4'>
                <Users className='w-12 h-12 mb-4' />
                <h2 className='text-3xl font-bold mb-4'>Misyon nou</h2>
                <p className='leading-relaxed'>
                  Federasyon Òganizasyon Sosyalis se yon mouvman ki angaje pou
                  transfòmasyon sosyal ak ekonomik Ayiti. Nou travay pou kreye
                  yon sosyete ki pi jis, ki baze sou prensip egalite ak
                  solidarite.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className='p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-red-600 to-red-700 text-white'>
              <CardContent className='space-y-4'>
                <Eye className='w-12 h-12 mb-4' />
                <h2 className='text-3xl font-bold mb-4'>Vizyon nou</h2>
                <p className='leading-relaxed'>
                  Nou vize pou kreye yon Ayiti kote tout moun gen menm opòtinite
                  pou yo reyisi, kote demokrasi a solid, epi kote tout sitwayen
                  yo ka viv nan diyite.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.h2
          className='text-4xl font-bold text-center mb-12 text-red-700'
          variants={fadeInUp}
        >
          Valè nou yo
        </motion.h2>
        <motion.div
          className='grid md:grid-cols-3 gap-8 mb-16'
          variants={staggerChildren}
        >
          {[
            {
              title: 'Solidarite',
              description:
                'Nou kwè nan pouvwa inite ak sipò mityèl pou kreye chanjman.',
            },
            {
              title: 'Jistis Sosyal',
              description:
                'Nou lite pou yon sosyete ki trete tout moun ak respè ak diyite.',
            },
            {
              title: 'Transparans',
              description:
                'Nou kwè nan enpòtans onètete ak responsablite nan tout aksyon nou yo.',
            },
          ].map((value, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className='p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <CardContent className='space-y-4'>
                  <div className='flex items-center space-x-2'>
                    <CheckCircle className='text-red-600 w-8 h-8' />
                    <h3 className='font-semibold text-2xl text-red-700'>
                      {value.title}
                    </h3>
                  </div>
                  <p className='text-gray-600'>{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className='mt-16 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <CardContent className='space-y-6'>
              <div className='flex items-center space-x-4 mb-6'>
                <History className='text-red-600 w-12 h-12' />
                <h2 className='text-3xl font-bold text-red-700'>Istwa nou</h2>
              </div>
              <div className='grid md:grid-cols-2 gap-8 items-center'>
                <div className='space-y-4 text-gray-600'>
                  <p>
                    Depi kreyasyon nou an, nou te toujou angaje nan lit pou yon
                    pi bon Ayiti. Nou enspire pa eritaj Jean Jacques Dessalines
                    ak lòt ewo nasyonal nou yo ki te lite pou libète ak
                    endepandans.
                  </p>
                  <p>
                    Jodia, nou kontinye travay pou reyalize vizyon fondatè nou
                    yo, nan adapte estrateji nou yo ak defi aktyèl yo pandan n
                    ap kenbe menm prensip fondamantal yo.
                  </p>
                </div>
                <div className='relative h-64 md:h-full'>
                  <Image
                    src='/placeholder.svg'
                    alt='Istwa FOS'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg shadow-md'
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
