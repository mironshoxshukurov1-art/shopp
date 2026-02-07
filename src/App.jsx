import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Section1 from "./components/Section1";
import Backend from "./components/Backend";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:detail" element={<Detail />} />
      </Routes>

    </div>
  );
}
