import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Bikediv3 = ({ HeadingText, paraGraph, image }) => {
	return (
		<Box textAlign={"left"} borderRadius={"20px"} >
			<Box
				p={[
					"40px 20px 40px 40px",
					"40px 20px 40px 40px",
					"60px 30px 60px 60px",
					"100px 50px 100px 100px",
				]}
				mt={["20px", "30px", "40px"]}
				position="relative"
				zIndex={1}
				height={"80%"}
				_before={{
					content: '""',
					position: "absolute",
					left: 0,
					top: 0,
					width: "100%",
					height: "100%",
					opacity: 0.3,
					zIndex: 10,
					boxShadow: '1px 1px 10px 10px orange',
					backgroundImage: `url(${image})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "bottom",
					backgroundSize: "cover",
					borderRadius: "20px",
					overflow: "hidden",
				}}
			>
				<Heading
					zIndex={100}
					mb={["20px", "20px", "30px", "40px"]}
					fontSize={["20px", "20px", "30px", "40px"]}
				>
					{HeadingText}
				</Heading>
				<Text
					lineHeight={1.5}
					color={"white"}
					maxW={["auto", "auto", "auto", "68%"]}
					fontSize={["12px", "14px", "16px", "18px"]}
				>
					{paraGraph}
				</Text>
			</Box>
		</Box>
	);
};

export default Bikediv3;
