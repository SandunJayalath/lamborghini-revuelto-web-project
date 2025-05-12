import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/HomeStyles.css'
import './styles/NavBar.css'
import './styles/FooterStyles.css'
import './styles/AboutPageStyles.css'
import './styles/SubHeroStyles.css'
import './styles/TeamCardStyles.css'
import './styles/DetailPageStyles.css'
import './styles/GalleryPageStyles.css'
import './styles/ContactPageStyles.css'
import './styles/ReserveBoxStyles.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ This is important
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
