import React, { useEffect, useState } from "react";
import SingleItem from "../SingleItem/SingleItem";

const DisplayItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items/home")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <section className=" bg-komola py-10 mt-8">
        <h1 className="text-kala text-4xl font-bold text-center mb-8">
        Featured Products
      </h1>
      <div className="container md:grid md:grid-cols-3    mx-auto mb-10">
        {
          items.map(item => {return <SingleItem item={item} key={item._id}/>})
        }
      </div>
    </section>
  );
};

export default DisplayItems;
