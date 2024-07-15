import { Box, Flex, Heading,Text } from '@chakra-ui/react';
import React from 'react';

const PeopleCounter = () => {
  return (
    <div position={"absolute"} height={"495px"} border={"1px solid black"}>
      <Heading textAlign={"start"}>People Counter</Heading>
      <Flex justifyContent={"space-evenly"}>
        <Box>
          <Text>No of People Enter:{12}</Text>
        </Box>
        <Box>No of People Exit:{20}</Box>
      </Flex>
    </div>
  );
}

export default PeopleCounter;
