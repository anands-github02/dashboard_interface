import { Box, Center, Divider, Spacer } from "@chakra-ui/react";

import React from "react";

export default function Sidebar() {
  return (
    <Box bg="black" w="15vw" h="100vh" display="flex" flexDirection={"column"} position='fixed' >
      <Box h="10vh" p="5">
        <Center>Anand</Center>
      </Box>
      <Divider />
      <Box h="5vh" p="2">
        <Center>Anand</Center>
      </Box>
      <Box h="5vh" p="2">
        <Center>Anand</Center>
      </Box>
      <Box h="5vh" p="2">
        <Center>Anand</Center>
      </Box>
      <Box h="5vh" p="2">
        <Center>Anand</Center>
      </Box>
      <Box h="5vh" p="2">
        <Center>Anand</Center>
      </Box>
      <Spacer />
      <Box h="5vh" p="2">
        <Center>Anand</Center>
      </Box>
      <Box h="5vh" p="2">
        <Center>Anand</Center>
      </Box>
      <Box h="5vh" p="2">
        <Center>Anand</Center>
      </Box>
      <Divider />
      <Box h="8vh" p="5">
        <Center>Anand</Center>
      </Box>
    </Box>
  );
}
