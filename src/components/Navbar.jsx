// import logo from '../assets/kevinRushLogo.png';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 bg-black-100 shadow-md">
      {/* Logo */}
      <div className="flex items-center pl-6">
        <p className="text-3xl animate-color-change">Nikolas</p>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="block lg:hidden pr-6">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 z-10 w-full bg-gray-100 lg:static lg:block lg:w-auto lg:bg-transparent`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-xl lg:flex-row lg:m-0 lg:py-0 lg:text-2xl">
          <li className="transform hover:scale-110 hover:text-blue-900">
            <a href="#">Home</a>
          </li>
          <li className="transform hover:scale-110 hover:text-blue-900">
            <a href="#">About Me</a>
          </li>
          <li className="transform hover:scale-110 hover:text-blue-900">
            <a href="#">Experience</a>
          </li>
          <li className="transform hover:scale-110 hover:text-blue-900">
            <a href="#">Projects</a>
          </li>
          <li className="transform hover:scale-110 hover:text-blue-900">
            <a href="#">Technologies</a>
          </li>
          <li className="transform hover:scale-110 hover:text-blue-900">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="hidden lg:flex items-center gap-4 pr-6 text-2xl">
        <a href="#" className="transform hover:scale-110">
          <FaGithub />
        </a>
        <a href="#" className="transform hover:scale-110">
          <FaLinkedin />
        </a>
        <a href="#" className="transform hover:scale-110">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

