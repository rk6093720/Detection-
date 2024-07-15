import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import backgroundimage from "../assets/Images/background.jpg";
import { Link } from "react-router-dom";
const Register = () => {
  const boxwidth = useBreakpointValue({
    base: "325px",
    md: "780px",
    lg: "1260px",
  });
  return (
    <Box
      style={{
        width:{boxwidth},
        height: "580px",
        margin: "auto",
        padding: "4px",
        marginTop: "2px",
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: "cover",
        backgroundPosition: "fixed",
        backgroundRepeat: "no-repeat",
        imageRendering: "-webkit-optimize-contrast",
        opactiy: "0.5",
        overflow: "hidden",
      }}
    >
      <Box width={{base:"100%",md:"100%",lg:"30%"}} height={"100%"} margin={"auto"}>
        <Heading padding={{base:4,md:4,lg:4}} fontSize={{base:"18px",md:"24px",lg:"18px"}} textAlign={{base:"start",md:"center",lg:"center"}}>
          Welcome to Security Application For Register
        </Heading>
        <Box>
          <form>
            <FormControl>
              <FormLabel>UserName</FormLabel>
              <Input type="text" color={"white"} placeholder="Username" />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" color={"white"} placeholder="EmaIL" />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Password" />
            </FormControl>
            <br />
            <Button type="submit" border={"1px solid black"} width={"100%"}>
              Register
            </Button>
          </form>
        </Box>
        <br />
        <Box>
          If you have account on Security Application then
          <br />
          <Link to="/login">
            <Button color="teal" active>
              Login Now!
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
