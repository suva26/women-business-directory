import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RegisterBusiness from "./pages/RegisterBusiness";
import AdminPanel from "./pages/AdminPanel";
import { BusinessProvider } from "./context/BusinessContext";

const App = () => {
  return (
    <BusinessProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterBusiness />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BusinessProvider>
  );
};

export default App;
