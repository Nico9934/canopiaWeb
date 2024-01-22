import React from "react";
import { Route, Routes } from "react-router-dom";
import UserForm from "./UserForm";
import UserBudget from "./UserBudget";
import Notification from "./Notification";

const MainRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/budget" element={<UserBudget />} />
        <Route path="/success" element={<Notification />} />
      </Routes>
    </main>
  );
};

export default MainRoutes;
