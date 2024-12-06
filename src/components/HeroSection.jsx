import Hero from '../assets/hero.jpg';
import Bubble from '../assets/bubble.svg';

const HeroSection = () => {
  return (
    <section className="hero bg-greenDark">
      <div className="container py-20 md:py-10">
        <div className="flex items-center justify-between md:gap-20 flex-col-reverse md:flex-row">
          {/* Picture */}
          <div className="relative h-[400px] w-[300px] md:h-[550px] md:w-[400px]">
            <div className="absolute w-full h-full rounded-t-full shadow-[inset_0_0_10px_3px_rgba(0,0,0,1)] z-20"></div>
            <img src={Hero} alt="Manaus Hotel" className="w-full h-full object-cover object-top rounded-t-full z-10 relative" />
            <img src={Bubble} className="absolute bottom-[-20px] right-[-120px] w-[200px] h-[200px] object-cover object-top rounded-t-full opacity-80 z-10" />
            <img src={Bubble} className="absolute bottom-[-10px] right-3 object-cover object-top rounded-t-full w-[80px] h-[80px] opacity-80 z-20" />
            <div className='bg-greenLight w-10 h-10 shadow-[_0_0_180px_180px_#50c557] opacity-20 rounded-full relative z-0 top-[-340px] right-[-150px]'></div>
          </div>
          {/* Text */}
          <div className="text-textWhite space-y-5 relative">
            <h1 className=" font-body text-4xl font-normal relative z-20">
              Welcome to <br />
              <span className="">Manaus Hotel:</span>
            </h1>
            <div className='m-auto relative top-[-30px] h-2 w-[300px] bg-greenLight shadow-[_0_0_15px_10px_#50c557] opacity-40'></div>

            <p className="font-thin tracking-wider text-[1.2rem]">
              Your Gateway to Unmatched Comfort <br />
              and Luxury
            </p>

            <div className="flex gap-5">
              <button className="py-2 px-4 leading-3 border-solid border-textWhite border-[2.5px] uppercase tracking-wider font-body text-[0.6rem]">Contact Us</button>
              <button className="py-2 px-4 leading-3 bg-greenLight text-greenDark font-body text-[0.6rem] uppercase">Bookings</button>
            </div>
            <div className='bg-greenLight w-10 h-10 shadow-[_0_0_150px_150px_#50c557] opacity-20 rounded-full relative z-0 top-[-150px] right-[-100px]'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
