'use client';

import { motion } from 'framer-motion';
import { FileText, Layers, RotateCw } from 'lucide-react';

export default function OurMission() {
  const cards = [
    {
      title: 'Enfòmasyon',
      description: `Tout sa ki gen pou wè avèk pase nou kòm pèp, konsta de tout sa ki bon ak tout sa ki pa bon pou nou kapab planifye yon bon demen.`,
      icon: FileText,
      //   gradient: 'from-red-500 to-rose-600',
    },
    {
      title: 'Fòmasyon',
      description:
        'Fòmasyon yo baze sou lagoch ak sistèm ekonomik sosyalis nan fason anperè Jean-Jacques DESSALINES',
      icon: RotateCw,
      //   gradient: 'from-red-600 to-red-700',
    },
    {
      title: 'Transfòmasyon',
      description:
        'atravè enfòmasyon ak fòmasyon yo n ap kapab konsyan, aji epi defann enterè Ayiti.',
      icon: Layers,
      //   gradient: 'from-rose-600 to-red-800',
    },
  ];

  return (
    <section className='py-24 lg:px-10 lg:py-28 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl font-black text-center mb-12'
        >
          Misyon Nou
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
                className={`bg-gradient-to-br rounded-xl p-8  hover:scale-105 transition-all duration-300 h-full flex flex-col justify-between group bg-white  shadow-none text-primary border-[0.1px]`}
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
                  <p className='text-muted-foreground '>{card.description}</p>
                </div>
                <motion.div
                  className='mt-6'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* <Button
                    variant='outline'
                    className='shadow-none border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-linear font-normal'
                  >
                    Detay
                  </Button> */}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
