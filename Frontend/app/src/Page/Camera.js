import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Box, Flex } from '@chakra-ui/react';
const Camera = () => {
    const [data,setData]=useState("");
    useEffect(()=>{
        async function fetchData(){
          try {
            const res = await axios.post(
              "https://75bf-116-73-243-230.ngrok-free.app/app/anprcc/"
            );
            setData(res.data.plate)
          } catch (error) {
            console.log(error.message);
          }
        }
        fetchData()
    },[])
    console.log(data)
  return (
    <div>
      <Flex>
        <Box></Box>
        <Box>AddCamera</Box>
      </Flex>
      <h1>Camera List</h1>
      {data}
    </div>
  );
}

export default Camera
