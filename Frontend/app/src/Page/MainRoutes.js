import { Spinner } from '@chakra-ui/react';
import React, { memo, Suspense } from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Camera from './Camera';
import Setting from '../Component/Setting';
import Dashboard from "./Dashboard";
import Vehicles from './Vehicles';
import Profile from "./Profile";
import PeopleCounter from './PeopleCounter';
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
          <Route exact path="/camera" element={<Camera />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/peoplecounter" element={<PeopleCounter />} />
          <Route path="/" element={<Navigate to="Layout" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default memo(MainRoutes);
