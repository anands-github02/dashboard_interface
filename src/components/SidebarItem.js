import { Box, Button, Divider, Icon } from "@chakra-ui/react";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';

export default function SidebarItem(props) {
 return (
    <Box display={"flex"} flexDir='row' h='2vh' p='5' bg='black' _hover={{bg:'gray'}} pb='8' _focus={{bg:'gray'}}>
      {props.icon}
      <Box ml='10'>{props.item}</Box>
    </Box>
  );
}
