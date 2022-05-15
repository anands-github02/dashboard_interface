import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";


const property = [{
  // imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "image here",
  name: "xyz",
  lastUpdated: "20/10/2021",
  lessons: 1,
  minutes: 13,
  tag: "Marketing",
  status: "live",
},
{
  // imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "image here",
  name: "xyz",
  lastUpdated: "20/10/2021",
  lessons: 1,
  minutes: 13,
  tag: "Marketing",
  status: "live",
},
{
  // imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "image here",
  name: "xyz",
  lastUpdated: "20/10/2021",
  lessons: 1,
  minutes: 13,
  tag: "Marketing",
  status: "live",
},
{
  // imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "image here",
  name: "xyz",
  lastUpdated: "20/10/2021",
  lessons: 1,
  minutes: 13,
  tag: "Marketing",
  status: "live",
},
{
  // imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "image here",
  name: "xyz",
  lastUpdated: "20/10/2021",
  lessons: 1,
  minutes: 13,
  tag: "Marketing",
  status: "live",
},
{
  // imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "image here",
  name: "xyz",
  lastUpdated: "20/10/2021",
  lessons: 1,
  minutes: 13,
  tag: "Marketing",
  status: "live",
},];
export default function CardLayout() {

  return (
    <SimpleGrid minChildWidth="18vw" spacing="0vw">
      {property.map((cardProps) => {
        return(
        <Box>
          <Card
            imageUrl={cardProps.imageUrl}
            imageAlt={cardProps.imageAlt}
            name={cardProps.name}
            lastUpdated={cardProps.lastUpdated}
            lessons={cardProps.lessons}
            minutes={cardProps.minutes}
            tag={cardProps.tag}
            status={cardProps.status}
          />
        </Box>)
      })}
    </SimpleGrid>
  );
}
