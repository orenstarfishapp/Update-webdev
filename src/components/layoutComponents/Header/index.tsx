import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

interface HeaderProps {
  navItems: string[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("#4E0559");

  // Change the header background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor("#4E0559");
      } else {
        setBgColor("#4E0559");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <header
        dir="rtl"
        className="fixed px-[10px] w-full z-50 transition-colors shadow-custom-black duration-300 content-center"
        style={{ backgroundColor: bgColor, minHeight: "100px" }}
      >
        <div className="container mx-auto my-0 flex-wrap flex-col md:flex-col xl:flex-row basis-auto flex-grow max-w-[1140px] overflow-x-hidden shrink flex items-center justify-center py-[10px] h-full">
  <div className="flex-shrink-0 md:ml-5 w-[120px] h-[80px] flex justify-center items-center">
    <Link to="/דף הבית" aria-label="Home Page">
      <div className="object-contain w-full h-full">
        <svg
          className={`text-white h-[6rem] w-24`}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`animate-bounce animate-duration-[4000ms]`}
            d="M20,80 Q40,40 60,20 Q80,40 60,80 Z"
            fill="#ff0000"
          />
          <path
            className={`animate-bounce animate-duration-[3900ms]`}
            d="M40,80 Q60,40 80,20 Q100,40 80,80 Z"
            fill="#cccccc"
          />
        </svg>
      </div>
    </Link>
  </div>

  <div className="relative order-1 w-full flex justify-center items-center">
    {/* Desktop and Mobile Navigation */}
    <nav className="flex flex-wrap justify-center w-full">
      <ul className="flex flex-wrap items-center justify-center space-x-2 w-full">
        {navItems.map((item, index) => (
          <NavItem key={index} text={item} />
        ))}
      </ul>
    </nav>
  </div>
</div>

      </header>
    </div>
  );
};

export default Header;
