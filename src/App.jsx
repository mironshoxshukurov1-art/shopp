import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Section1 from "./components/Section1";
import Backend from "./components/Backend";

export default function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <Section1 />
      <Backend />
    </div>
  );
}
