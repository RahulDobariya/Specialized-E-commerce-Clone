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
  Button,
  Checkbox,
  Flex,
  List,
  ListItem,
  Select,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [orderBy, setOrderBy] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  // const sort="price"
  /*===================================================================== */
  const getApiUrl = (url, selectedCategory, sort, orderBy) => {
    if (selectedCategory) {
      return (url = `${url}?category=${selectedCategory}`);
    } 
    else if (orderBy || sort) {
       console.log(sort);
       console.log(orderBy)
      url = `${url}?_sort=${sort}&_order=${orderBy}`
    console.log(url) 
    return url
    }
    
    return url;

  };


  /* else if (orderBy && sort) {
      return (url = `${url}?_sort=${sort}&_order=${orderBy}`);
    } */
  /*======================================================================= */
  const categories = ["Mountain", "Road", "Active", "Kids", "Electric"];
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
  const size = [
    6,
    7,
    9,
    12,
    16,
    20,
    24,
    26,
    "XXS",
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "S1",
    "S2",
    "S3",
  ];
  /*================================================================= */
  const getData = async () => {
    const apiUrl = getApiUrl(
      `https://cycleshopdata.onrender.com/products`,
      selectedCategory,
      sort,
      orderBy
    );
    try {
      let res = await axios.get(apiUrl);
      console.log(res.data);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [selectedCategory, orderBy]);
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleOrder = (e) => {
    setOrderBy(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };
  /*=============================================================================*/

  return (
    <div style={{ background: "#242124", color: "white" }}>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <label style={{ backgroundColor: "#242124", color: "white" }}>
          <Select
            value={sort}
            onChange={handleSort}
            backgroundColor={"#242124"}
            _hover={"gray"}
          >
            <option value="" style={{ backgroundColor: "#242124" }}>
              Sort By
            </option>
            <option style={{ backgroundColor: "#242124" }} value="price">
              Price
            </option>
            <option style={{ backgroundColor: "#242124" }} value="category">
              Category
            </option>
            <option style={{ backgroundColor: "#242124" }} value="title">
              Title
            </option>
          </Select>
        </label>
        <label>
          <Select value={orderBy} onChange={handleOrder} color={"white"}>
            <option style={{ backgroundColor: "#242124" }} value="">
              Select an option
            </option>
            <option style={{ backgroundColor: "#242124" }} value="asc">
              Low to High
            </option>
            <option style={{ backgroundColor: "#242124" }} value="desc">
              High to Low
            </option>
          </Select>
        </label>
      </div>
      <Flex mt={"-20px"}>
        <div>
          <div style={{ marginTop: "47px" }}>
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
                        <List>
                          {categories.map((category) => (
                            <ListItem key={category}>
                              <Checkbox
                                value={category}
                                checked={selectedCategory === category}
                                onChange={handleChange}
                              >
                                {category}
                              </Checkbox>
                            </ListItem>
                          ))}
                          <ListItem>
                            <Checkbox
                              checked={selectedCategory === ""}
                              onChange={() => setSelectedCategory("")}
                            >
                              RESET
                            </Checkbox>
                          </ListItem>
                        </List>
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
              {/* ====================================================================================== */}
              {/* ====================================================================================== */}
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
                        {/* <Box p={4}></Box>*/}
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
              {/* ======================================================================= */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton width={300}>
                        <Box as="span" flex="1" textAlign="left" width={"20%"}>
                         PRODUCT FAMILY
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
                          {productFamily.map((ele) => (
                            <ListItem key={ele}>{ele}</ListItem>
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
                ele={ele}
              />
            </div>
          ))}
        </div>
      </Flex>
    </div>
  );
};
export default ProductPage;
