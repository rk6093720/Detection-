import React from "react";
import Header from "../Component/Header";
import MainRoutes from "./MainRoutes";
import { toggleSidebar, toggleUnfoldable } from "../Redux/Auth/action";
import AppSidebar from "../Component/AppSidebar";
import { Box, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
const Layout = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.store.sidebarShow);
  const unfoldable = useSelector((state) => state.store.sidebarUnfoldable);

  const handleSize = () => {
    switch (true) {
      case !sidebarShow && unfoldable:
        // Sidebar is visible and unfolded, collapse it
        dispatch(toggleUnfoldable());
        break;
      case sidebarShow && !unfoldable:
        // Sidebar is visible and folded, hide it
        dispatch(toggleSidebar());
        break;
      default:
        // Sidebar is hidden, show it
        dispatch(toggleSidebar());
        break;
    }

  };
  return ( 
    <React.Fragment>
      <Flex width={{base:"100%",md:"100%",lg:"100%"}} justifyContent="space-between">
        <Box
          width={sidebarShow ? (unfoldable ? "250px" : "250px") : "0px"}
          overflowX="hidden"
          transition="width 0.3s ease"
        >
          <AppSidebar />
        </Box>
        <Box flex="1"   position="relative">
          <Header handleSize={handleSize} />
          <MainRoutes />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default Layout;
