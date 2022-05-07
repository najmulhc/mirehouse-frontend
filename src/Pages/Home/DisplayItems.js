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
    <section>
      <h1 className="font-bold text-3xl py-2 text-green-600" >Featured Products</h1>
      <div className="md:grid md:grid-cols-3 md:gap-3 container mx-auto mb-10">
        {
          items.map(item => {return <SingleItem item={item} key={item._id}/>})
        }
      </div>
    </section>
  );
};

export default DisplayItems;
