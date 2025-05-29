import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import TechStack from "./components/sections/TechStack";
import Industries from "./components/sections/Industries";
import Insights from "./components/sections/Insights";
import Careers from "./components/sections/Careers";
import Contact from "./components/sections/Contact";
import GlobalPresence from "./components/sections/GlobalPresence";
import ResumeUpload from "./components/sections/ResumeUpload"; // ✅ Ensure this is correctly placed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Landing Page */}
        <Route 
          path="/" 
          element={
            <main>
              <Hero />
              <About />
              <Services />
              <TechStack />
              <Industries />
              <GlobalPresence />
              <Insights />
              <Careers />
              <Contact />
            </main>
          } 
        />

        {/* Resume Upload Page */}
        <Route path="/resume-upload" element={<ResumeUpload />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
