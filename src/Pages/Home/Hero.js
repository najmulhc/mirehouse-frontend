import React from "react";
import "./home.css";
const Hero = () => {
  return (
    <main className="hero md:h-screen ">
      <div className="container mx-auto">
        <div className="py-10 px-4">
          <h1 className="text-left font-bold text-2xl  md:text-6xl text-kala">
            Welcome to the biggest <br /> warehouse in the country
          </h1>
          <button className=" text-white  rounded-full  font-bold py-2 px-4 hover:text-komola bg-komola border hover:bg-white border-komola mt-4">
           Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
