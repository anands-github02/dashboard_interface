import { Badge, Box, Center, Icon, Image, Spacer } from "@chakra-ui/react";
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AvTimerIcon from '@mui/icons-material/AvTimer';
export default function Card(props) {


  return (
    <Box
      maxW="250"
      minH="80%"
      borderWidth="1px"
      borderColor={'black'}
      overflow="hidden"
      m="1vw"
      display={"flex"}
      flexDir="column"
      color="black"
    >
      <Box>
        <Image
          w="100vw"
          h="8vw"
          src={props.imageUrl}
          alt={props.imageAlt}
        />
        <Badge
          
          my="2.5"
          maxW="100"
          position="relative"
          left="180"
          top="-120"
        >
          <Center>{props.status}</Center>
        </Badge>
      </Box>

      <Box ml="1vw" my="1.5" fontWeight={"bold"} fontSize={20}>
        {props.name}
      </Box>
      <Box ml="1vw" my="1.5" fontSize={12}>
        Last updated: {props.lastUpdated}
      </Box>
      <Spacer />
      <Box
        ml="1vw"
        my="1.5"
        fontSize={15}
        maxW="13vw"
        display={"flex"}
        flexDirection="row"
      >
        <Box><CastForEducationIcon size="1" />Lessons: {props.lessons}</Box>
        <Spacer />
        <Box><AvTimerIcon />Minutes: {props.minutes}</Box>
      </Box>
      <Badge ml="1vw" my="1.5" maxW="100" borderRadius={50}>
        <Center>{props.tag}</Center>
      </Badge>
    </Box>
  );
}
