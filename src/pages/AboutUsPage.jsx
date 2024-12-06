import AboutGallery from '../components/AboutGallery';
import AboutUsText from '../components/AboutUsText';
import BookNow from '../components/BookNow';

const AboutUsPage = () => {
  return (
    <>
      <AboutGallery />
      <section className='bg-greenDark text-textWhite'>
        <div className="container">
          <h1 className=" font-body text-4xl font-normal relative z-20 pb-5">
            About <br />
            <span className="ml-2">Manaus Hotel</span>
          </h1>
          <div className="left-5 relative top-[-25px] h-2 w-[300px] bg-greenLight shadow-[_0_0_15px_10px_#50c557] opacity-40"></div>
        </div>
      </section>
      <AboutUsText />
      <BookNow />
    </>
  );
};

export default AboutUsPage;
