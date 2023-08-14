import { Box, Button, Flex, Heading, Skeleton } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const getData = (setData, setLoading) => {
	axios
		.get(`${process.env.REACT_APP_API_URL}/products?_page=2&_limit=3`)
		.then((res) => {
			setData(res.data.data);
			setLoading(false);
		})
		.catch((err) => console.log(err));
};

const Bestsellers = () => {
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		getData(setData, setLoading);
	}, []);

	return (
		<Box textAlign={"left"} my={"100px"} px={'100px'}>
			<Box>
				<Heading fontSize={["1.5rem", "2rem", "3rem"]}>
					CHOOSE OUR BEST SELLERS
				</Heading>
			</Box>
			<Box>
				{isLoading ? (
					<Flex
						mt={["20px", "30px", "20px"]}
						gap={{ base: "10px", md: "20px" }}
						direction={{ base: "column", md: "row", lg: "row" }}
					>
						<Skeleton w="520px" h="468px" borderRadius={"20px"}></Skeleton>
						<Skeleton w="520px" h="468px" borderRadius={"20px"}></Skeleton>
						<Skeleton w="520px" h="468px" borderRadius={"20px"}></Skeleton>
					</Flex>
				) : (


					<Flex

						mt={["20px", "30px", "40px"]}
						gap={{ base: "10px", md: "20px" }}
						direction={{ base: "column", md: "row", lg: "row" }}
					>
						{data?.map((prod) => {
							return <ProductCard productData={prod} key={prod._id} />;
						})}
					</Flex>
				)}
			</Box>
			<Box >
				<Button

					variant={"outline"}
					colorScheme="white"
					onClick={() => navigate("/productPage")}
					fontSize={["14px", "16px", "20px"]}
					fontWeight={"bold"}
					p={["1rem", "1.5rem", "2rem"]}
					mt={["20px", "20px", "30px"]}
					border="1.5px solid"
					borderColor={"yellow.600"}
				>
					CATALOGUE
				</Button>
			</Box>
		</Box>
	);
};

export default Bestsellers;
