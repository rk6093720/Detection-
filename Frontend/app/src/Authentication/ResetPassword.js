import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,

} from "@chakra-ui/react";
import React from "react";
import backgroundimage from "../assets/Images/background.jpg";
const ResetPassword = () => {
  return (
    <div
      style={{
        width: "1280px",
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
      <Box width={"30%"} height={"100%"} margin={"auto"}>
        <Heading padding={4} textAlign={"center"}>
          ResetPassword
        </Heading>
        <Box>
          <form>
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
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" placeholder="Password" />
            </FormControl>
            <br />
            <Button type="submit" backgroundColor={"blue"} border={"1px solid black"} width={"100%"}>
              ResetPassword
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default ResetPassword;
