import AboutGal1 from '../assets/AboutGal1.png';
import AboutGal2 from '../assets/AboutGal2.png';
import AboutGal3 from '../assets/AboutGal3.png';
import AboutGal4 from '../assets/AboutGal4.png';

const AboutGallery = () => {
  return (
    <section className="bg-greenDark mt-[-40px] pb-20">
      {/* <div className="flex items-center justify-center h-[400px] w-full gap-5">
        <div className="w-1/3 h-[400px]">
          <img src={AboutGal1} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="w-1/3 h-[400px]">
          <img src={AboutGal2} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="w-1/3 h-[400px]">
          <img src={AboutGal3} alt="" className="h-full w-full object-cover" />
        </div>
      </div> */}
      <div>
        <img src={AboutGal4} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default AboutGallery;
