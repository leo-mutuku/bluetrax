import React from "react";
import { Routes, Route } from "react-router-dom";
import TopMenu from "./pages/global/topmenu";
import Dashboard from "./pages/dashboard";
import Tracking from "./pages/tracking";
import Analytics from "./pages/analytics";
import Modal from "./pages/modal";
import Signup from "./pages/signup";

const App = () => {
  return (
    <>
      <TopMenu />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="tracking" element={<Tracking />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="modal" element={<Modal />} />
        <Route path="form" element={<Signup />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
};

export default App;
