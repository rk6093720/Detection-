
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import backgroundimage from "../assets/Images/background.jpg";
const ForgetPassword = () => {
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
      <Box
        width={"35%"}
        height={"100%"}
        margin={"auto"}
        alignContent={"center"}
      >
        <Heading padding={2} textAlign={"center"}>
          ForgetPassword
        </Heading>
        <Box>
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" border={"1px solid blue"} color={"white"} placeholder="EmaIL" />
            </FormControl>
            <br />
            <Flex>
              <Button
                type="submit"
                backgroundColor={"blue"}
                border={"1px solid black"}
                width={"100%"}
              >
                Send
              </Button>
              <Button
                border={"1px solid black"}
                backgroundColor={"Red"}
                width={"100%"}
              >
                Back
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default ForgetPassword;
