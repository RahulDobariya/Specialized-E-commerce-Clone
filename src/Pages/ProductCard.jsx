import { Button, ButtonGroup, Card, CardBody,CardFooter,Heading,Image, Stack ,Text} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import {Link} from 'react-router-dom'
const ProductCard = ({ id, image, title, price,ele }) => {
  //  https://cycleshopdata.onrender.com/products/${id}`

    const addToCart=(product)=>{
    axios
      .post(`https://cycleshopdata.onrender.com/cart`, product)
      .then((res) => {
        window.alert("Added");
      })
      .catch((err) => {
        window.alert("Already Added to Cart");
        console.log(err);
      });
  };

  return (
    <div>
      <Card maxW="sm">
        <Link to={`/productPage/${id}`}>
          <CardBody>
            <Image src={image} alt={title} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{title}</Heading>

              <Text color="blue.600" fontSize="2xl">
                ${price}
              </Text>
            </Stack>
          </CardBody>
        </Link>
        <CardFooter margin={"0px auto"} alignItems={"center"} color={"red"}>
          <ButtonGroup spacing="2">
            <Button
              onClick={() => addToCart(ele)}
              backgroundColor={"red"}
              _hover={"gray"}
              color={"white"}
            >
              Add To Cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      {/*================================================================  */}
      {/* <Link
        to={`/productPage/${id}`}
        style={{
          textDecoration: "none",
          textDecorationColor: "none",
        }}
      >
        <div style={{ padding: "10px" }}>
          <img src={image} alt={title} width={200} height={200} />
          <h3>{title}</h3>
          <h3>Price:{price}</h3>
        </div>
      </Link> */}
      {/* =================================================================== */}
    </div>
  );
};
export default ProductCard;
