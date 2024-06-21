import { Spinner } from '@chakra-ui/react';
import React, { memo, Suspense } from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Camera from './Camera';
import Setting from '../Component/Setting';
import Dashboard from "./Dashboard";
const MainRoutes = () => {
  return (
    <div>
      <Suspense
        fallback={
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        }
      >
        <Routes>
          <Route exact path="/camera" element={<Camera/>} />
          <Route path='/setting' element={<Setting/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Navigate to="Layout" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default memo(MainRoutes);
