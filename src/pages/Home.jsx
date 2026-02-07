import React from "react";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import Backend from "../components/Backend";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
        
      <Section />
      <Section1 />
      <Backend />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}
