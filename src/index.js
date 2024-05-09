import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsappStart from "./components/whatapp/whatapp";

import WhatappEnd from "./components/whatapp/whatEnd";
import Gallery from "./components/gallery/gallery";
AOS.init();
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/whatsapp/start" element={<WhatsappStart />} />
      <Route path="/whatsapp/end" element={<WhatappEnd />} />

      <Route path="/home" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
