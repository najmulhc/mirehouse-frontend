import React from "react";
import DisplayItems from "./DisplayItems";
import Experience from "./Experience";
import Hero from "./Hero";
import "./home.css";
import Service from "./Service";
const Home = () => {
  return (
    <div>
      <Hero />
    <Experience/>
      <DisplayItems />
      <Service />
    </div>
  );
};

export default Home;
