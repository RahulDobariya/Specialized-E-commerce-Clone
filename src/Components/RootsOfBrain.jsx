import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import bgImage3 from "../Images/BikePart9.jpg";

const RootsOfBrain = () => {
	return (
		<Box m={"auto"} textAlign={"left"} borderRadius={"10px"} px={'50px'} >
			<Box px={'100px'} >
				<Heading
					fontSize={["1.5rem", "2rem", "3rem"]}
					textTransform={"uppercase"}
				>
					brain technology
				</Heading>
			</Box >
			<Box

				p={["40px 20px 40px 40px", "", "100px 50px 100px 100px"]}
				mt={["20px", "30px", "40px"]}
				position="relative"
				zIndex={1}
				_before={{
					content: '""',
					position: "absolute",
					left: 0,
					boxShadow: '1px 1px 10px 10px orange',
					top: 0,
					width: "100%",
					height: "100%",
					opacity: 0.3,
					zIndex: 10,
					backgroundImage: `url(${bgImage3})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "50% 0",
					backgroundSize: "cover",
					borderRadius: "20px",
				}}
			>
				<Stack gap={["20px", "30px", "40px"]} align={"start"}>
					<Heading zIndex={100}>ROOTS OF THE BRAIN</Heading>
					<Text lineHeight={1.5} color={"white"} maxW={"900px"} zIndex={100}>
						In 2002 we introduced a shock with a mind of its own, and
						revolutionized bicycle suspension. Integral to the winningest full
						suspension XC bikes ever, Brain technology has come a long way over
						the past two decades, but the all-new Brain is still in a class by
						itself when it comes to instantly and automatically adjusting
						suspension from firm to active to maximize efficiency and control.
					</Text>
					<Button
						zIndex={100}
						variant={"outline"}
						colorScheme="white"
						fontSize={["14px", "16px", "20px"]}
						fontWeight={"bold"}
						p={["1rem", "1.5rem", "2rem"]}
						mt={["20px", "20px", "30px"]}
						border="1.5px solid"
						borderColor={"yellow.600"}
					>
						KNOW MORE
					</Button>
				</Stack>
			</Box>
		</Box >
	);
};

export default RootsOfBrain;
