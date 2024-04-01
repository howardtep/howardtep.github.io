import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Home";
import Crypto from "./crypto/Crypto";
import Test from "./test";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/crypto" element={<Crypto />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default Main;
