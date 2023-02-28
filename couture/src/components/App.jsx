import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Electronics from "./Electronics";
import Jewelery from "./Jewelery";
import Men from "./Men";
import Women from "./Women";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/jewelery" element={<Jewelery />} />
      <Route path="/Men's Clothing" element={<Men />} />
      <Route path="/Women's Clothing" element={<Women />} />
    </Routes>
  );
}

export default App;
