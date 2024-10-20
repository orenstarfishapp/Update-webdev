import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

interface HeaderProps {
  navItems: string[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("#4E0559");

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
        <div className="container mx-auto mr-2 my-0 flex-wrap pl-4 flex-row md:flex-col xl:flex-row basis-auto flex-grow max-w-[1140px] w-full shrink flex items-center lg:justify-between py-[10px] h-full relative">
          <div className="flex-1 order-1">
            <nav className="flex justify-center">
              <ul className="flex items-center w-full justify-right mr-24">
                {navItems.map((item, index) => (
                  <NavItem key={index} text={item} />
                ))}
              </ul>
            </nav>
          </div>

          {/* Logo positioned at the bottom right */}
          <div className="absolute right-2 w-[120px] h-[80px]">
            <Link to="/דף הבית">
              <div className="object-contain w-full h-full">
                <svg
                  className="text-white h-[6rem] w-24"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                    className="animate-bounce animate-duration-[4000ms]"
                    d="M20,80 Q40,40 60,20 Q80,40 60,80 Z"
                    fill="#ff0000"
                    style={{ transform: 'translateY(-2px)' }} // Further reduce the translateY value
                  />
                  <path
                    className="animate-bounce animate-duration-[3900ms]"
                    d="M40,80 Q60,40 80,20 Q100,40 80,80 Z"
                    fill="#cccccc"
                    style={{ transform: 'translateY(-2px)' }} // Further reduce the translateY value
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
