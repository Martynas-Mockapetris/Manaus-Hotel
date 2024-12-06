import BookNow from '../components/BookNow';
import ExploreGallery from '../components/ExploreGallery';
import ExploreSection from '../components/ExploreSection';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ExploreSection />
      <BookNow />
      <ExploreGallery />
    </>
  );
};

export default HomePage;
