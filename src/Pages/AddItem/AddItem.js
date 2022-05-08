import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
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
      .then((data) => {
        toast("Item added to the server");
        e.target.reset();
      });
  };

  return (
    <div className="bg-komola  flex justify-center items-center py-5">
      <div className="w-[600px] bg-white shadow-md p-4 rounded-md">
        <form action="" className="w-[90%] mx-auto" onSubmit={submitItem}>
          <h1 className="text-kala text-4xl font-bold text-center mb-10">
            Add an item
          </h1>
          <label htmlFor="name" className="my-2">
            <h3 className="m-0 mt-6 p-0 font-semibold text-kala">Item name:</h3>
            <input
              name="name"
              type="text"
              placeholder="Eg: Backpack"
              className="border-b-2 w-full p-2 text-lg border-b-komola "
              required
            />
          </label>
          <label htmlFor="name" className="my-2">
            <h3 className="m-0 mt-6 p-0 font-semibold text-kala">
              Description:
            </h3>
            <input
              name="description"
              type="text"
              placeholder="Add a short description"
              className="border-b-2 w-full p-2 text-lg border-b-komola "
              required
            />
          </label>
          <label htmlFor="name" className="my-2">
            <h3 className="m-0 mt-6 p-0 font-semibold text-kala">
              Image:{" "}
              <span className="text-slate-400">
                (Make sure the image has correct dimention)
              </span>
            </h3>
            <input
              name="img"
              type="text"
              placeholder="Image url"
              className="border-b-2 w-full p-2 text-lg border-b-komola "
            />
          </label>
          <label htmlFor="name" className="my-2">
            <h3 className="m-0 mt-6 p-0 font-semibold text-kala">Price:</h3>
            <input
              name="price"
              type="number"
              placeholder="In US$"
              className="border-b-2 w-full p-2 text-lg border-b-komola "
              required
            />
          </label>
          <label htmlFor="name" className="my-2">
            <h3 className="m-0 mt-6 p-0 font-semibold text-kala">Supplier:</h3>
            <input
              name="supplier"
              type="text"
              placeholder="The company we will get the product from"
              className="border-b-2 w-full p-2 text-lg border-b-komola "
              required
            />
          </label>
          <label htmlFor="name" className="my-2">
            <h3 className="m-0 mt-6 p-0 font-semibold text-kala">Quantity:</h3>
            <input
              name="quantity"
              type="number"
              placeholder="How many Items???"
              className="border-b-2 w-full p-2 text-lg border-b-komola "
            />
          </label>
          <button className="w-full flex justify-center mt-4" type="submit">
            <span className="text-white  rounded-full  font-bold py-2 px-20  hover:text-komola bg-komola border hover:bg-white border-komola  my-2 mx-auto ">
              Add item
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
