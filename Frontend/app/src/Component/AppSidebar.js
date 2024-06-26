// AppSidebar.js
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
const AppSidebar = () => {
  const dispatch = useDispatch()
  const Accordionlist = [
    { title: "Dashboard", Link: "/dashboard" },
    {title:"Vehicles",Link:"/vehicles"},
    { title: "Camera", Link: "/camera" },
    { title: "Setting", Link: "/settings" },
  ];
 
  return (
    <div
      style={{
        width:"100%",
        height: "100vh",
        transition: "width 0.3s ease",
        display:"block"
      }}
    >
      <Box style={{ width: "100%", height: "100%" }}>
        <Box style={{  width: "100%", height: "60px" }}>
          Company Image
        </Box>
        <Box>
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
    </div>
  );
};

export default AppSidebar;
