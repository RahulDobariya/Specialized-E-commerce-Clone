import { Box } from "@chakra-ui/react";
import React from "react";
import SliderComponent from "../Components/Slider";
import Bestsellers from "../Components/Bestsellers";
import Knowmore from "../Components/Knowmore";
import RootsOfBrain from "../Components/RootsOfBrain";
import Discount from "../Components/Discount";
import Bikediv3 from "../Components/BikeDiv3";


const Homepage = () => {
	return (
		<Box color="white" w={["95vw", "95vw", "95vw", "1600px"]} m="auto" maxW={"100%"} >
			<SliderComponent />
			<Bestsellers />
			<RootsOfBrain />
			<Discount />
			<Knowmore />
			{/* <Bikediv3 /> */}
			{/* <AboutDiv /> */}
			{/* <Bikediv2 /> */}
			{/* <Bikediv1 /> */}
		</Box>
	);
};

export default Homepage;
