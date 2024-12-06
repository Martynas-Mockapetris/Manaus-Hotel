import Room1 from '../assets/Room1.jpg';
import Room2 from '../assets/Room2.jpg';
import Room3 from '../assets/Room3.jpg';
import Room4 from '../assets/Room4.jpg';

const BookingsSection = () => {
  return (
    <section className="bg-greenDark pt-5">
      <div className="container">
        {/* Check availability */}
        <form className="flex gap-3 w-3/4 m-auto justify-center flex-wrap">
          <div className="bg-textWhite flex grow flex-col p-4 shadow-[inset_-50px_0_50px_-30px_#50C5574C] w-[40%] lg:w-[18%]">
            <label className="uppercase font-text font-thin"> Check in</label>
            <input type="date" className="bg-transparent font-thin outline-none" />
          </div>
          <div className="bg-textWhite flex grow flex-col p-4 shadow-[inset_-50px_0_50px_-30px_#50C5574C] w-[40%] lg:w-[18%]">
            <label className="uppercase font-text font-thin"> Check out</label>
            <input type="date" className="bg-transparent font-thin outline-none" />
          </div>
          <div className="bg-textWhite flex grow flex-col p-4 shadow-[inset_-50px_0_50px_-30px_#50C5574C] w-[40%] lg:w-[18%]">
            <label className="uppercase font-text font-thin"> Guests</label>
            <select id="" className="bg-transparent font-body font-normal tracking-wider text-2xl outline-none border-none focus:outline-none active:outline-none">
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
              <option value="6">06</option>
            </select>
          </div>
          <div className="bg-textWhite flex grow flex-col p-4 shadow-[inset_-50px_0_50px_-30px_#50C5574C] w-[40%] lg:w-[18%]">
            <label className="uppercase font-text font-thin outline-none"> Rooms</label>
            <select id="" className="bg-transparent font-body font-normal tracking-wider text-2xl outline-none border-none focus:outline-none active:outline-none">
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
              <option value="6">06</option>
            </select>
          </div>
          <button className="bg-greenLight text-greenDark font-body uppercase leading-5 py-4 px-9">
            Check <br /> Availability
          </button>
        </form>
        {/* Rooms to offer */}
        <div className="space-y-6 mt-16 xl:w-3/4 m-auto">
          <div className="rounded-md overflow-hidden shadow-md">
            <div className="flex items-center md:h-[220px] xl:h-[300px] flex-col-reverse md:flex-row">
              <div className="bg-textWhite md:w-7/12 h-full items-start flex flex-col justify-center space-y-2 px-8 py-4 xl:px-16 w-full">
                <h4 className="text-xl font-body">Standard Room</h4>
                <p className="text-[0.8rem] font-light tracking-wider">Immerse Yourself in Luxury Amidst Nature's Tranquil Embrace.</p>
                <span className="text-greenLight font-body text-[0.8rem]">
                  <bold className="font-body text-xl text-black mr-2">147.6 $</bold>/Night
                </span>
                <div className="py-2 flex">
                  <button className="bg-greenLight py-3 px-4 font-body leading-3 text-[0.8rem] mr-8 uppercase">Book Now</button>
                  <button className="border-b-2 border-greenLight py-3 font-body leading-3 text-[0.8rem] mr-8 uppercase">More Details</button>
                </div>
              </div>
              <div className="md:h-full md:w-5/12 ">
                <img src={Room1} alt="Standard Room" className="object-cover h-full w-full" />
              </div>
            </div>
          </div>
          <div className="rounded-md overflow-hidden shadow-md">
            <div className="flex items-center md:h-[220px] xl:h-[300px] flex-col md:flex-row">
              <div className="md:h-full md:w-5/12">
                <img src={Room2} alt="Standard Room" className="object-cover h-full w-full" />
              </div>
              <div className="bg-textWhite md:w-7/12 w-full h-full items-start flex flex-col justify-center space-y-2 px-8 py-4 xl:px-16">
                <h4 className="text-xl font-body">Superior Room</h4>
                <p className="text-[0.8rem] font-light tracking-wider">Immerse Yourself in Luxury Amidst Nature's Tranquil Embrace.</p>
                <span className="text-greenLight font-body text-[0.8rem]">
                  <bold className="font-body text-xl text-black mr-2">196.8 $</bold>/Night
                </span>
                <div className="py-2 flex">
                  <button className="bg-greenLight py-3 px-4 font-body leading-3 text-[0.8rem] mr-8 uppercase">Book Now</button>
                  <button className="border-b-2 border-greenLight py-3 font-body leading-3 text-[0.8rem] mr-8 uppercase">More Details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md overflow-hidden shadow-md">
            <div className="flex items-center md:h-[220px] xl:h-[300px] flex-col-reverse md:flex-row">
              <div className="bg-textWhite md:w-7/12 w-full h-full items-start flex flex-col justify-center space-y-2 px-8 py-4 xl:px-16">
                <h4 className="text-xl font-body">Deluxe Room</h4>
                <p className="text-[0.8rem] font-light tracking-wider">Immerse Yourself in Luxury Amidst Nature's Tranquil Embrace.</p>
                <span className="text-greenLight font-body text-[0.8rem]">
                  <bold className="font-body text-xl text-black mr-2">233.7 $</bold>/Night
                </span>
                <div className="py-2 flex">
                  <button className="bg-greenLight py-3 px-4 font-body leading-3 text-[0.8rem] mr-8 uppercase">Book Now</button>
                  <button className="border-b-2 border-greenLight py-3 font-body leading-3 text-[0.8rem] mr-8 uppercase">More Details</button>
                </div>
              </div>
              <div className="md:h-full md:w-5/12">
                <img src={Room3} alt="Standard Room" className="object-cover h-full w-full" />
              </div>
            </div>
          </div>
          <div className="rounded-md overflow-hidden shadow-md">
            <div className="flex items-center md:h-[220px] xl:h-[300px] flex-col md:flex-row">
              <div className="md:h-full md:w-5/12">
                <img src={Room4} alt="Standard Room" className="object-cover h-full w-full" />
              </div>
              <div className="bg-textWhite md:w-7/12 w-full h-full items-start flex flex-col justify-center space-y-2 px-8 py-4 xl:px-16">
                <h4 className="text-xl font-body">Junior Suite</h4>
                <p className="text-[0.8rem] font-light tracking-wider">Immerse Yourself in Luxury Amidst Nature's Tranquil Embrace.</p>
                <span className="text-greenLight font-body text-[0.8rem]">
                  <bold className="font-body text-xl text-black mr-2">270.6 $</bold>/Night
                </span>
                <div className="py-2 flex">
                  <button className="bg-greenLight py-3 px-4 font-body leading-3 text-[0.8rem] mr-8 uppercase">Book Now</button>
                  <button className="border-b-2 border-greenLight py-3 font-body leading-3 text-[0.8rem] mr-8 uppercase">More Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-8 pb-16 flex items-center justify-center'>
          <button className="bg-transparent border-[3px] border-textWhite py-4 px-5 leading-3 font-body text-[0.8rem] text-textWhite uppercase">Load More</button>
        </div>
      </div>
    </section>
  );
};

export default BookingsSection;
