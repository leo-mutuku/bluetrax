import React from "react";
import { Routes, Route } from "react-router-dom";
import TopMenu from "./pages/global/topmenu";
import Dashboard from "./pages/dashboard";
import Tracking from "./pages/tracking";
import Analitics from "./pages/analitics";
import Modal from "./pages/modal";

const App = () => {
  return (
    <>
      <TopMenu />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="tracking" element={<Tracking />} />
        <Route path="analitics" element={<Analitics />} />
        <Route path="modal" element={<Modal />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
};

export default App;
