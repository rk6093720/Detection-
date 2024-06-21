import React from "react";
import {
  Flex,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  HamburgerIcon,
  MoonIcon,
  SunIcon,
  EmailIcon,
  SettingsIcon,
  BellIcon,
} from "@chakra-ui/icons";
import { toggleSidebar } from "../Redux/Auth/action";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.store.sidebarShow);
  const handleSize = () => {
    alert(sidebar)
    dispatch(toggleSidebar())
  };
  console.log(sidebar)// remain the foldable feature
  return (
    <React.Fragment>
      <Flex
        style={{
          width: "1020px",
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
            <Button onClick={handleSize} style={{ marginInlineStart: "-14px" }}>
              <HamburgerIcon />
            </Button>

            <Box marginLeft="20px">
              <Link to={"/dashboard"}>Dashboard</Link>
            </Box>
            <Box marginLeft="20px">
              <Link to={"/setting"}>
                <Button>
                  <SettingsIcon />
                </Button>
              </Link>
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
              <Link to={"/setting"}>Profile</Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default Header;
