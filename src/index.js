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
import Book from "./components/book/book";
import Quotes from "./components/quotes/quotes";
import VideoGallery from "./videoGallery/videogallery";
import Songs from "./songs/songs";   


AOS.init();
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/whatsappstart" element={<WhatsappStart />} />
      <Route path="/whatsappend" element={<WhatappEnd />} />

      <Route path="/home" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/book" element={<Book />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/videos" element={<VideoGallery/>} />
      <Route path="/songs" element={<Songs/>} />
      


    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
