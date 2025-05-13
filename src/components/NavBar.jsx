import { Link } from 'react-router-dom';
import { MoonStar } from 'lucide-react';
import { CloudSun } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { X } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
import { useState } from 'react'

import logo from '../assets/main-logo.png';

// Importing The Components
import ReserveBox from './ReserveBox';
import '../styles/NavBar.css';

function NavBar ({toggleTheme, currentTheme}) {

    const [isSmallNavBar, setIsSmallNavBar] = useState(false)

    const [isReserveBoxOpen, setIsReserveBoxOpen] = useState(false)
    const [isCompletedBoxOpen, setIsCompletedBoxOpen] = useState(false)

    return (
        <>
        <nav className="navbar navbar-expand-lg">
        <div className="container">
            <Link className="d-flex logo align-items-center justify-content-center"  to="/">
                <img src={logo} alt="logo" />
                <h5 id="main-logo-text"><strong><div className='lambo'>Lamborghini</div></strong> Revuelto</h5>
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><AlignJustify style={{width:"30px", height: "30px", color: "white"}}/></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    <div className="nav-underline"></div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/AboutPage">About</Link>
                    <div className="nav-underline"></div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/DetailPage">Car Details</Link>
                    <div className="nav-underline"></div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/GalleryPage">Gallery</Link>
                    <div className="nav-underline"></div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/ContactPage">Contact Us</Link>
                    <div className="nav-underline"></div>
                </li>
            </ul>
            <ul className="navbar-nav me-0 mb-2 mb-lg-0 gap-2" style={{margin: "0 auto"}}>
           
                <button onClick={toggleTheme} className='light-2-dark'>
                    {currentTheme === 'light' ? <MoonStar/> : <CloudSun/> }
                </button>
                <button onClick={() => setIsReserveBoxOpen(true)} className='rserve-button'>Reserve Now</button>
            </ul>
            </div>
        </div>
        </nav>

        {isReserveBoxOpen && (
           <ReserveBox 
            closingFunction={() => setIsReserveBoxOpen(false)}
            submitFunction={() => {setIsReserveBoxOpen(false); setIsCompletedBoxOpen(true)}}/>
        )}
        {isCompletedBoxOpen && (
            <div id="successful-message-box">
                <X onClick={() => setIsCompletedBoxOpen(false)} className='close'/>
                <h5>Thank you for your interest in reserving the Lamborghini Revuelto!"</h5>
                <div style={{width: "98%", backgroundColor: "rgb(71, 71, 71)", height: "2px"}}></div>
                <p>We appreciate you taking the time to explore this incredible machine. Please note that this landing page is a showcase designed to demonstrate the stunning features and experience of the Lamborghini Revuelto. While the reservation process is not active on this page, we hope it has given you a glimpse of what makes the Lamborghini Revuelto truly exceptional. If you would like to explore more or inquire about availability, feel free to contact us. Stay tuned for future updates!</p>
            </div>
        )}
        </>
    );
}
export default NavBar;
