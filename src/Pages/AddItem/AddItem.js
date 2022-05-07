import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const AddItem = () => {
  const [user] = useAuthState(auth);
  const submitItem = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const img = e.target.img.value;
    const description = e.target.description.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const adder = user.email;
    const item = {
      name,
      description,
      img,
      price: parseInt(price),
      supplier,
      quantity: parseInt(quantity),
      user: adder,
    };
    console.log(item);
    fetch("http://localhost:5000/items/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="bg-blue-600  flex justify-center items-center py-[120px]">
      <div className="w-[600px] bg-white shadow-md p-3">
        <form action="" className="w-[90%] mx-auto" onSubmit={submitItem}>
          <h1 className="text-3xl text-center font-bold text-green-600 mb-2">
            Add an Item
          </h1>
          <label htmlFor="name" className="my-2">
            <h3 className="text-left text-md text-lg font-semibold text-slate-800 p-0 m-0 ">
              Item name:
            </h3>
            <input
              name="name"
              type="text"
              placeholder="Eg: Backpack"
              className="w-full py-1 px-2 text-xl my-2  border  border-green-500"
              required
            />
          </label>
          <label htmlFor="name" className="my-2">
            <h3 className="text-left text-md text-lg font-semibold text-slate-800 p-0 m-0 ">
              Description:
            </h3>
            <input
              name="description"
              type="text"
              placeholder="Add a short description"
              className="w-full py-1 px-2 text-xl my-2  border  border-green-500"
              required
            />
          </label>
          <label htmlFor="name" className="my-2">
            <h3 className="text-left text-md text-lg font-semibold text-slate-800 p-0 m-0 ">
              Image:{" "}
              <span className="text-slate-400">
                (Make sure the image has correct dimention)
              </span>
            </h3>
            <input
              name="img"
              type="text"
              placeholder="Image url"
              className="w-full py-1 px-2 text-xl my-2  border  border-green-500"
            />
          </label>
          <label htmlFor="name" className="my-2">
            <h3 className="text-left text-md text-lg font-semibold text-slate-800 p-0 m-0 ">
              Price:
            </h3>
            <input
              name="price"
              type="number"
              placeholder="In US$"
              className="w-full py-1 px-2 text-xl my-2  border  border-green-500"
              required
            />
          </label>
          <label htmlFor="name" className="my-2">
            <h3 className="text-left text-md text-lg font-semibold text-slate-800 p-0 m-0 ">
              Supplier:
            </h3>
            <input
              name="supplier"
              type="text"
              placeholder="The company we will get the product from"
              className="w-full py-1 px-2 text-xl my-2  border  border-green-500"
              required
            />
          </label>
          <label htmlFor="name" className="my-2">
            <h3 className="text-left text-md text-lg font-semibold text-slate-800 p-0 m-0 ">
              Quantity:
            </h3>
            <input
              name="quantity"
              type="number"
              placeholder="How many Items???"
              className="w-full py-1 px-2 text-xl my-2  border  border-green-500"
            />
          </label>
          <button
            className="w-full  bg-green-600 text-white py-1 text-xl"
            type="submit"
          >
            Add this!!!
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
