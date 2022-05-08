import React from "react";
import { FiTruck, FiPackage, FiHome } from "react-icons/fi";
import {BiTaskX} from "react-icons/bi"
const Service = () => {
  return (
    <section className="container mx-auto mb-10">
      <h1 className="text-kala text-4xl font-bold text-center my-10">
        Our service
      </h1>
      <div className="grid md:grid-cols-4 gap-8">
        <div className="bg-komola hover:bg-kala p-4 rounded-md shadow-lg mx-4 ">
          <h1 className="text-8xl text-white flex justify-center mb-3">
            <FiTruck />
          </h1>
          <h2 className="text-md font-bold text-center text-white uppercase">
            ground transport
          </h2>
        </div>
        <div className="bg-komola hover:bg-kala p-4 rounded-md shadow-lg mx-4 ">
          <h1 className="text-8xl text-white flex justify-center mb-3">
            <FiPackage />
          </h1>
          <h2 className="text-md font-bold text-center text-white uppercase">
            packaging service
          </h2>
        </div>
        <div className="bg-komola hover:bg-kala p-4 rounded-md shadow-lg mx-4 ">
          <h1 className="text-8xl text-white flex justify-center mb-3">
            <FiHome />
          </h1>
          <h2 className="text-md font-bold text-center text-white uppercase">
            large warehouse
          </h2>
        </div>
        <div className="bg-komola hover:bg-kala p-4 rounded-md shadow-lg mx-4 ">
          <h1 className="text-8xl text-white flex justify-center mb-3">
            <BiTaskX />
          </h1>
          <h2 className="text-md font-bold text-center text-white uppercase">
           weekly audit
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Service;
