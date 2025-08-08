
import React from 'react'
import { NavLink } from 'react-router-dom';

// CSS MODULES
import headerCss from "../css modules/header.module.css";

const SlideIn = () => {
  
  return (
    <div>
      <ul
        className={`absolute w-[300px] bg-orange-400 border-solid border-[2px] border-green-600 rounded-md gap-[40px] ${headerCss.navConIn} `}
      >
        <li>
          <NavLink
            to="/home"
            className={`text-white text-[16px] font-medium ${headerCss.navLinks}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ourProducts"
            className={`text-white text-[16px] font-medium ${headerCss.navLinks}`}
          >
            Our Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/healthBenefits"
            className={`text-white text-[16px] font-medium ${headerCss.navLinks}`}
          >
            Health Benefits
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={`text-white text-[16px] font-medium ${headerCss.navLinks}`}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/FAQs"
            className={`text-white text-[16px] font-medium ${headerCss.navLinks}`}
          >
            FAQs
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SlideIn
