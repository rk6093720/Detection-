import React from "react";
import {
  Flex,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
  Image,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  HamburgerIcon,
  MoonIcon,
  SunIcon,
  EmailIcon,
  BellIcon,
} from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";

const Header = ({ handleSize }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)"); // 62em is the breakpoint for 'lg'
  const handleClickScroll = (value) => {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onClick = () => {
    if (isLargerThanLG) {
      handleSize();
    } else {
      onOpen();
    }
  };

  return (
    <React.Fragment>
      <Flex
        style={{
          width: "100%",
          height: "60px",
          alignItems: "center",
          marginTop: "0px",
          justifyContent: "space-between",
        }}
        background={bg}
        padding={4}
      >
        <Box fontSize={{ base: "12px", md: "18px", lg: "24px" }}>
          <Flex>
            <Button
              className="openbtn"
              onClick={onClick}
              style={{ marginInlineStart: "-14px" }}
            >
              <HamburgerIcon />
            </Button>

            <Box marginLeft="20px">
              <Link to={"/dashboard"}>Dashboard</Link>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Box marginLeft="20px">
              <Link to={"/setting"}>
                <Button>
                  <EmailIcon />
                </Button>
              </Link>
            </Box>
            <Box marginLeft="20px">
              <Link to={"/setting"}>
                <Button>
                  <BellIcon />
                </Button>
              </Link>
            </Box>
            <Box marginLeft="20px">
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
              </Button>
            </Box>
            <Box marginLeft="20px">
              <Link to={"/profile"}>
                <Image
                  src="https://idolkart.com/cdn/shop/articles/Wife_of_Lord_Ganesha.jpg?v=1700210846&width=1500"
                  width={"50px"}
                  height={"50px"}
                  borderRadius={"50%"}
                  verticalAlign={"middle"}
                />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>

      {/* Drawer for mobile view */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex
              w="100%"
              justifyContent={"space-between"}
              direction={"column"}
              fontSize="18px"
              alignItems={"center"}
            >
              <Flex
                w="100%"
                class="nav-link dashboard"
                colorScheme="gray"
                // onClick={() => handleClickScroll("/dashboard")}
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                <Link to={"/dashboard"}>Dashboard</Link>
              </Flex>
              <Flex
                w="100%"
                class="nav-link settings"
                colorScheme="gray"
                // onClick={() => handleClickScroll("/settings")}
                variant="ghost"
                align="center"
                p="3"
                mx="4"
                mt="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: "cyan.400",
                  color: "white",
                }}
              >
                <Link to={"/settings"}>Settings</Link>
              </Flex>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};

export default Header;
