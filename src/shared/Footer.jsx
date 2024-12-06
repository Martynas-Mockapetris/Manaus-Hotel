import { Link, NavLink } from 'react-router-dom';
import { FaYoutube, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import Bubble from '../assets/Bubble.svg';

const Footer = () => {
  return (
    <div className="footer bg-greenDark text-textWhite font-body z-10 border-t-[1px] border-gray-600">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 py-14 relative">
        <img src={Bubble} alt="" className="absolute top-[-50px] right-[-140px] w-[200px] h-[100px] opacity-30" />
        {/* Media column */}
        <div>
          {/* Footer title */}
          <p>
            Join our Hotel newsletter with <br /> news and sales
          </p>
          <p className="text-[0.6rem] opacity-70 font-normal font-text tracking-tight py-4">Donec et scelerisque quam. Aliquam varius et sapien.</p>
          {/* Newsletter form */}
          <div className="form flex gap-2">
            <input type="text" placeholder="Enter your email.." className="font-text text-textWhite outline-none py-2 px-3 text-[10px] w-3/4" />
            <button className="bg-greenLight text-greenDark px-3 py-1 text-[12px] border-none uppercase">Submit</button>
          </div>
          {/* Socials */}
          <div className="socials flex gap-2 py-4">
            <FaYoutube />
            <FaFacebook />
            <FaInstagram />
            <FaTiktok />
          </div>
          {/* Copyright */}
          <div>
            <p className="text-[0.6rem] opacity-70 font-normal font-text tracking-tight py-8">&copy;2024 Manaus hote. All rights Reserved.</p>
          </div>
        </div>
        {/* Links column */}
        <div className="flex justify-center md:justify-end gap-20 font-text md:mr-0">
          <div className="booking flex flex-col gap-2">
            <h4 className="font-semibold text-2xl md:text-xl">Booking</h4>
            <ul className="links md:text-[0.65rem] space-y-3 opacity-90 tracking-wider font-thin">
              <li>
                <Link to={''}>Standard Room</Link>
              </li>
              <li>
                <Link to={''}>Superior Room</Link>
              </li>
              <li>
                <Link to={''}>Deluxe Room</Link>
              </li>
              <li>
                <Link to={''}>Junior Room</Link>
              </li>
            </ul>
          </div>
          <div className="hotel flex flex-col gap-2">
            <h4 className="font-semibold text-2xl md:text-xl">Hotel</h4>
            <ul className="links md:text-[0.65rem] space-y-3 opacity-90 tracking-wider font-thin">
              <li>
                <Link to={'/about-us'}>About</Link>
              </li>
              <li>
                <Link to={'/contacts'}>Contacts</Link>
              </li>
              <li>
                <Link to={'/careers'}>Careers</Link>
              </li>
              <li>
                <Link to={'/faqs'}>FAQs</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
