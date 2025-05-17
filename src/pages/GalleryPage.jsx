import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

// Importing the Components
import NavBar from "../components/NavBar"
import SubHero from "../components/SubHero";;
import MainTopic from "../components/MainTopic";
import Paragraphs from "../components/Paragraphs";
import ImageCard from "../components/ImageCard";
import NormalButton from "../components/NormalButton";
import TheFooter from "../components/TheFooter";

import { Quote } from 'lucide-react';

// Importing the images
import backgroundImage from '../assets/background-image.jpg';
import image1 from '../assets/Gallery Images/Image1.jpg'
import image2 from '../assets/Gallery Images/Image2.jpg'
import image3 from '../assets/Gallery Images/Image3.jpg'
import image4 from '../assets/Gallery Images/Image4.jpeg'
import image5 from '../assets/Gallery Images/Image5.jpeg'
import image6 from '../assets/Gallery Images/Image6.jpeg'
import image7 from '../assets/Gallery Images/Image7.jpeg'
import image8 from '../assets/Gallery Images/Image8.png'
import image9 from '../assets/Gallery Images/Image9.jpg'
import image10 from '../assets/Gallery Images/Image10.jpg'
import image11 from '../assets/Gallery Images/Image11.png'
import image12 from '../assets/Gallery Images/Image12.jpg'

function GalleryPage () {

    // For switching the themes

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    const images = [
        {id: 1, category: "Exterior", title: "lamborghini Rvuelto driving through", image: image1},
        {id: 2, category: "Interior", title: "Awesome Driving Experience", image: image2},
        {id: 3, category: "Life Styles", title: "Feeling The Luxuryness", image: image3},
        {id: 4, category: "Performance", title: "Feel the Real Power of a Bull", image: image4},
        {id: 5, category: "Performance", title: "Awesome Suspensions and more", image: image5},
        {id: 6, category: "Interior", title: "Feel the Comfort and the Power", image: image6},
        {id: 7, category: "Details", title: "Feel The Real Neons", image: image7},
        {id: 8, category: "Interior", title: "Interior Cockpit, Feel Like a Pilot", image: image8},
        {id: 9, category: "Life Styles", title: "Black Revuelto In The Dark Mode", image: image9},
        {id: 10, category: "Exterior", title: "Revielto On The Runway", image: image10},
        {id: 11, category: "Interior", title: "Digital Screens in The Cockpit", image: image11},
        {id: 12, category: "Life Styles", title: "One of The Biggest Celebrations", image: image12},
        
    ];

    const [filter, setFilter] = useState('All');

    // Filtering 
    const filterdImages = filter === 'All'
        ? images : images.filter((img) => img.category === filter);

    return(
        <>
        <NavBar toggleTheme={toggleTheme} currentTheme={theme}/>
        
        <SubHero 
            backgroundImage={backgroundImage}
            heading="Revuelto Gallery"
            paragraph="Explore the artistry, the innovation, and the adrenaline in stunning detail. The Revuelto comes alive through the lens."
            button="Download Media Kit"
            buttonPath="#download"/>

        <div id="exit" className="container-lg">
            <MainTopic title="Our Image Gallery"/>
            <Paragraphs paragraph="A masterpiece in every frame."/>
        
            <div className="gap-1 gap-md-2 gap-lg-2 gap-xl-2 mt-4 filter-container">
                <button onClick={() => setFilter('All')} className="gallery-filter-button">All</button>
                <button onClick={() => setFilter('Exterior')} className="gallery-filter-button">Exterior</button>
                <button onClick={() => setFilter('Interior')} className="gallery-filter-button">Interior</button>
                <button onClick={() => setFilter('Performance')} className="gallery-filter-button">Performance</button>
                <button onClick={() => setFilter('Details')} className="gallery-filter-button">Details</button>
                <button onClick={() => setFilter('Life Styles')} className="gallery-filter-button">Life Styles</button>
            </div>

            <div className="gallery-images-grid mt-4">
                {filterdImages.map((img) => (
                    <ImageCard key={img.id} image={img.image} title={img.title}/>
                ))}
            </div>
        </div>
        <div id="download" className="d-flex justify-content-center">
            <a href="/GalleryImages.zip" download>
                <button className="normal-button">Download Full Image Pack</button>
            </a>
        </div>

        <div className="container d-flex justify-content-center align-items-center">
        <div className="text-center d-flex justify-content-center mt-4 p-4 quote-animation" style={{ width: "100%", padding: "5px", backgroundImage: "linear-gradient(to bottom,rgb(0, 0, 0),rgb(4, 21, 97))", borderRadius: "20px", flexDirection: "column"}}>
            <div className="d-flex" style={{flexDirection: "row", fontFamily: "Arial, Inter, sans-serif", color: "white", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "rgb(241, 241, 241)",justifyContent: "center"}}>
                <Quote style={{transform: "rotate(180deg"}}/><h2 className="mx-3"> <strong>Every moment captured. Every angle perfected</strong> </h2><Quote/>
            </div>
        </div> 
        </div>

        <TheFooter/>
        </>
    );
}
export default GalleryPage;
