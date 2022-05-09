import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://the-summit-gear.herokuapp.com/items/all")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const deleteItem = (item) => {
    if (window.confirm(`are you sure to delete ${item.name}`)) {
      console.log("user want to delete the item");
      const deletingItem = { _id: item._id };
      fetch("https://the-summit-gear.herokuapp.com/item/delete", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(deletingItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast("Item has been deleted successfully");
          }
        });
    }
  };
  return (
    <div className="container mx-auto">
       <h1 className="text-kala text-4xl font-bold text-center my-10">
        Manage Inventory
      </h1>
 
      <div className="overflow-x-auto rounded-md shadow-md mx-auto mb-10">
        {" "}
        <table className="w-full text-left">
          <thead>
            <th className="bg-komola text-white px-4 py-3">SI.</th>
            <th className="bg-komola text-white px-4 py-3">Name</th>
            <th className="bg-komola text-white px-4 py-3">Price</th>
            <th className="bg-komola text-white px-4 py-3">Quanttity</th>
            <th className="bg-komola text-white px-4 py-3">Supplier</th>
            <th className="bg-komola text-white px-4 py-3">Action</th>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <td className="bg-white text-kala border-b opacity-60 font-semibold  border-b-komola px-4 py-3">
                  {items.indexOf(item) + 1}
                </td>
                <td className="bg-white text-kala border-b opacity-60 font-semibold  border-b-komola px-4 py-3">
                  {item.name}
                </td>
                <td className="bg-white text-kala border-b opacity-60 font-semibold  border-b-komola px-4 py-3">
                  ${item.price}
                </td>
                <td className="bg-white text-kala border-b opacity-60 font-semibold  border-b-komola px-4 py-3">
                  {item.quantity}
                </td>
                <td className="bg-white text-kala border-b opacity-60 font-semibold  border-b-komola px-4 py-3">
                  {item.supplier}
                </td>
                <td className="bg-white text-kala border-b opacity-60 font-semibold  border-b-komola px-4 py-3">
                
                  <button
                    className="text-white  rounded-full  font-bold py-2 px-4 hover:text-komola bg-komola border hover:bg-white border-komola mt-4 mr-2"
                    onClick={() => navigate(`/inventory/${item._id}`)}
                  >
                   Manage
                  </button>
                  <button
                    className="text-white  rounded-full  font-bold py-2 px-4 hover:text-red bg-red border hover:bg-white border-red mt-4"
                    onClick={() => deleteItem(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
