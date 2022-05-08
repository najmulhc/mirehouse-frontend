import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleItem from "../SingleItem/SingleItem";

const Inventory = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items/all")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-5xl py-2 text-green-600">
        Manage inventory
      </h1>
      <h2 className="text-left text-xl py-3 font-semibold text-slate-700 mb-3">
        We have {items.length} prodeucts{" "}
        <span className="ml-2 bg-green-600 hover:bg-blue-dark 
        text-white font-semibold py-2 px-4 rounded">
         <Link to='/items/add'>Add another</Link>
        </span>
      </h2>
      <div className="md:grid md:grid-cols-3 md:gap-3  mb-10">
        {items.map((item) => {
          return <SingleItem item={item} delet={true} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default Inventory;
