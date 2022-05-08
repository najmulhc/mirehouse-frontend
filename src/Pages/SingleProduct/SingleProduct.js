import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [item, setItem] = useState({});
  const itemId = useParams();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantity === 0) {
      console.log("item quantity", item.quantity);
      setQuantity(item.quantity);
      console.log("testing is done ");
    }
    if (item.quantity === undefined) {
      setQuantity(0);
    }
  }, [item.quantity, quantity]);

  useEffect(() => {
    const query = { _id: itemId };
    fetch("http://localhost:5000/item", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(query),
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data); 
      });
  }, [quantity, itemId]);

  useEffect(() => {
    if (quantity !== 0) {
      console.log(quantity);
      const updatedInfo = { _id: itemId.itemId, quantity: quantity };
      fetch("http://localhost:5000/item/update", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [itemId.itemId, quantity]);
  const addItem = (e) => {
    e.preventDefault();
    const added = parseInt(e.target.add.value);
    e.target.reset();
    setQuantity(quantity + added);
    toast("items added, please refresh to see updates")
  };

  return (
    <main className="container mx-auto">
      <h1 className="font-bold text-5xl py-2 text-green-600">Item Details</h1>
      <div className="md:grid md:grid-cols-2 mt-4">
        <div className="flex justify-center items-center bg-green-600  py-6">
          <img src={item.img} className="w-[80%]" alt="" />
        </div>
        <div className="text-left p-6">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-5xl font-semibold text-slate-700">
              {item.name}
            </h2>
            <h2 className="text-3xl font-semibold text-green-700 ">
              ${item.price}
            </h2>
            <p className="text-xl text-slate-800 my-4">{item.description}</p>{" "}
            <h3 className="text-lg text-slate-800 font-normal my-4">
              Supplied by:{" "}
              <span className="font-semibold text-green-600">
                {item.supplier}
              </span>
            </h3>
            <h2 className="text-left font-semibold text-2xl text-slate-800 ">
              Stock:{item.quantity}
            </h2>
            <form onSubmit={addItem} action="">
              <h2 className="text-slate-800 font-medium text-left mb-0 pb-0 mt-8">
                Add items to stock
              </h2>
              <div className="flex items-center justify-start">
                <input
                  type="number"
                  placeholder="How many new items?"
                  className="text-left self-start py-1 px-2 text-xl my-2  border mx-0 border-green-500"
                  name="add"
                  required
                />

                <button
                  className="inline ml-2 bg-green-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
            <button
              onClick={() => {
                toast("item delivered!");
                setQuantity(quantity - 1);
              }}
              className="w-full bg-green-600 text-center py-4 text-xl text-white mt-24"
            >
              Deliver a product
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
