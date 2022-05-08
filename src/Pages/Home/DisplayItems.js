import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleItem from "../SingleItem/SingleItem";

const DisplayItems = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
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
        {items.map((item) => {
          return <SingleItem item={item} key={item._id} />;
        })}
      </div>
      <button
        onClick={() => navigate("/inventory")}
        className="flex w-full justify-center text-3xl"
        type="submit"
      >
        {" "}
        <span className="text-komola  rounded-full  font-bold py-2 px-20  hover:text-white bg-white hover:bg-komola border-2 border-white  my-2 mx-auto ">
          Load Inventory
        </span>
      </button>
    </section>
  );
};

export default DisplayItems;
