import { useState } from 'react'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage';
import DetailPage from './pages/DetailPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/lamborghini-revuelto-web-project">
  <div className="page-animations">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/AboutPage" element={<AboutPage/>}/>
    <Route path="/DetailPage" element={<DetailPage/>}/>
    <Route path="/GalleryPage" element={<GalleryPage/>}/>
    <Route path="/ContactPage" element={<ContactPage/>}/>
  </Routes>
  </div>
  </BrowserRouter>
)
export default App;
