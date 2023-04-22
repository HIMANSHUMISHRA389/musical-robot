import React, { useState } from "react";
import Header from "./component/layout/Header/Header.jsx";
import Footer from "./component/layout/Footer/Footer.jsx";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import webFont from "webfontloader";




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
        <Footer/>
      </Router>
    </>
  );
}

export default App;
