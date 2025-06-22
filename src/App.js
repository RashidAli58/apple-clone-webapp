import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Store from "./components/Store/Store";
import Mac from "./components/Mac/Mac";
import IPad from "./components/IPad/IPad";
import IPhone from "./components/IPhone/IPhone";
import Watch from "./components/Watch/Watch";
import AirPods from "./components/AirPods/AirPods";
import TVHome from "./components/TVHome/TVHome";
import Entertainment from "./components/Entertainment/Entertainment";
import Accessories from "./components/Accessories/Accessories";
import Support from "./components/Support/Support";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/store" element={<Store />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/IPad" element={<IPad />} />
        <Route path="/IPhone" element={<IPhone />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/airpods" element={<AirPods />} />
        <Route path="/tv-home" element={<TVHome />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
};

export default App;
