import React, { useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import { ThemeProvider } from "@material-ui/core";
import Header from "./src/layouts/Header/Header";
import { HomePage, LoginPage } from "./src/pages/index";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import theme from "./src/theme/Theme";
import Layout from "./src/layouts/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import VehiclePage from "./src/pages/VehiclePage/VehiclePage";
import ModelPage from "./src/pages/ModelPage/ModelPage";
import LocationPage from "./src/pages/LocationPage/LocationPage";

const App = () => {

  const user = useSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userVariable = useMemo(() => {return {user}}, [user.email, user.password]);

  // window.addEventListener("popstate", function (event) {
  //   if (userVariable.email !=null && userVariable.password !=null) {
  //     return navigate("/home");
  //   }
  //   else {
  //     navigate("/");
  //   }
  // });

  // useEffect(() => {
  //      if (userVariable.email !=null && userVariable.password !=null) {
  //     return navigate("/home");
  //   }
  //   else {
  //     navigate("/");
  //   }
    
  // }, [userVariable]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {user != null && <Header />}

        <Routes>
          {/* <Route path="/" element={<LoginPage />} /> */}

          <Route path="/home" element={<HomePage />} />

          <Route path="/vehicles" element={<VehiclePage />} />

          <Route path="/models" element={<ModelPage />} />

          <Route path="/locations" element={<LocationPage />} />

        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
