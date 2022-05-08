import React from 'react';
import DisplayItems from './DisplayItems';
import Hero from './Hero';
import './home.css'
const Home = () => {
    return (
        <div>
           <Hero/>
           <DisplayItems/>
        </div>
    );
};

export default Home;