import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import secondFlexImage from "../Images/BikeRider10.jpg";
import firstFlexImage from "../Images/BikeRider4.jpg";
import mainDivImage from "../Images/BikeRider6.jpg";
import Bikediv3 from "./BikeDiv3";

const KnowmoreData = {
	image1: mainDivImage,
	image2: firstFlexImage,
	image3: secondFlexImage,
	title1: "SPECIALIZED. SINCE 1974",
	title2: "BECAUSE MOUNTAIN BIKES NEED TRAILS",
	title3: "IMPROVING THE LIVES OF YOUTH THROUGH CYCLING",
	description1:
		"Made for riders, by riders. When quality tires were around, we strove to make the best. When people wanted to ride cruisers in the dirt, we made the first production mountain bike. When roadies wanted to go faster, we doubled-down on carbon and built our own wind tunnel. And when we saw kids struggling to focus in school,e began supporting Outride to help promote better health through cycling.",
	description2:
		"By 1987. bikes were getting the boot from public lands. That year, we took part in a round table of advocacy groups and within six months, the International Mountain Bike Association (IMBA) was born. In short order, we became trail access evangelists.",
	description3:
		"We believe that bicycles have the ability to improve the health of our youth and bring the power of opportunity.freedom, and joy to riders. To learn about how we're investing to make riding more accessible. check out Outride.",
};

const Knowmore = () => {
	return (
		<Box
			m="auto"
			mt={"100px"}
			mb="100px"
			px={'50px'}

			//   boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
			borderRadius={"20px"}
		>
			<Box
				px={'50px'}>
				<Heading
					textAlign={"left"}
					fontSize={["1.5rem", "2rem", "3rem"]}
					mb={["20px", "20px", "30px"]}
				>
					KNOW MORE ABOUT US
				</Heading>
			</Box>
			<Box mb="20px" >
				<Bikediv3
					image={KnowmoreData.image1}
					HeadingText={KnowmoreData.title1}
					paraGraph={KnowmoreData.description1}
				/>
			</Box>
			<Flex gap="40px" direction={{ base: "column", md: "row" }}>
				<Bikediv3
					image={KnowmoreData.image2}
					HeadingText={KnowmoreData.title2}
					paraGraph={KnowmoreData.description2}
				/>
				<Bikediv3
					image={KnowmoreData.image3}
					HeadingText={KnowmoreData.title3}
					paraGraph={KnowmoreData.description3}
				/>
			</Flex>
		</Box>
	);
};

export default Knowmore;
