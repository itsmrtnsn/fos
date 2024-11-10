import { Hero } from '@/components/hero';
import LatestArticlesWithCTA from '@/components/latest-articles';
import OurMission from '@/components/our-mission';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <OurMission />
      <LatestArticlesWithCTA />
    </div>
  );
};

export default HomePage;
