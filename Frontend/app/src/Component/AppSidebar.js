// AppSidebar.js
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.store.sidebarUnfoldable);
  const boxwidth = useBreakpointValue({
    base: "100%",
    md: "100%",
    lg: !sidebarShow ? "calc(100% - 0px)" : "100%",
  });
console.log(boxwidth)
  const Accordionlist = [
    { title: "Dashboard", Link: "/dashboard" },
    { title: "Vehicles", Link: "/vehicles" },
    { title: "Camera", Link: "/camera" },
    { title: "Setting", Link: "/settings" },
    { title: "PeopleCounter", Link: "/peoplecounter" },
  ];


  return (
    <Box  width={boxwidth} visibility={{base:"hidden",md:"hidden",lg:"visible"}}>
      <Box style={{ width:"100%", height: "100%" }}>
        <Box style={{ width: "100%", height: "60px" }}>Company Image</Box>
        <Box p={1} width={"250px"} >
          <Accordion>
            {Accordionlist.map((item, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {item.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link to={item.Link}>{item.title}</Link>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default AppSidebar;
