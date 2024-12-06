import Room from '../assets/Room.png';
import Bubble from '../assets/bubble.svg';

const BookNow = () => {
  return (
    <section className="bg-greenDark text-white py-10 pb-20 md:py-20 overflow-x-hidden overflow-y-visible">
      <div className="container relative z-20">
        <img src={Bubble} className='absolute bottom-[-60px] left-[-50px] w-[120px] opacity-40' alt="Bubble" />
        <div className="flex justify-between items-center gap-10 flex-col-reverse md:flex-row">
          <div className="md:min-w-[350px] w-full space-y-5">
            <h2 className="text-3xl font-light tracking-[1px]">
              Do you like it? Book <br />
              Apartment now!
            </h2>
            <button className="bg-greenLight py-2 px-5 leading-5 font-body text-[0.8rem] text-greenDark relative z-10">Book apartment</button>
          </div>
          <div className="">
            <img src={Room} alt="Junior Room" className="w-auto h-full shadow-[-80px_0px_50px_-5px_#50c5572c]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
