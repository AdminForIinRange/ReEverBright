// "use client";
// import { Box, VStack, Text, HStack, Span, Link } from "@chakra-ui/react";
// import Image from "next/image";
// import React from "react";
// import Google from "@/public/Google.png";

// import { FaStar } from "react-icons/fa";
// import ImageCompareSlider from "@/components/comp/ImageCompareSlider";
// const Hero = () => {
//   return (
//     <Box mt={"20px"}>
//       <VStack>
//         <Box w={"100%"} h={"100vh"} fontFamily={"poppins"}>
//           <Text
//             px={["4%", "4%", "6%", "6%", "6%", "10%"]}
//             color={"white"}
//             lineHeight={"0.9"}
//             letterSpacing="-2px"
//             textAlign={"start"}
//             fontWeight={"700"}
//             fontFamily={"poppins"}
//             fontSize={"40px"}
//           >
//             A Clean Home Feels Like a New Home
//           </Text>
//           <Text
//             px={["4%", "4%", "6%", "6%", "6%", "10%"]}
//             color={"White"}
//             mt={"20px"}
//             textAlign={"start"}
//             fontWeight={"700"}
//             fontFamily={"poppins"}
//             textStyle={"subheading"}
//           >
//             Adelaide's #1 choice for remarkable exterior results
//           </Text>
//           <Box px={["4%", "4%", "6%", "6%", "6%", "10%"]}>
//             <VStack justify={"start"} align={"start"}>
//               <HStack justify={"start"} align={"start"}>
//                 <Text color="White" fontSize="24px" fontWeight={"700"}>
//                   ✓{" "}
//                   <Span textStyle={"tinyText"} fontWeight={"normal"}>
//                     {" "}
//                     Pressure Cleaning
//                   </Span>
//                 </Text>
//                 <Text color="White" fontSize="24px" fontWeight={"700"}>
//                   ✓{" "}
//                   <Span textStyle={"tinyText"} fontWeight={"normal"}>
//                     {" "}
//                     Pressure Cleaning
//                   </Span>
//                 </Text>
//               </HStack>
//             </VStack>
//             <VStack justify={"start"} align={"start"}>
//               <HStack justify={"start"} align={"start"}>
//                 <Text color="White" fontSize="24px" fontWeight={"700"}>
//                   ✓{" "}
//                   <Span textStyle={"tinyText"} fontWeight={"normal"}>
//                     {" "}
//                     Pressure Cleaning
//                   </Span>
//                 </Text>
//                 <Text color="White" fontSize="24px" fontWeight={"700"}>
//                   ✓{" "}
//                   <Span textStyle={"tinyText"} fontWeight={"normal"}>
//                     {" "}
//                     Pressure Cleaning
//                   </Span>
//                 </Text>
//               </HStack>
//             </VStack>
//           </Box>
//           <Box
//             px={["4%", "4%", "6%", "6%", "6%", "10%"]}
//             display="flex"
//             justifyContent="start"
//             width="100%"
//           >
//             <Box
//               mt={"20px"}
//               p={{ base: "20px", md: "40px" }}
//               rounded={"2xl"}
//               bg={"cyan.200"}
//               border={"1px solid cyan.500"}
//               width={{ base: "100%", md: "40%" }}
//               textAlign={{ base: "center", md: "left" }}
//               position="relative"
//               color="cyan.600"
//               borderRadius="30px"
//               py="10px"
//               px={{ base: "20px", md: "20px" }}
//               fontFamily="arial"
//               fontWeight="600"
//               fontSize="16px"
//               cursor="pointer"
//               transition="all 0.3s ease"
//               _hover={{
//                 transform: "translateY(-3px)",
//                 boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//               }}
//               // onClick={() => setIsDialogOpen(true)}
//             >
//               <Text>Call for a Quote!</Text>
//             </Box>
//           </Box>
//           <HStack
//             px={["4%", "4%", "6%", "6%", "6%", "10%"]}
//             mt={"20px"}
//             p={{ base: "5px", md: "40px" }}
//             rounded={"2xl"}
//             // bg={"gray.50"}
//             // border={"1px solid lightgray"}
//             width={{ base: "100%", md: "40%" }}
//             textAlign={{ base: "center", md: "left" }}
//             position="relative"
//           >
//             <Box
//               fontSize={{ base: "24px", md: "26px" }}
//               px={["4%", "4%", "6%", "6%", "6%", "10%"]}
//             >
//               <Image src={Google} alt="Google" width="50" />
//             </Box>
//             <Box color={"white"} fontSize={{ base: "24px", md: "26px" }}>
//               5.0
//             </Box>
//             <Box
//               display="flex"
//               h={"100%"}
//               alignContent={"center"}
//               justifyContent={"center"}
//             >
//               <Box
//                 as={FaStar}
//                 color={"yellow.400"}
//                 display="inline-block"
//                 fontSize={{ base: "18px", md: "26px" }}
//               />
//               <Box
//                 as={FaStar}
//                 color={"yellow.400"}
//                 display="inline-block"
//                 fontSize={{ base: "18px", md: "26px" }}
//               />
//               <Box
//                 as={FaStar}
//                 color={"yellow.400"}
//                 display="inline-block"
//                 fontSize={{ base: "18px", md: "26px" }}
//               />
//               <Box
//                 as={FaStar}
//                 color={"yellow.400"}
//                 display="inline-block"
//                 fontSize={{ base: "18px", md: "26px" }}
//               />
//               <Box
//                 as={FaStar}
//                 color={"yellow.400"}
//                 display="inline-block"
//                 fontSize={{ base: "18px", md: "26px" }}
//               />
//             </Box>
//           </HStack>
//           <Text
//             color={"white"}
//             textIndent={"12px"}
//             fontSize={{ base: "18px", md: "26px" }}
//           >
//             Verified 5 stars on Google!
//           </Text>
//           <Box px={["4%", "4%", "6%", "6%", "6%", "10%"]}>
//             <Box
//               mt={"20px"}
//               p={{ base: "20px", md: "40px" }}
//               rounded={"2xl"}
//               bg={"blue.400"}
//               border={"8px solid lightblue"}
//               width={{ base: "100%", md: "40%" }}
//               textAlign={{ base: "center", md: "left" }}
//               position="relative"
//               pb={"50px"}
//               zIndex={"1"}
//             >
//               <VStack
//                 display="flex"
//                 h={"100%"}
//                 alignContent={"center"}
//                 justifyContent={"center"}
//                 textAlign={"start"}
//                 fontWeight={"700"}
//                 fontFamily={"poppins"}
//                 fontSize={"26px"}
//               >
//                 <Text color={"white"}>
//                   Get Instant <Span color={"blue.500"}>FREE QUOTE</Span>
//                 </Text>

//                 <Text
//                   textAlign={"center"}
//                   fontWeight={"500"}
//                   fontFamily={"poppins"}
//                   textStyle={"tinyText"}
//                   color={"white"}
//                 >
//                   Adelaide's #1 choice for remarkable exterior results
//                 </Text>
//                 <Box
//                   mt={"20px"}
//                   fontWeight={"500"}
//                   w={"100%"}
//                   as="input"
//                   // value={input}
//                   // onChange={(e) => setInput(e.target.value)}
//                   placeholder="Ask something..."
//                   borderBottom="1px solid #E2E8F0"
//                   flex="1"
//                   fontSize="14px"
//                   outline="none"
//                   py="10px"
//                   bg="transparent"
//                   color="white"
//                   textColor={"white"}
//                 />
//                 <Box
//                   fontWeight={"500"}
//                   w={"100%"}
//                   as="input"
//                   // value={input}
//                   // onChange={(e) => setInput(e.target.value)}
//                   placeholder="Ask something..."
//                   borderBottom="1px solid #E2E8F0"
//                   flex="1"
//                   fontSize="14px"
//                   outline="none"
//                   py="10px"
//                   bg="transparent"
//                   color="white"
//                 />
//                 <Box
//                   fontWeight={"500"}
//                   w={"100%"}
//                   as="input"
//                   // value={input}
//                   // onChange={(e) => setInput(e.target.value)}
//                   placeholder="Ask something..."
//                   borderBottom="1px solid #E2E8F0"
//                   flex="1"
//                   fontSize="14px"
//                   outline="none"
//                   py="10px"
//                   bg="transparent"
//                   color="white"
//                 />
//                 <Box
//                   fontWeight={"500"}
//                   w={"100%"}
//                   as="input"
//                   // value={input}
//                   // onChange={(e) => setInput(e.target.value)}
//                   placeholder="Ask something..."
//                   borderBottom="1px solid #E2E8F0"
//                   flex="1"
//                   fontSize="14px"
//                   outline="none"
//                   py="10px"
//                   bg="transparent"
//                   color="white"
//                 />
//                 <Box
//                   fontWeight={"500"}
//                   w={"100%"}
//                   as="input"
//                   // value={input}
//                   // onChange={(e) => setInput(e.target.value)}
//                   placeholder="Ask something..."
//                   borderBottom="1px solid #E2E8F0"
//                   flex="1"
//                   fontSize="14px"
//                   outline="none"
//                   py="10px"
//                   bg="transparent"
//                   color="white"
//                 />
//                 <Box display="flex" justifyContent="start" width="100%">
//                   <Box
//                     mt={"5px"}
//                     p={{ base: "20px", md: "40px" }}
//                     rounded={"2xl"}
//                     bg={"cyan.200"}
//                     border={"1px solid cyan.500"}
//                     width={{ base: "100%", md: "40%" }}
//                     textAlign={{ base: "center", md: "left" }}
//                     position="relative"
//                     color="cyan.600"
//                     borderRadius="30px"
//                     py="10px"
//                     px={{ base: "20px", md: "20px" }}
//                     fontFamily="arial"
//                     fontWeight="600"
//                     fontSize="16px"
//                     cursor="pointer"
//                     transition="all 0.3s ease"
//                     _hover={{
//                       transform: "translateY(-3px)",
//                       boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//                     }}
//                     // onClick={() => setIsDialogOpen(true)}
//                   >
//                     <Text>Call for a Quote!</Text>
//                   </Box>
//                 </Box>
//               </VStack>
//             </Box>
//           </Box>
//           <HStack justify={"center"}>
//             <Box
//               zIndex={"1"}
//               mt={"-30px"}
//               p={{ base: "20px", md: "40px" }}
//               pb={"80px"}
//               rounded={"2xl"}
//               bg={"gray.50"}
//               border={"1px solid lightgray"}
//               width={{ base: "80%", md: "40%" }}
//               textAlign={{ base: "center", md: "left" }}
//             ></Box>
//           </HStack>

//           <VStack px={["4%", "4%", "6%", "6%", "6%", "10%"]}>
//             <Text
//               mt={"50px"}
//               justifyContent={"start"}
//               alignContent={"start"}
//               fontWeight={"700"}
//               fontFamily={"poppins"}
//               textStyle={"heading"}
//               w={"100%"}
//               color={"blue.500"}
//             >
//               Adelaide's #1 choice for remarkable exterior results
//             </Text>

//             <Text w={"100%"} textAlign={"start"} fontSize="14px">
//               Experience “100% Risk-Free Pressure Cleaning” from Calibre
//               Exterior Cleaning, Adelaide’s premier exterior cleaning
//               specialists. Our local team of skilled professionals is dedicated
//               to revitalising your property’s appearance with state-of-the-art
//               equipment and eco-friendly cleaning solutions.
//               <br />
//               <br />
//               With a deep understanding of Adelaide’s unique climate and
//               environment, we ensure the highest quality results while
//               protecting your property’s structural integrity. Trust in our
//               no-hassle satisfaction guarantee and let Calibre Exterior Cleaning
//               bring new life to your home or business. Request a quote today and
//               uncover the unparalleled benefits of Adelaide’s leading pressure
//               cleaning experts!
//               <br />
//               <br />
//               <Span fontWeight={"700"}>
//                 bring new life to your home or business. Request a quote today
//                 and uncover the unparalleled benefits of Adelaide’s leading
//                 pressure cleaning experts!
//               </Span>
//             </Text>
//             <Box display="flex" justifyContent="start" width="100%">
//               <Box
//                 mt={"20px"}
//                 p={{ base: "20px", md: "40px" }}
//                 rounded={"2xl"}
//                 bg={"cyan.200"}
//                 border={"1px solid cyan.500"}
//                 width={{ base: "100%", md: "40%" }}
//                 textAlign={{ base: "center", md: "left" }}
//                 position="relative"
//                 color="cyan.600"
//                 borderRadius="30px"
//                 py="10px"
//                 px={{ base: "20px", md: "20px" }}
//                 fontFamily="arial"
//                 fontWeight="600"
//                 fontSize="16px"
//                 cursor="pointer"
//                 transition="all 0.3s ease"
//                 _hover={{
//                   transform: "translateY(-3px)",
//                   boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//                 }}
//                 // onClick={() => setIsDialogOpen(true)}
//               >
//                 <Text>Call for a Quote!</Text>
//               </Box>
//             </Box>
//           </VStack>

//           <HStack justify={"center"} align={"start"} w={"100%"} gap={"3px"}>
//             <Box py={"20px"} borderRadius={"20px"}>
//               <ImageCompareSlider />
//             </Box>
//           </HStack>

//           <VStack px={["4%", "4%", "6%", "6%", "6%", "10%"]}>
//             <Text
//               mt={"50px"}
//               justifyContent={"start"}
//               alignContent={"start"}
//               fontWeight={"700"}
//               fontFamily={"poppins"}
//               textStyle={"heading"}
//               w={"100%"}
//               color={"blue.500"}
//             >
//               Adelaide's #1 choice for remarkable exterior results
//             </Text>

//             <Text w={"100%"} textAlign={"start"} fontSize="14px">
//               Experience “100% Risk-Free Pressure Cleaning” from Calibre
//               Exterior Cleaning, Adelaide’s premier exterior cleaning
//               specialists. Our local team of skilled professionals is dedicated
//               to revitalising your property’s appearance with state-of-the-art
//               equipment and eco-friendly cleaning solutions.
//               <br />
//               <br />
//               With a deep understanding of Adelaide’s unique climate and
//               environment, we ensure the highest quality results while
//               protecting youdr property’s structural integrity. Trust in our
//               no-hassle satisfaction guarantee and let Calibre Exterior Cleaning
//               bring new life to your home or business. Request a quote today and
//               uncover the unparalleled  of Adelaide’s leading pressure
//               cleaning experts!
//               <br />
//               <br />
//               <Span fontWeight={"700"}>Shayal - Owner</Span>
//             </Text>
//           </VStack>

//           <VStack bg={"blue.200"}>
//             <Box >
//               <Text

//                 mt={"50px"}
//                 justifyContent={"start"}
//                 alignContent={"start"}
//                 fontWeight={"700"}
//                 fontFamily={"poppins"}
//                 textStyle={"heading"}
//                 w={"100%"}
//               >
//                 Read Some of Our Reviews
//               </Text>

//               <HStack
//                 p={{ base: "5px", md: "40px" }}
//                 rounded={"2xl"}
//                 // bg={"gray.50"}
//                 // border={"1px solid lightgray"}
//                 width={{ base: "100%", md: "40%" }}
//                 textAlign={{ base: "center", md: "left" }}
//                 position="relative"
//               >
//                 <Box fontWeight={"700"} fontSize={{ base: "34px", md: "26px" }}>
//                   G
//                 </Box>
//                 <Box fontSize={{ base: "24px", md: "26px" }}>5.0</Box>
//                 <Box
//                   display="flex"
//                   h={"100%"}
//                   alignContent={"center"}
//                   justifyContent={"center"}
//                 >
//                   <Box
//                     as={FaStar}
//                     color={"yellow.400"}
//                     display="inline-block"
//                     fontSize={{ base: "18px", md: "26px" }}
//                   />
//                   <Box
//                     as={FaStar}
//                     color={"yellow.400"}
//                     display="inline-block"
//                     fontSize={{ base: "18px", md: "26px" }}
//                   />
//                   <Box
//                     as={FaStar}
//                     color={"yellow.400"}
//                     display="inline-block"
//                     fontSize={{ base: "18px", md: "26px" }}
//                   />
//                   <Box
//                     as={FaStar}
//                     color={"yellow.400"}
//                     display="inline-block"
//                     fontSize={{ base: "18px", md: "26px" }}
//                   />
//                   <Box
//                     as={FaStar}
//                     color={"yellow.400"}
//                     display="inline-block"
//                     fontSize={{ base: "18px", md: "26px" }}
//                   />
//                 </Box>
//               </HStack>
//             </Box>

//             <Box maxW="350px">
//               <HStack
//                 justify={"start"}
//                 w={"100%"}
//                 overflowX="auto"
//                 overflowY="hidden"
//                 align="start"
//                 pb={2} // room for scrollbar
//               >
//                 {[1, 2, 3, 4, 5].map((i) => (
//                   <Box
//                     key={i}
//                     flexShrink={0} // don’t squash
//                     w="300px"
//                     h="200px"
//                     zIndex={1}
//                     p={{ base: "20px", md: "40px" }}
//                     rounded="2xl"
//                     bg="gray.50"
//                     border="1px solid lightgray"
//                     textAlign={{ base: "center", md: "left" }}
//                   />
//                 ))}
//               </HStack>
//             </Box>
//             <Box
//               mt={"25px"}
//               h={"120px"}
//               bg={"blue.500"}
//               px={["4%", "4%", "6%", "6%", "6%", "10%"]}
//             >
//               <Text
//                 mt={"20px"}
//                 justifyContent={"start"}
//                 alignContent={"start"}
//                 fontWeight={"700"}
//                 fontFamily={"poppins"}
//                 textStyle={"heading"}
//                 w={"100%"}
//                 color={"white"}
//               >
//                 Ready to Bring Your Home Back To Life
//               </Text>
//             </Box>

//             <Text
//               px={["4%", "4%", "6%", "6%", "6%", "10%"]}
//               mt={"25px"}
//               justifyContent={"start"}
//               alignContent={"start"}
//               fontWeight={"700"}
//               fontFamily={"poppins"}
//               textStyle={"heading"}
//               w={"100%"}
//               color={"blue.500"}
//             >
//               What we Promise
//             </Text>

//             <VStack
//               gap={"0px"}
//               justify={"start"}
//               align={"start"}
//               w={"100%"}
//               px={["4%", "4%", "6%", "6%", "6%", "10%"]}
//             >
//               <Text color="blue" fontSize="24px" fontWeight={"700"}>
//                 ✓{" "}
//                 <Span
//                   color="white"
//                   textStyle={"tinyText"}
//                   fontWeight={"normal"}
//                 >
//                   {" "}
//                   Pressure Cleaning
//                 </Span>
//               </Text>
//               <Text color="blue" fontSize="24px" fontWeight={"700"}>
//                 ✓{" "}
//                 <Span
//                   color="white"
//                   textStyle={"tinyText"}
//                   fontWeight={"normal"}
//                 >
//                   {" "}
//                   Pressure Cleaning
//                 </Span>
//               </Text>
//               <Text color="blue" fontSize="24px" fontWeight={"700"}>
//                 ✓{" "}
//                 <Span
//                   color="white"
//                   textStyle={"tinyText"}
//                   fontWeight={"normal"}
//                 >
//                   {" "}
//                   Pressure Cleaning
//                 </Span>
//               </Text>
//               <Text color="blue" fontSize="24px" fontWeight={"700"}>
//                 ✓{" "}
//                 <Span
//                   color="white"
//                   textStyle={"tinyText"}
//                   fontWeight={"normal"}
//                 >
//                   {" "}
//                   Pressure Cleaning
//                 </Span>
//               </Text>
//               <Text color="blue" fontSize="24px" fontWeight={"700"}>
//                 ✓{" "}
//                 <Span
//                   color="white"
//                   textStyle={"tinyText"}
//                   fontWeight={"normal"}
//                 >
//                   {" "}
//                   Pressure Cleaning
//                 </Span>
//               </Text>
//               <Text color="blue" fontSize="24px" fontWeight={"700"}>
//                 ✓{" "}
//                 <Span
//                   color="white"
//                   textStyle={"tinyText"}
//                   fontWeight={"normal"}
//                 >
//                   {" "}
//                   Pressure Cleaning
//                 </Span>
//               </Text>
//             </VStack>
//           </VStack>
//           <Box px={["4%", "4%", "6%", "6%", "6%", "10%"]}>
//             <Box
//               mt={"20px"}
//               p={{ base: "20px", md: "40px" }}
//               rounded={"2xl"}
//               bg={"blue.400"}
//               border={"8px solid lightblue"}
//               width={{ base: "100%", md: "40%" }}
//               textAlign={{ base: "center", md: "left" }}
//               position="relative"
//               pb={"50px"}
//               zIndex={"1"}
//             >
//               <VStack
//                 display="flex"
//                 h={"100%"}
//                 alignContent={"center"}
//                 justifyContent={"center"}
//                 textAlign={"start"}
//                 fontWeight={"700"}
//                 fontFamily={"poppins"}
//                 fontSize={"26px"}
//               >
//                 <Text color={"white"}>
//                   Get Instant <Span color={"blue.500"}>FREE QUOTE</Span>
//                 </Text>

//                 <Text
//                   textAlign={"center"}
//                   fontWeight={"500"}
//                   fontFamily={"poppins"}
//                   textStyle={"tinyText"}
//                   color={"white"}
//                 >
//                   Adelaide's #1 choice for remarkable exterior results
//                 </Text>
//                 <Box
//                   mt={"20px"}
//                   fontWeight={"500"}
//                   w={"100%"}
//                   as="input"
//                   // value={input}
//                   // onChange={(e) => setInput(e.target.value)}
//                   placeholder="Ask something..."
//                   borderBottom="1px solid #E2E8F0"
//                   flex="1"
//                   fontSize="14px"
//                   outline="none"
//                   py="10px"
//                   bg="transparent"
//                   color="white"
//                   textColor={"white"}
//                 />
//                 <Box
//                   fontWeight={"500"}
//                   w={"100%"}
//                   as="input"
//                   // value={input}
//                   // onChange={(e) => setInput(e.target.value)}
//                   placeholder="Ask something..."
//                   borderBottom="1px solid #E2E8F0"
//                   flex="1"
//                   fontSize="14px"
//                   outline="none"
//                   py="10px"
//                   bg="transparent"
//                   color="white"
//                 />
//                 <Box
//                   fontWeight={"500"}
//                   w={"100%"}
//                   as="input"
//                   // value={input}
//                   // onChange={(e) => setInput(e.target.value)}
//                   placeholder="Ask something..."
//                   borderBottom="1px solid #E2E8F0"
//                   flex="1"
//                   fontSize="14px"
//                   outline="none"
//                   py="10px"
//                   bg="transparent"
//                   color="white"
//                 />
//                 <Box
//                   fontWeight={"500"}
//                   w={"100%"}
//                   as="input"
//                   // value={input}
//                   // onChange={(e) => setInput(e.target.value)}
//                   placeholder="Ask something..."
//                   borderBottom="1px solid #E2E8F0"
//                   flex="1"
//                   fontSize="14px"
//                   outline="none"
//                   py="10px"
//                   bg="transparent"
//                   color="white"
//                 />
//                 <Box
//                   fontWeight={"500"}
//                   w={"100%"}
//                   as="input"
//                   // value={input}
//                   // onChange={(e) => setInput(e.target.value)}
//                   placeholder="Ask something..."
//                   borderBottom="1px solid #E2E8F0"
//                   flex="1"
//                   fontSize="14px"
//                   outline="none"
//                   py="10px"
//                   bg="transparent"
//                   color="white"
//                 />
//                 <Box display="flex" justifyContent="start" width="100%">
//                   <Box
//                     mt={"5px"}
//                     p={{ base: "20px", md: "40px" }}
//                     rounded={"2xl"}
//                     bg={"cyan.200"}
//                     border={"1px solid cyan.500"}
//                     width={{ base: "100%", md: "40%" }}
//                     textAlign={{ base: "center", md: "left" }}
//                     position="relative"
//                     color="cyan.600"
//                     borderRadius="30px"
//                     py="10px"
//                     px={{ base: "20px", md: "20px" }}
//                     fontFamily="arial"
//                     fontWeight="600"
//                     fontSize="16px"
//                     cursor="pointer"
//                     transition="all 0.3s ease"
//                     _hover={{
//                       transform: "translateY(-3px)",
//                       boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//                     }}
//                     // onClick={() => setIsDialogOpen(true)}
//                   >
//                     <Text>Call for a Quote!</Text>
//                   </Box>
//                 </Box>
//               </VStack>
//             </Box>
//           </Box>
//         </Box>
//       </VStack>
//     </Box>
//   );
// };
// export default Hero;
