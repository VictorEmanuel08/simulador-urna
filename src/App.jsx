// import React, { useState } from "react";
// import person from "./assets/person.png";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Urna } from "./pages/Urna";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/urna" />} />
        <Route path="/urna" element={<Urna />} />
      </Routes>
    </BrowserRouter>
  );
}
