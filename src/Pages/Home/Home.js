import React from "react";
import DisplayItems from "./DisplayItems";
import Hero from "./Hero";
import "./home.css";
import Service from "./Service";
const Home = () => {
  return (
    <div>
      <Hero />

      <DisplayItems />
      <Service />
    </div>
  );
};

export default Home;
