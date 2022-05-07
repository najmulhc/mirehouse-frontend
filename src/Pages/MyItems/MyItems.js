import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SingleItem from "../SingleItem/SingleItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const { email } = user;
  const userEmail = { id: email };
  useEffect(() => {
    fetch("http://localhost:5000/items/my", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userEmail),
    })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [userEmail]);
  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-3 container mx-auto mb-10">
        {items.map((item) => {
          return <SingleItem item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default MyItems;
