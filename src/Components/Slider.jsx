import {
	Box,
	Button,
	Flex,
	VStack,
	Heading,
	Image,
	Stack,
	Text,

} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import bicycle1 from "../Images/bicycle1.png";
import bicycle2 from "../Images/bicycle2.png";
import bicycle3 from "../Images/bicycle3.png";
import bicycle4 from "../Images/bicycle4.png";
import bgImage1 from "../Images/backgroundImage1.jpg";
import { useNavigate } from "react-router-dom";
import bgImage3 from "../Images/BikePart9.jpg";

const Slider = () => {
	const arrowStyles = {
		cursor: "pointer",
		pos: "absolute",
		zIndex: "85",
		top: "50%",
		w: "auto",
		mt: "-22px",
		p: "16px",
		color: "white",
		fontWeight: "bold",
		fontSize: "18px",
		transition: "0.6s ease",
		borderRadius: "0 3px 3px 0",
		userSelect: "none",
		_hover: {
			opacity: 0.8,
			bg: "black",
		},
	};
	const slides = [
		{
			img: bicycle1,
			label: "SANTACRUZ",
			miniDesc: "THE ALL-NEW, LIGHTEST IN CLASS MAXXIS",
			description: "Financially Responsible Irresponsibly Fast",
		},
		{
			img: bicycle2,
			label: "EVE 60",
			miniDesc:
				"Long trusted by athletes in the pro-peloton & cyclists across the globe",
			description:
				"Flawlessly design to blow your mind -- The all new Tarmac Disc",
		},
		{
			img: bicycle3,
			label: "SYMACTIVE",
			miniDesc: " bound to go fast -- there is no other choice ⚡🥇",
			description:
				"Some say XC racing is too serious. @simon_andreassen would beg to differ.",
		},
		{
			img: bicycle4,
			label: "ROMIN EVO",
			miniDesc: "MEET THE FASTEST PIECE OF ENDURANCE ENGINEERING ON EARTH",
			description:
				"Elevate your racing performance this season with gear to help you go faster, climb higher, and ride longer",
		},
	];
	const [currentSlide, setCurrentSlide] = useState(0);
	const intervalId = useRef(null);
	const slidesCount = slides.length;

	const navigate = useNavigate()

	const prevSlide = () => {

		setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
	};

	const nextSlide = () => {

		setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
	};

	const setSlide = (slide) => {
		setCurrentSlide(slide);
	};

	const carouselStyle = {
		transition: "all .5s",
		ml: `-${currentSlide * 100}%`,
	};

	useEffect(() => {
		if (intervalId.current) {
			clearInterval(intervalId.current);
		}

		intervalId.current = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => {
			clearInterval(intervalId.current);
		};
	}, []);

	return (

		<Stack>

			<Flex
				opacity={'1'}
				w="full"
				maxW={'100%'}
				bg="#262626"
				_dark={{
					bg: "#3e3e3e",
				}}
				p={{ base: 5, md: 10 }}

				mt={"-15px"}
				alignItems="center"
				justifyContent="center"
			>
				<Stack>
					{/* <Box
					_before={{
						mt: '120px',
						content: '""',
						position: "absolute",
						left: 0,
						top: 0,
						width: "100%",
						height: "10%",
						// opacity: 0.3,
						zIndex: 10,
						backgroundImage: `url(${bgImage3})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "50% 0",
						backgroundSize: "cover",

					}}>

				</Box> */}


					<Flex
						w="full"
						pos="relative"
						// position='absolute'
						overflow="hidden"
						mt={'-25px'}
						boxShadow="#C68409 1px 1px 20px 5px"
						borderRadius={'10px'}
					>

						<Flex h={{ base: "400px", md: "500px" }} w="full" {...carouselStyle} >
							{slides.map((slide, sid) => (
								<Box
									key={`slide-${sid}`}
									boxSize="full"
									shadow="md"
									flex="none"
									bg={`url(${bgImage1}) no-repeat center`}
									bgSize="cover"
									backgroundColor="transparent"
									position="relative"
								>
									<Flex
										direction={{ base: "column", xl: "row" }}
										h={{ base: "auto", md: "100%" }}
										p="10px"
										flexWrap="wrap"
									>
										<Box
											w={{ base: "100%", md: "50%" }}
											h={{ base: "auto", md: "100%" }}
											// border="1px solid red"
											position="relative"
										>
											<Text
												color="white"
												fontSize="xs"
												p="8px 12px"
												pos="absolute"
												top="0"
											>
												{sid + 1} / {slidesCount}
											</Text>
											<Box px={"10px"} pt="14px"
												p={sid === 2 ? { base: null, md: "20px" } : null}
											>
												<Image src={slide.img} alt="carousel image" />
											</Box>
										</Box>
										<Box
											w={{ base: "100%", md: "50%" }}
											mt={{ base: "20px", md: "0" }}
											// border={'1px solid red'}
											position={{ base: "absolute", md: "static" }}
											top={{ base: "60%", md: "auto" }}
											left={{ base: "50%", md: "auto" }}
											transform={{ base: "translate(-50%, -50%)", md: "none" }}
										>
											<Stack
												textAlign="left"
												w="90%"
												h={{ base: "95%", sm: "95%", md: "90%" }}
												m={{ base: "0 auto", md: "0 auto" }}
												mt={{ base: '5px', sm: '10px', md: '20px', xl: '30px' }}
											// mb="8" 

											// border={'1px solid green'}
											>
												<Text fontSize={{ base: "xs", sm: 'sm', md: 'md', xl: "xl" }} letterSpacing={{ base: '0.1em', md: "0.2em" }} color={{ base: "yellow", md: 'red.500' }}>
													{slide.miniDesc}
												</Text>
												<Heading fontSize={{ base: "xl", sm: 'xl', md: '2xl', xl: "6xl" }} fontFamily={"cursive"}>
													{slide.label}
												</Heading>
												<Text as="span" fontWeight="2xl" fontSize={{ base: "sm", sm: 'md', md: "xl" }} py={{ base: "10px", sm: '20px', md: "30px" }}>
													{slide.description}
												</Text>
												<Button
													variant={"outline"}
													colorScheme={
														sid === 0
															? "red"
															: sid === 1
																? "blue"
																: sid === 2
																	? "yellow"
																	: "gray"
													}
													w={{ base: "90px", md: "120px" }}
													onClick={() => navigate("/productPage")}
												>
													Shop Now
												</Button>
											</Stack>
										</Box>
									</Flex>
								</Box>
							))}
						</Flex>

						<Text {...arrowStyles} left="0" onClick={prevSlide}>
							&#10094;
						</Text>
						<Text {...arrowStyles} right="0" onClick={nextSlide}>
							&#10095;
						</Text>

						<VStack alignItems='end' pos="absolute" left="-50px" w="full" alignSelf='center'>
							{Array.from({
								length: slidesCount,
							}).map((_, slide) => (
								<Box
									key={`dots-${slide}`}
									cursor="pointer"
									boxSize={["7px", null, "15px"]}
									m="0 2px"
									bg={currentSlide === slide ? "whiteAlpha.800" : "whiteAlpha.500"}
									rounded="50%"
									display="inline-block"
									transition="background-color 0.6s ease"
									_hover={{
										bg: "whiteAlpha.800",
									}}
									onClick={() => setSlide(slide)}
								></Box>
							))}
						</VStack>


					</Flex>


				</Stack>


			</Flex >
		</Stack>




	);
};

export default Slider;
