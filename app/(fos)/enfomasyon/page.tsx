'use client';

// import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Calendar, PartyPopper } from 'lucide-react';

export default function Component() {
  // const [expandedNews, setExpandedNews] = useState<number | null>(null);

  // const announcements = [
  //   {
  //     id: 1,
  //     title: 'Annual General Meeting',
  //     date: '2023-12-15',
  //     content:
  //       'Our AGM will be held on December 15th. All members are encouraged to attend.',
  //   },
  //   {
  //     id: 2,
  //     title: 'New Office Opening',
  //     date: '2024-01-10',
  //     content:
  //       "We're excited to announce the opening of our new branch office in Seattle.",
  //   },
  // ];

  // const news = [
  //   {
  //     id: 1,
  //     title: 'Q3 Financial Results',
  //     date: '2023-10-31',
  //     content: "We're pleased to report a 15% increase in revenue for Q3 2023.",
  //   },
  //   {
  //     id: 2,
  //     title: 'Partnership Announcement',
  //     date: '2023-11-15',
  //     content:
  //       "We've partnered with TechCorp to enhance our product offerings.",
  //   },
  //   {
  //     id: 3,
  //     title: 'Community Outreach Program',
  //     date: '2023-12-01',
  //     content:
  //       'Our team volunteered at the local food bank, serving over 500 meals.',
  //   },
  // ];

  // const info = {
  //   mission:
  //     'To innovate and inspire through technology, creating solutions that empower businesses and individuals alike.',
  //   vision:
  //     'To be the leading force in technological advancement, shaping a future where technology enhances every aspect of life.',
  //   values: [
  //     'Innovation',
  //     'Integrity',
  //     'Collaboration',
  //     'Excellence',
  //     'Customer-Centric',
  //   ],
  // };

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8'>
      <header className='mb-12 text-center'>
        <h1 className='text-5xl md:text-7xl font-extrabold text-center mb-4'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800'>
            Fòs Info
          </span>
        </h1>
        <p className='text-xl text-muted-foreground'>
          Rete konekte ak dènye anons, nouvèl, ak enfòmasyon nou yo
        </p>
      </header>

      <div className='max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='lg:col-span-1'
        >
          <Card className='bg-white shadow-none border-[0.1px] overflow-hidden'>
            <CardContent className='p-6 flex flex-col md:flex-row items-center justify-between'>
              <div className='mb-4 md:mb-0'>
                <h2 className='text-3xl text-primary font-bold mb-2 flex items-center'>
                  <PartyPopper className='mr-2 h-8 w-8' />
                  Lansman FÒS
                </h2>
                <p className='text-base mb-2'>
                  Federasyon Òganizasyon Sosyalis
                </p>
                <p className='text-lg flex items-center'>
                  <Calendar className='mr-2 h-5 w-5' />
                  18 Novanb 2024
                </p>
              </div>
              {/* <Button className='bg-white text-red-500 hover:bg-gray-100 hover:text-purple-700 transition-colors'>
                Apran PLis
              </Button> */}
            </CardContent>
          </Card>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className='h-full'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Megaphone className='h-6 w-6 text-blue-500' />
                Announcements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-4'>
                {announcements.map((announcement) => (
                  <li key={announcement.id}>
                    <h3 className='font-semibold text-lg'>
                      {announcement.title}
                    </h3>
                    <p className='text-sm text-gray-500 mb-1'>
                      {announcement.date}
                    </p>
                    <p>{announcement.content}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className='h-full'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Newspaper className='h-6 w-6 text-green-500' />
                News
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-4'>
                {news.map((item) => (
                  <li key={item.id}>
                    <h3 className='font-semibold text-lg'>{item.title}</h3>
                    <p className='text-sm text-gray-500 mb-1'>{item.date}</p>
                    <p
                      className={expandedNews === item.id ? '' : 'line-clamp-2'}
                    >
                      {item.content}
                    </p>
                    <Button
                      variant='link'
                      onClick={() =>
                        setExpandedNews(
                          expandedNews === item.id ? null : item.id
                        )
                      }
                      className='p-0 h-auto font-semibold text-blue-500 mt-1'
                    >
                      {expandedNews === item.id ? 'Read less' : 'Read more'}
                      <ChevronRight className='h-4 w-4 ml-1' />
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className='h-full'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Info className='h-6 w-6 text-purple-500' />
                About Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div>
                  <h3 className='font-semibold text-lg mb-2'>Our Mission</h3>
                  <p>{info.mission}</p>
                </div>
                <div>
                  <h3 className='font-semibold text-lg mb-2'>Our Vision</h3>
                  <p>{info.vision}</p>
                </div>
                <div>
                  <h3 className='font-semibold text-lg mb-2'>Our Values</h3>
                  <div className='flex flex-wrap gap-2'>
                    {info.values.map((value, index) => (
                      <Badge key={index} variant='secondary'>
                        {value}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </div>
  );
}
