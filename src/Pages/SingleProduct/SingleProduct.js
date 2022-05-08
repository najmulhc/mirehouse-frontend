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
    fetch("https://localhost:5000/item", {
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
    toast("items added, please refresh to see updates");
  };

  return (
    <main className="bg-komola pb-10 pt-4">
      <div className="container mx-auto  ">
        {" "}
        <h1 className="text-kala text-4xl font-bold mt-6 text-center mb-10">
          Manage Item
        </h1>
        <div className="md:grid md:grid-cols-2 mt-4  bg-white p-8 rounded-md shadow-md ">
          <div className="flex justify-center items-center bg-green-600   ">
            <img src={item.img} className="w-[350px] " alt="" />
          </div>
          <div className="text-left p-6">
            <div className="flex flex-col justify-center ">
              <h2 className="text-5xl text-kala mb-4">{item.name}</h2>
              <h2 className="text-5xl font-semibold text-komola ">
                ${item.price}
              </h2>
              <p className="text-lg text-kala mt-6">{item.description}</p>
              <h3 className="text-lg text-kala font-normal my-4">
                Supplied by:{" "}
                <span className="font-semibold text-komola">
                  {item.supplier}
                </span>
              </h3>
              <h2 className="text-left font-semibold text-2xl text-komola ">
                Stock:{item.quantity}
              </h2>
              <form onSubmit={addItem} action="">
                <label htmlFor="add">
                  <h3 className="m-0 mt-6 p-0 text-lg font-semibold text-kala">
                    Add item to stock
                  </h3>
                  <input
                    type="number"
                    placeholder="How many new items?"
                    className="border-b-2 w-full p-2 text-lg border-b-komola "
                    name="add"
                    required
                  />
                </label>
                <button
                  className="text-white  rounded-full  font-bold py-2 px-20  hover:text-komola bg-komola border hover:bg-white border-komola mt-4 "
                  type="submit"
                >
                  Add
                </button>
              </form>
              <button
                onClick={() => {
                  toast("item delivered!");
                  setQuantity(quantity - 1);
                }}
                className="w-full bg-kala rounded-md text-center py-4 text-xl text-white mt-4"
              >
                Deliver a product
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
