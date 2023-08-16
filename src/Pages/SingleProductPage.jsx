import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
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

const handlesubmit=(product)=>{
 axios
   .post(`https://cycleshopdata.onrender.com/cart`, product)
   .then((res) => {
     window.alert("Added");
   })
   .catch((err) => {
     window.alert("Already Added to Cart");
     console.log(err);
   });
}

  return (
    <div style={{ backgroundColor: "#464445", color: "white" }}>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={data.image}
              fit={"cover"}
             display={"block"}
             margin={"auto"}
             alignItems={"center"}
             w={"500px"}
              
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}
              >
                {data.title}
              </Heading>

              <Text color={"white"} fontWeight={300} fontSize={"3xl"}>
                $ {data.price} USD
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={<StackDivider borderColor={"black"} />}
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text  fontSize={"2xl"} fontWeight={"300"}>
                  {data.description}
                </Text>
              </VStack>

              {/*  */}
            </Stack>
            <Button
              rounded={"none"}
              w={"full"}
              borderRadius={"50px"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={"red"}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={() => handlesubmit(data)}
            >
              Add To Cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            ></Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      {/*  */}
    </div>
  );
};

export default SingleProductPage;
