
import React, {useState, useRef, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';


// COMPONENTS
import SlideIn from '../components/SlideIn';
import SlideOut from '../components/SlideOut';

//MEDIA/ICONS
import logo from "../src/public/assets_media/Foodies logo without Banner 1.png";
import searchIconImg from "../src/public/assets_media/Frame 74.png";
import loveIconImg from "../src/public/assets_media/Frame 73.png";
import cartIconImg from "../src/public/assets_media/Frame 72.png";
import menuImg from "../src/public/assets_media/menuIcon.png";

// CSS MODULES
import headerCss from "../css modules/header.module.css";

const Header = ({display}) => {

  const openNclose = useRef(null)

  const [showNav, setShowNav] = useState(false)

  function handle(){
    setShowNav(!showNav);
  }

  

  return (
    <header>
      <div
        className={`flex justify-around items-center pt-[10px] pb-[10px] bg-white ${headerCss.miniHeaderTag}`}
      >
        <img
          src={logo}
          alt="logo icon"
          className={`object-contain ${headerCss.logoTag}`}
        />

        <nav
          className={`flex justify-between gap-[40px] ${headerCss.navContainer}`}
        >
          <NavLink
            to="/home"
            className={`text-black text-[16px] font-medium ${headerCss.navLinks}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/ourProducts"
            className={`text-black text-[16px] font-medium ${headerCss.navLinks}`}
          >
            Our Products
          </NavLink>
          <NavLink
            to="/healthBenefits"
            className={`text-black text-[16px] font-medium ${headerCss.navLinks}`}
          >
            Health Benefits
          </NavLink>
          <NavLink
            to="/blog"
            className={`text-black text-[16px] font-medium ${headerCss.navLinks}`}
          >
            Blog
          </NavLink>
          <NavLink
            to="/FAQs"
            className={`text-black text-[16px] font-medium ${headerCss.navLinks}`}
          >
            FAQs
          </NavLink>
        </nav>

        <img
          src={searchIconImg}
          alt="search icon"
          className={` mr-[-45px] ml-[-45px] object-contain ${headerCss.searchIcon}`}
        />

        <img
          src={loveIconImg}
          alt="search icon"
          className={` object-contain mr-[-10%] ${headerCss.loveIcon}`}
        />

        <img
          src={cartIconImg}
          alt="search icon"
          className={`object-contain mr-[-17%] ${headerCss.cartIcon}`}
        />
        {/* buttons */}
        <button type="button" onClick={handle} ref={openNclose}>
          <img
            src={menuImg}
            alt="menu icon"
            className={`hidden h-[50px] w-[50px] ${headerCss.menuBtn}`}
          />
        </button>

        <button
          className={`h-[45px] w-[120px] text-[16px] font-semibold text-white rounded-md ${headerCss.contactBtn}`}
        >
          Contact Us
        </button>
      </div>

      {/* slideIn nav */}
      {showNav ? <SlideIn /> : <SlideOut />}
    </header>
  );
}

export default Header
