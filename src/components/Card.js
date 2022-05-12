import { Badge, Box, Center, Image, Spacer } from "@chakra-ui/react";

export default function Card() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "image here",
    name: "xyz",
    lastUpdated: "20/10/2021",
    lessons: 1,
    minutes: 13,
    tag: "Marketing",
    status: "live",
  };

  return (
    <Box
      maxW="250"
      minH="40%"
      borderWidth="5px"
      overflow="hidden"
      m="1vw"
      display={"flex"}
      flexDir="column"
      color="black"
    >
    <Box>
      <Image
        w="100vw"
        h="12vw"
        src={property.imageUrl}
        alt={property.imageAlt}
        border="1px solid black"
      />
          <Badge ml='1vw' my='1.5' maxW='100' position='relative'  left='180' top='-180'><Center>{property.status}</Center></Badge>

</Box>

      <Box ml="1vw" my='1.5' fontWeight={'bold'} fontSize={20}>{property.name}</Box>
      <Box ml="1vw"  my='1.5'fontSize={12}>
        Last updated: {property.lastUpdated}
      </Box>
      <Spacer />
      <Box ml="1vw"  my='1.5'fontSize={15} maxW="12vw" display={"flex"} flexDirection="row">
        <Box>Lessons: {property.lessons}</Box>
        <Spacer />
        <Box>Minutes: {property.minutes}</Box>
      </Box>
      <Badge ml='1vw' my='1.5' maxW='100' borderRadius={50} ><Center>{property.tag}</Center></Badge>
    </Box>
  );
}
