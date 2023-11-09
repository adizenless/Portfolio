import React from "react";
// images
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="Logo" className="w-24 h-24 object-contain" />
          </a>
          {/* button */}
          <a href='#contact'>
            <button className="btn btn-sm font-['Roboto'] tracking-wider">
              Работай со мной
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
