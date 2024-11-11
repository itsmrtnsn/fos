'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CheckCircle, Eye, Info, Users } from 'lucide-react';

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
    <div className='min-h-screen '>
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

        <motion.div variants={fadeInUp}>
          <Card className='p-4 shadow-none transition-shadow duration-300  mb-16'>
            <CardContent className='space-y-6 p-2'>
              <div className='flex items-center space-x-4 mb-6'>
                <Info className='w-12 h-12 text-primary' />
                <h2 className='text-3xl font-bold'>Konsènan FÒS</h2>
              </div>
              <p className='text-lg leading-relaxed'>
                Federasyon òganizasyon sosyalis (FÒS) se yon Federasyon ki
                regwoupe tout òganizasyon ak endividi ki nan kouran politik
                lagoch epi ki wè tèt yo nan yon sistèm ekonomik sosyalis.
                Òganizasyon sila inisye avèk Ken-Rick Fernando, JOSEPH, Bron-son
                PIERRE (Tichapo) epi Samuel JULES (Samy). Li genyen syèj sosyal
                li, nan ri Séjourné Dèlma 19.
              </p>
              <p className='text-lg leading-relaxed'>
                Federasyon sila chita sou twa(3) pilye : Enfòmasyon, Fòmasyon ak
                Transfòmasyon. Nan lide pou l pèmèt tout ayisyen-èn gen bon
                konpreyansyon sou pase ak prezan pou yo kapab konsyan epi deside
                pou lavni yo atravè tout sa yo gen pou yo aprann pou yo kapab
                vini bonjan sitwayen ayisyen ki transfòme.
              </p>
              <p className='text-lg leading-relaxed font-semibold'>
                FÒS gen pou vizyon, fè yon travay konsyans nan objektif pou nou
                rive etabli leta DESSALINES te reve a.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className='grid md:grid-cols-2 gap-12 mb-16'
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp}>
            <Card className='p-4 shadow-none transition-shadow duration-300 '>
              <CardContent className='space-y-4 p-2'>
                <Users className='w-12 h-12 mb-4 text-primary' />
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
            <Card className='p-4 shadow-none transition-shadow duration-300 '>
              <CardContent className='space-y-4 p-2'>
                <Eye className='w-12 h-12 mb-4 text-primary' />
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
              <Card className='p-4 shadow-none transition-shadow duration-300'>
                <CardContent className='space-y-4 p-2'>
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
      </motion.div>
    </div>
  );
}
