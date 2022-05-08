import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SingleItem = (props) => {
  const {item} = props;
  const {delet} = props;
  const link = `/inventory/${item._id}`;

  return (
    <div className="rounded-md shadow-lg p-8 bg-white m-6">
      <img src={item.img} className="w-full" alt="" />
      <div className="flex justify-between items-center mt-6 ">
        <h1 className="text-left text-2xl font-semibold text-kala mr-4 ">
          {item.name}
        </h1>
        <h1 className="text-4xl font-semibold text-komola ">${item.price}</h1>
      </div>
      
      <button className="text-white  rounded-full  font-bold py-2 px-4 hover:text-komola bg-komola border hover:bg-white border-komola mt-4 inline">
        <Link to={link}>Manage</Link>
      </button>
  
    </div>
  );
};

export default SingleItem;
