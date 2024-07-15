import React, { Suspense } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MainRoutes from "./Page/MainRoutes";
import { Spinner } from "@chakra-ui/react";
function App() {
  const Auth = true;
  const Login = React.lazy(() => import("./Authentication/Login"));
  const LandingPage = React.lazy(()=>import("./Page/Layout.js"));
  const Signup = React.lazy(()=> import("./Authentication/Register"));
  const Forgetpassword = React.lazy(()=>import("./Authentication/Forgetpassword.js"));
  const Resetpassword = React.lazy(()=>import("./Authentication/ResetPassword.js"));
  return (
    <div className="App">
      <HashRouter>
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
            {!Auth && (
              <Route
                exact
                path="/"
                element={<Navigate to={"/login"} replace />}
              />
            )}
            <Route exact path="/register" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgetpassword" element={<Forgetpassword/>} />
            <Route exact path="/resetpassword" element={<Resetpassword/>}/>
            <Route path="*" element={<LandingPage />} />
            {Auth && <Route path="/*" element={<MainRoutes />} />}
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
