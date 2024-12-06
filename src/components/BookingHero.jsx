import Bubble from '../assets/Bubble.svg';
import Hero from '../assets/BookingHero.jpg';

const BookingHero = () => {
  return (
    <section className="hero bg-greenDark overflow-hidden">
      <div className="container py-24 md:py-10">
        <div className="flex items-center justify-between md:gap-20 flex-col md:flex-row">
          {/* Text */}
          <div className="text-textWhite space-y-5 relative">
            <h1 className=" font-body text-4xl font-normal relative z-20">
              Rooms at <br />
              <span className="ml-2">Manaus Hotel</span>
            </h1>
            <div className="m-auto relative top-[-30px] h-2 w-[300px] bg-greenLight shadow-[_0_0_15px_10px_#50c557] opacity-40"></div>

            <div className="bg-greenLight w-10 h-10 shadow-[_0_0_150px_150px_#50c557] opacity-20 rounded-full relative z-0 top-[-70px] right-[-100px]"></div>
          </div>
          {/* Picture */}
          <div className="relative h-[350px] w-[300px] md:h-[450px] md:w-[400px]">
            <div className="absolute w-full h-full rounded-t-full shadow-[inset_0_0_10px_5px_rgba(0,0,0,0.7)] z-20"></div>
            <img src={Hero} alt="Manaus Hotel" className="w-full h-full object-cover object-top rounded-t-full z-10 relative" />
            <img src={Bubble} className="absolute bottom-[-20px] right-[-120px] w-[200px] h-[200px] object-cover object-top rounded-t-full opacity-80 z-10" />
            <img src={Bubble} className="absolute bottom-[-10px] right-3 object-cover object-top rounded-t-full w-[80px] h-[80px] opacity-80 z-20" />
            <div className="bg-greenLight w-10 h-10 shadow-[_0_0_180px_180px_#50c557] opacity-20 rounded-full relative z-0 top-[-300px] right-[-40px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingHero;
