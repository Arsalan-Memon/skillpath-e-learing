import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import React, { useState } from "react";
import { navItems } from "../data/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full py-5">
      <div className="container flex items-center justify-between border-b border-b-white-95 pb-5">
        <a href="#">
          <img src="src/assets/logo.png" alt="logo" width={170} height={50} />
        </a>
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          <button className="absolute top-8 right-8" onClick={clickHandle}>
            <RiCloseLine size={30} />
          </button>
          <ul className="space-y-5 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="text-lg font-medium hover:text-black transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="primary-btn mt-12 max-w-40 w-full  border-white border-3">
            Login
          </button>
        </nav>
        <button className="lg:hidden" onClick={clickHandle}>
          <RiMenuLine />
        </button>
        <div className="max-lg:hidden flex items-center gap-10">
          <ul className="flex gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="hover:text-orange-50 transition-colors font-medium text-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="max-lg:hidden primary-btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
