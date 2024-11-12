import React, { useState } from 'react';
import Container from '../layer/Container';
import logo from '../../public/logo.svg';
import Image from '../layer/Image';
import Li from '../layer/Li';
import Button from '../layer/Button';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg py-4">
      <Container className="flex justify-between items-center">

        <div className="flex items-center w-[221px] h-[36px] space-x-2">
          <Image src={logo} alt="Logo" className="h-full w-full" />
        </div>


        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>


        <ul className="hidden md:flex space-x-8">
          <Li className="text-green" to="/">Home</Li>
          <Li to="/about">About</Li>
          <Li to="/services">Services</Li>
          <Li to="/projects">Project</Li>
        </ul>


        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full z-50 bg-white shadow-lg`}>
          <ul className="flex flex-col items-center space-y-4 py-4">
            <Li className="text-green" to="/" onClick={toggleMenu}>Home</Li>
            <Li to="/about" onClick={toggleMenu}>About</Li>
            <Li to="/services" onClick={toggleMenu}>Services</Li>
            <Li to="/projects" onClick={toggleMenu}>Project</Li>
            <Li to="/contact-us" onClick={toggleMenu}>Contact Us</Li>
            <li>
              <Button className="btn-primary" onClick={toggleMenu}>
                Book Now
              </Button>
            </li>
          </ul>
        </div>


        <div className="hidden md:flex items-center gap-x-3">
          <ul>
            <Li to="/contact-us">Contact Us</Li>
          </ul>
          <Button className="btn-primary">
            Book Now
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
