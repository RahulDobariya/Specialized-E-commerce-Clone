import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
 
  const getData = async () => {
    try {
      let res = await fetch(`https://cycleshopdata.onrender.com/products/${id}`);
      let data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h1>About The Product</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0) 0px 5px 15px",
            width: "50%",
            padding: "100px",
            alignItem: "center",
          }}
        >
          <img src={data.image} alt={data.title} width={300} />
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0) 0px 5px 15px",
            width: "50%",
            padding: "100px",
            alignItem: "center",
          }}
        >
          <h2>{data.title}</h2>
          <h3>Price:{data.price}$</h3>

          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
