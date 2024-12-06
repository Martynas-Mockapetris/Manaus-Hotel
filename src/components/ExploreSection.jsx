import Img1 from '../assets/Big1.png';
import Img2 from '../assets/Small1.png';
import Img3 from '../assets/Small2.png';
import Img4 from '../assets/Small3.png';
import Img5 from '../assets/Small4.png';
import Bubble from '../assets/Bubble.svg';

const ExploreSection = () => {
  return (
    <section className="bg-greenDark py-5 pb-8 md:py-20 overflow-x-hidden">
      <div className="container relative">
        <img src={Bubble} className="w-[120px] h-[120px] absolute opacity-40 right-[-50px] top-[-20px]" />
        <div className="max-w-[300px] space-y-6">
          <h2 className="text-4xl font-semibold text-textWhite font-body">
            Explore <br /> <span className="font-text tracking-widest font-light text-3xl">Our Hotel</span>
          </h2>
          <p className="text-textWhite font-text font-thin opacity-75 text-[0.75rem]">Immerse Yourself in Luxury Amidst Nature's Tranquil Embrace</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div className="img-big">
            <img src={Img1} alt="Luxary Room" className="shadow-sm shadow-black" />
          </div>
          <div className="img-group grid grid-cols-2 gap-4 h-full">
            <div className="flex flex-col gap-4 h-full justify-start">
              <img src={Img2} alt="Conference Room" className="shadow-sm shadow-black" />
              <img src={Img3} alt="Spa" className="h-[101%] w-full shadow-sm shadow-black" />
            </div>
            <div className="flex flex-col gap-4 h-full justify-start">
              <img src={Img4} alt="Conference Room" className="" />
              <img src={Img5} alt="Pool" className="h-full w-full shadow-sm shadow-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
