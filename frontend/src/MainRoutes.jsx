import React from "react";
import { Route, Routes } from "react-router-dom";
import UserForm from "./components/UserForm";
import UserBudget from "./components/UserBudget";
import Notification from "./components/Notification";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const MainRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/" element={<UserForm />} />
        <Route path="/budget" element={<UserBudget />} />
        <Route path="/success" element={<Notification />} /> */}
      </Routes>
    </main>
  );
};

export default MainRoutes;
