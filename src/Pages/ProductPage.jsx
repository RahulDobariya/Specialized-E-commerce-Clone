import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { products } from "../Redux/prod";

const ProductPage = () => {
  const [product, setProduct] = useState(products);
  const getData = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/products`);
      console.log(res.data);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {product.map((ele) => (
        <ProductCard key={ele.id} {...ele} />
      ))}
    </div>
  );
};
export default ProductPage;
