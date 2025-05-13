import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import DetailPage from './pages/DetailPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import './index.css'; // or your main styles

function App() {
  return (
    <BrowserRouter basename="/lamborghini-revuelto-web-project">
      <div className="page-animations">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/DetailPage" element={<DetailPage />} />
          <Route path="/GalleryPage" element={<GalleryPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
