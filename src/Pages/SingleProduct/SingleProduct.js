import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [item,setItem] = useState({});
    const itemId = useParams();
    const query = {_id:itemId}
   useEffect( () => {
       fetch("http://localhost:5000/item", {
           method:"POST",
           headers:{
               "content-type" : "application/json"
           },
           body: JSON.stringify(query)
       })
       .then(res => res.json())
       .then(data => console.log(data))
   },[])
    return (
        <div>
            
        </div>
    );
};

export default SingleProduct;