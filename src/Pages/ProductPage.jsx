import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Flex } from "@chakra-ui/react";


const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const getData = async () => {
    try {
      let res = await axios.get(`https://cycleshopdata.onrender.com/products`);
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
    <>
      <Flex>
        <div>
          <h1>This is heading</h1>
          <h2>This is product</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {product.map((ele) => (
            <div style={{ marginTop: "50px" }}>
              <ProductCard
                key={ele.id}
                image={ele.image}
                title={ele.title}
                price={ele.price}
                category={ele.category}
                description={ele.description}
                id={ele.id}
              />
            </div>
          ))}
        </div>
      </Flex>
    </>
  );
};
export default ProductPage;


/*============================================================================ */
// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// const Products = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const getData = async () => {
//     try {
//       setLoading(true);
//       let res = await fetch(`https://cycleshopdata.onrender.com/products`);
//       let data = await res.json();
//       console.log(data);
//       setData(data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   if (loading) {
//     return (
//       <img
//         src="https://media.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif"
//         alt="loading"
//         style={{ background: "none" }}
//       />
//     );
//   }

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "1fr 1fr 1fr",
//         gap: "10px",
//       }}
//     >
//       {data.map((ele) => (
//         <div
//           style={{
//             border: "2px solid black",
//             marginTop: "100px",
//           }}
//         >
//           <ProductCard
//             key={ele.id}
//             image={ele.image}
//             title={ele.title}
//             price={ele.price}
//             description={ele.description}
//             id={ele.id}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;

