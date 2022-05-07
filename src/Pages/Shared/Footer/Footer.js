import React from 'react';
import { Link } from 'react-router-dom';
import {GiMountainClimbing} from "react-icons/gi"
const Footer = () => {
    return (
        <footer className="bg-green-900 py-12">
        <div className="container md:container mx-auto">
          <div className="md:grid md:grid-cols-5">
          <Link
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to='/'
            >
             <span> <GiMountainClimbing className="inline text-4xl"></GiMountainClimbing> Summit gear</span>
            </Link>
            <div className="mt-6 md:ml-auto md:mt-0 md:text-left cursor-pointer">
              <p className="text-white py-1">Our Customers</p>
              <p className="text-white py-1">Our Blog </p>
              <p className="text-white py-1">Our Suppliers </p>

            </div>
            <div className="mt-6 md:mt-0 md:ml-auto md:text-left cursor-pointer">
              <p className="text-white py-1">Get help</p>
              <p className="text-white py-1">Read FAQs </p>
              <p className="text-white py-1">View all Pickup centers</p> 
            </div>
          </div>
          <div className="md:flex md:flex-row-reverse items-center justify-between text-white opacity-50 mt-16">
            
              <ul className="md:flex gap-7 items-center">
                  <li>Terms of condition</li>
                  <li>Privacy policy</li>
              </ul>
              <p className="text-white opacity-50 ">©Summit Gears . All rights reserved</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;