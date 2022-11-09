import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignUp from "./component/User/LoginSignUp";
import ForgotPassword from "./component/User/ForgotPassword";
import About from "./component/layout/About/About";
import Scrapper from "./component/Scrapper/Scrapper";

function App() { 

  return (
    <div>
      <BrowserRouter>
    
        <Fragment>
            <Routes>
            <Route exact path="/scrapper" element={<Scrapper />} />
              <Route exact path="/login" element={<LoginSignUp />} />
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/password/forgot"
                element={<ForgotPassword />}
              />
            

             
            </Routes>
        
        </Fragment>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
