import React from 'react';
import { Link } from 'react-router-dom';
import {GiMountainClimbing} from "react-icons/gi"
const Footer = () => {
    return (
        <footer className="bg-kala py-12 text-center md:text-left">
        <div className="container md:container mx-auto">
          <div className="md:grid md:grid-cols-5">
          <Link
              className="text-4xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap   text-white"
              to='/'
            >
             Mire<span className='text-komola'>House</span>
            </Link>
            <div></div>
            <div className="mt-6 md:ml-auto md:mt-0 md:text-left cursor-pointer">
            <h3 className='text-md uppercase font-semibold'>About us</h3>
              <p className="text-white py-1">Home</p>
              <p className="text-white py-1">Get in touch</p>
              <p className="text-white py-1">FAQs</p>
          

            </div>
            <div className="mt-6 md:mt-0 md:ml-auto md:text-left cursor-pointer">
            <h3 className='text-md uppercase font-semibold'>Product</h3>
              <p className="text-white py-1">How it works</p>
              <p className="text-white py-1">Testimonials</p>
              <p className="text-white py-1">Client benefits</p> 
            </div>
          </div>
          <div className="md:flex md:flex-row-reverse items-center justify-between text-white opacity-50 mt-16">
            
              <ul className="md:flex gap-7 items-center">
                  <li>Terms of condition</li>
                  <li>Privacy policy</li>
              </ul>
              <p className="text-white opacity-50 ">©MireHouse. All rights reserved</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;