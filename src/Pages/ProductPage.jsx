import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  List,
  ListItem,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import FilterSidebar from "./FilterSidebar";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    // Implement logic to filter products based on the selected category
  };
  const categories = ["Mountain", "Road", "Active"];
  const group = ["Bikes", "E - Bikes", "Framesets", "Seatposts"];
  const productFamily = [
    "Allez",
    "Chisel",
    "Crossroads",
    "CruX",
    "Diverge",
    "Diverge",
    "EVO",
    "Enduro",
    "Epic",
    "Epic EVO",
  ];

  const experience = [
    "Trail",
    "Performance",
    "Fitness",
    "Cross Country",
    "Transport",
    "Comfort",
    "Kids",
    "Cyclocross",
    "BMX / Dirt Jump",
    "Downhill",
  ];

  const price = [
    "$50 - $250",
    "$250 - $500 ",
    "$500 - $1000",
    "$1000 - $2500",
    "$2500 - $5000",
    "$5000 - $10000",
    "Greater than $10000 ",
  ];
 
  const material = ["Carbon", "Aluminum", "Alloy"];
  const size = [6,7,9,12,16,20,24,26,"XXS","XS","S","M","L","XL","XXL","S1","S2","S3"];
  /*================================================================= */
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
  /*=============================================================================*/

  return (
    <>
      <Flex>
        <div>
          <div style={{ margin: "50px 0px" }}>
            <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton width={300}>
                        <Box as="span" flex="1" textAlign="left" width={"20%"}>
                          CATEGORY
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex textAlign={"left"}>
                        <FilterSidebar
                          categories={categories}
                          onCategorySelect={handleCategorySelect}
                        />
                      </Flex>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              {/* ===================================================================== */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton width={300}>
                        <Box as="span" flex="1" textAlign="left" width={"20%"}>
                          GROUP
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex textAlign={"left"}>
                        <List>
                          {group.map((ele) => (
                            <ListItem key={ele}>{ele}</ListItem>
                          ))}
                        </List>
                        {/* <Box p={4}></Box> */}
                      </Flex>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              {/* ===================================================================== */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton width={300}>
                        <Box as="span" flex="1" textAlign="left" width={"20%"}>
                          EXPERIENCE
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex textAlign={"left"}>
                        <List>
                          {experience.map((ele) => (
                            <ListItem key={ele}>{ele}</ListItem>
                          ))}
                        </List>
                        {/* <Box p={4}></Box> */}
                      </Flex>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              {/* =================================================================================== */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton width={300}>
                        <Box as="span" flex="1" textAlign="left" width={"20%"}>
                          PRICE
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex textAlign={"left"}>
                        <List>
                          {price.map((ele) => (
                            <ListItem key={ele}>{ele}</ListItem>
                          ))}
                        </List>
                        {/* <Box p={4}></Box> */}
                      </Flex>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              {/* =========================================Material====================================================== */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton width={300}>
                        <Box as="span" flex="1" textAlign="left" width={"20%"}>
                          MATERIAL
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex textAlign={"left"}>
                        <List>
                          {material.map((ele) => (
                            <ListItem key={ele}>{ele}</ListItem>
                          ))}
                        </List>
                        {/* <Box p={4}></Box> */}
                      </Flex>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              {/* ===================================================================================================== */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton width={300}>
                        <Box as="span" flex="1" textAlign="left" width={"20%"}>
                          SIZE
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex textAlign={"left"}>
                        <List
                          display={"grid"}
                          gridTemplateColumns={"1fr 1fr"}
                          gap={"10px"}
                          textAlign="center"
                        >
                          {size.map((ele) => (
                            <ListItem
                              key={ele}
                              border={"2px solid gray"}
                              width={100}
                              borderRadius={"10px"}
                              cursor={"pointer"}
                            >
                              {ele}
                            </ListItem>
                          ))}
                        </List>
                        {/* <Box p={4}></Box> */}
                      </Flex>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {product.map((ele) => (
            <div style={{ margin: "50px 10px" }}>
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
