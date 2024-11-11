import CallToAction from '@/components/call-to-action';
import { Hero } from '@/components/hero';
import LatestArticlesWithCTA from '@/components/latest-articles';
import OurMission from '@/components/our-mission';

const HomePage = () => {
  return (
    <div className='mb-10'>
      <Hero />
      <OurMission />
      <LatestArticlesWithCTA />
      <CallToAction />
    </div>
  );
};

export default HomePage;
