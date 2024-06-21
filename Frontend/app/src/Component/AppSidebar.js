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
import { useDispatch, useSelector } from "react-redux";
import {toggleSidebar} from "../Redux/Auth/action"
const AppSidebar = () => {
  const Accordionlist = [
    { title: "Dashboard", Link: "/dashboard" },
    { title: "Camera", Link: "/camera" },
    { title: "Setting", Link: "/setting" },
  ];

  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar(!sidebarShow)); // Dispatch toggleSidebar action
  };

  return (
    <Box
      style={{
        display: !sidebarShow ? "block" : "none",
        width: "255px",
        height: "100vh",
        border: "1px solid red",
        transition: "width 0.3s ease",
      }}
    >
      <Box style={{ width: "100%", height: "100%" }}>
        <Box style={{ border: "1px solid red", width: "100%", height: "60px" }}>
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
    </Box>
  );
};

export default AppSidebar;
