import { Box } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'
import CardLayout from './CardLayout'
import Navbar from './Navbar'
import Tabs from './Tabs'

export default function Layout() {
  return (
      <Box maxW='85vw' display={'flex'} flexDirection='column' ml={'15vw'}>
<Navbar />
<Tabs />
<CardLayout />
</Box>
)
}
