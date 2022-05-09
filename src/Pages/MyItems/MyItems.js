import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const { email } = user;
  const navigate = useNavigate();
  const userEmail = { id: email };
  useEffect(() => {
    let token = localStorage.getItem("key")
    fetch("https://the-summit-gear.herokuapp.com/items/my", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        key:`bearer ${token}`,
      },
      body: JSON.stringify(userEmail),
    })
      .then((res) => res.json())
      .then((data) => setItems(data)); 
  }, []);
 
  return (
    <div className="container mx-auto">
    <h1 className="text-kala text-4xl font-bold text-center my-10">
     My Items({items.length})
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
               
             </td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
 </div>
  );
};

export default MyItems;
