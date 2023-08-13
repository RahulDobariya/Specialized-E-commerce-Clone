import { ButtonGroup, Card, CardBody,CardFooter,Heading,Image, Stack ,Text} from "@chakra-ui/react";
import React from "react";
import {Link} from 'react-router-dom'
const ProductCard = ({ id, image, title, description, category, price }) => {
 

  return (
    <div>
      <Link to={`/productPage/${id}`}>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={image}
              alt={title}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{title}</Heading>

              <Text color="blue.600" fontSize="2xl">
                ${price}
              </Text>
            </Stack>
          </CardBody>

          <CardFooter>
            <ButtonGroup spacing="2"></ButtonGroup>
          </CardFooter>
        </Card>
      </Link>

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
