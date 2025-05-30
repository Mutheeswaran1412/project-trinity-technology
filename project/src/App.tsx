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
import Careers from "./components/sections/Careers"; // ✅ Careers includes Resume Upload
import Contact from "./components/sections/Contact";
import GlobalPresence from "./components/sections/GlobalPresence";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* ✅ Main Landing Page */}
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
              <Careers /> {/* ✅ Resume upload is inside Careers.tsx */}
              <Contact />
            </main>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
