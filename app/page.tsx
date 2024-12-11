import CallToAction from '@/components/call-to-action';
import { Hero } from '@/components/hero';
import LatestArticlesWithCTA from '@/components/latest-articles';
import OurMission from '@/components/our-mission';
import { WelcomeNotice } from '@/components/welcome-notice';
import getArticles from '@/lib/get-articles';

const HomePage = async () => {
  // const blogPoss = await getArticles();
  return (
    <div className='mb-10 relative h-[90vh] justify-center text-center items-center flex'>
      <h1 className='text-5xl font-black text-destructive'>
        Canceled By Developer
      </h1>
      {/* <Hero />
      <div className='absolute -top-16 lg:-top-20 left-1/2 transform -translate-x-1/2'>
        <WelcomeNotice />
      </div>
      <OurMission />
      <LatestArticlesWithCTA posts={blogPoss} />
      <CallToAction /> */}
    </div>
  );
};

export default HomePage;
