import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import MobileNav from '../shared/MobileNav';

const Navbar = () => {
  return (
    <div className="navbar bg-greenDark relative z-50">
      <div className="container py-5 flex items-center justify-between font-body">
        <div className="brand">
          <NavLink to="/">
            <img src={Logo} alt="Manaus Hotel" className="h-[45px]" />
          </NavLink>
        </div>
        <ul className="links text-white md:flex gap-5 text-[0.8rem] md:text-sm hidden">
          <li>
            <Link to="/" className="hover:bg-buttonBG rounded-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to={'/about-us'} className="hover:bg-buttonBG rounded-[30px]">
              About Us
            </Link>
          </li>
          <li>
            <Link to={'/bookings'} className="hover:bg-buttonBG rounded-[30px]">
              Bookings
            </Link>
          </li>
          <li>
            <Link to={'what-to-do'} className="hover:bg-buttonBG rounded-[30px]">
              What to Do
            </Link>
          </li>
          <li>
            <Link to={'/contacts'} className="hover:bg-buttonBG rounded-[30px]">
              Contact Us
            </Link>
          </li>
        </ul>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
