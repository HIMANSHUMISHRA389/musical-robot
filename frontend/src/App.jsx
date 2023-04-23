import React, { useState } from "react";
import Header from "./component/layout/Header/Header.jsx";
import Footer from "./component/layout/Footer/Footer.jsx";
import {  BrowserRouter as Router,Route,Routes } from "react-router-dom";
import webFont from "webfontloader";
import Home from './component/Home/Home.jsx'



function App() {
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  });
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
