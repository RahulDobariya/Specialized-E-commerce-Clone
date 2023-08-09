import React from "react";

const ProductCard = ({ id, image, title, description, category, price }) => {
  return (
    <div>
      <img src={image} alt={title} width={200} height={200}/>
      <h2>{title}</h2>
      <p>{description}</p>
      <h5>{category}</h5>
      <h5>{price}</h5>
    </div>
  );
};
export default ProductCard;
