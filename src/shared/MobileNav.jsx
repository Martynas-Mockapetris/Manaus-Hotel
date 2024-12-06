import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Bubble from '../assets/Bubble.svg'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="z-50 relative ">
        {isOpen ? <IoClose className="text-textWhite text-4xl" /> : <IoMenu className="text-textWhite text-4xl" />}
      </button>

      <div className={`fixed inset-0 bg-greenDark z-40 transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
          <img src={Bubble} alt="" className="absolute top-[150px] left-[40px] w-[200px] h-[100px] opacity-30 z-[80]" />
          <img src={Bubble} alt="" className="absolute bottom-[150px] left-[130px] w-[200px] h-[100px] opacity-30 z-[80]" />
          <img src={Bubble} alt="" className="absolute bottom-[150px] left-[175px] w-[200px] h-[50px] opacity-30 z-[80]" />
          <div className='bg-greenLight w-10 h-10 shadow-[_0_0_180px_180px_#50c557] opacity-20 rounded-full absolute z-0 top-[150px] right-[-50px]'></div>
          <div className='bg-greenLight w-10 h-10 shadow-[_0_0_180px_180px_#50c557] opacity-20 rounded-full absolute z-0 bottom-[150px] left-[-50px]'></div>
          <ul className="text-white text-center space-y-12 relative z-[100]">
            <li>
              <Link to="/" className="text-xl hover:bg-buttonBG px-4 py-2 rounded-lg" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="text-xl hover:bg-buttonBG px-4 py-2 rounded-lg" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/bookings" className="text-xl hover:bg-buttonBG px-4 py-2 rounded-lg" onClick={toggleMenu}>
                Bookings
              </Link>
            </li>
            <li>
              <Link to="/what-to-do" className="text-xl hover:bg-buttonBG px-4 py-2 rounded-lg" onClick={toggleMenu}>
                What to Do
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-xl hover:bg-buttonBG px-4 py-2 rounded-lg" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
