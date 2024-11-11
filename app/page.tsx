import CallToAction from '@/components/call-to-action';
import { Hero } from '@/components/hero';
import LatestArticlesWithCTA from '@/components/latest-articles';
import OurMission from '@/components/our-mission';
import { WelcomeNotice } from '@/components/welcome-notice';

const HomePage = () => {
  return (
    <div className='mb-10 relative'>
      <Hero />
      <div className='absolute -top-20 left-1/2 transform -translate-x-1/2'>
        <WelcomeNotice />
      </div>
      <OurMission />
      <LatestArticlesWithCTA />
      <CallToAction />
    </div>
  );
};

export default HomePage;
``;
