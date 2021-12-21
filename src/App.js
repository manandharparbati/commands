import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import Body from "./Components/Command/Body.js";
// import Data from "./Components/Data/data";
import Footer from "./Components/Footer/Footer";
import "./Components/scss/style.css";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/Commands" element={<Body />} exact />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
