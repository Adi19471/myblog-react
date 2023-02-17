import React from "react";

import { About } from "./Components/About/About";
import Home from "./Components/Home/Home";
import Page from "./Components/Page/Page";

import Service from "./Components/Service/Service";

import Contact from "./Components/Contact/Contact";

import Navbar from "./Components/Navbr/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path=":userID" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>

          <Route path="*" element={<Page />}></Route>
        </Routes>
      </BrowserRouter>

      <br />
      <Footer />
    </>
  );
};

export default App;
