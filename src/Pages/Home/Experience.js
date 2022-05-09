import React from "react";
import experience from "../../img/experince.png"
const Experience = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-2xl mb-2 text-kala">
                We provide the best warehouse possible for your business
              </h1>
              <div className="leading-relaxed">
               our warehouse has a wide range of options and packages for you to fullfill your demunds. most of the top businesses use our warehouse to store their products. what you are waiting for? try it now!
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-komola">
                750+
              </h2>
              <p className="leading-relaxed">Happy Clients</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-komola">
                11.8K
              </h2>
              <p className="leading-relaxed">Shipment</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-komola">
                35
              </h2>
              <p className="leading-relaxed">Storage houses</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-komola">
                1M+
              </h2>
              <p className="leading-relaxed">Products stored</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src={experience}
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
