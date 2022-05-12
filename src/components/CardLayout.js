import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

export default function CardLayout() {
  return(
    <SimpleGrid minChildWidth='20vw' spacing='0vw' ml='2vw'>
  <Box><Card /></Box>
  <Box><Card /></Box>
  <Box><Card /></Box>
  <Box><Card /></Box>
  <Box><Card /></Box>
  <Box><Card /></Box>
  <Box><Card /></Box>

</SimpleGrid>
  )
}
