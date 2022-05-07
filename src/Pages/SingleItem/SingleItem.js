import React from "react";
import { Link } from "react-router-dom";

const SingleItem = ({ item }) => {
    const link = `/inventory/${item._id}`
  return (
    <div className="  p-3 bg-green-200 h-full">
      <img src={item.img} className="w-48 mx-auto   m-4" alt="" />
      <div className="flex justify-between items-center mx-3 ">
        <h1 className="text-left text-xl font-bold text-slate-600 mr-4 ">
          {item.name}
        </h1>
        <h1 className="text-4xl font-bold text-green-700 ">${item.price}</h1>
      </div>
      <h2 className="text-left ml-3 mt-7 text-xl text-slate-700">Supplied by: <span className="text-green-700 font-semibold">{item.supplier}</span></h2>
      <h1 className="text-left ml-3 text-2xl text-slate-800 font-semibold mt-1">Stock: <span className="font-bold text-green-700">{item.quantity}</span></h1>
      <button className="text-3xl"><Link  to={link} >go there</Link></button>
    </div>
  );
};

export default SingleItem;
