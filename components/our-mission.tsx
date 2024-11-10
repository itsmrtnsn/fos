'use client';

import { motion } from 'framer-motion';
import { FileText, RotateCw, Layers } from 'lucide-react';

export default function OurMission() {
  const cards = [
    {
      title: 'Information',
      description:
        'Gathering and analyzing crucial data to inform our strategic decisions.',
      icon: FileText,
      //   gradient: 'from-red-500 to-rose-600',
    },
    {
      title: 'Transformation',
      description:
        'Driving change and innovation to adapt to evolving market demands.',
      icon: RotateCw,
      gradient: 'from-red-600 to-red-700',
    },
    {
      title: 'Formation',
      description:
        'Shaping the future by cultivating talent and fostering growth.',
      icon: Layers,
      gradient: 'from-rose-600 to-red-800',
    },
  ];

  return (
    <section className='py-24 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl font-bold text-center mb-12 text-gray-800'
        >
          Our Mission
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`bg-gradient-to-br ${card.gradient} rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between group bg-white border text-primary`}
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className='mb-6 inline-block'
                  >
                    <card.icon className='w-12 h-12 text-primary transition-transform duration-300' />
                  </motion.div>
                  <h3 className='text-2xl font-semibold text-primary mb-4'>
                    {card.title}
                  </h3>
                  <p className='text-primary text-opacity-90'>
                    {card.description}
                  </p>
                </div>
                <motion.div
                  className='mt-6'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className='bg-white bg-opacity-20 text-primary py-2 px-4 rounded-full hover:bg-opacity-30 transition-colors duration-300'>
                    Learn More
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
