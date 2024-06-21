import React from 'react';
import Header from '../Component/Header';
import MainRoutes from './MainRoutes';
import Footer from '../Component/Footer';
import Sidebar from '../Component/AppSidebar';
import { Box, Flex } from '@chakra-ui/react';
const Layout = () => {
  return (
    <React.Fragment>
      <Flex justifyContent={"space-between"} >
        <Box>
          <Sidebar />
        </Box>
        <Box>
          <Header />
          <MainRoutes />
          <Footer />
        </Box>
      </Flex>
    </React.Fragment>
  );
}

export default Layout;
