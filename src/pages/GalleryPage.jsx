import { useEffect, useState, useRef } from "react";

// Importing the Components
import NavBar from "../components/NavBar"
import SubHero from "../components/SubHero";;
import MainTopic from "../components/MainTopic";
import Paragraphs from "../components/Paragraphs";
import ImageCard from "../components/ImageCard";
import NormalButton from "../components/NormalButton";
import TheFooter from "../components/TheFooter";

import { Quote } from 'lucide-react';

function GalleryPage () {

    const [theme, setTheme] = useState('light')

    const images = [
        {id: 1, category: "Exterior", title: "lamborghini Rvuelto driving through", image: "./src/assets/Gallery Images/Image1.jpg"},
        {id: 2, category: "Interior", title: "Awesome Driving Experience", image: "./src/assets/Gallery Images/Image2.jpg"},
        {id: 3, category: "Life Styles", title: "Feeling The Luxuryness", image: "./src/assets/Gallery Images/Image3.jpg"},
        {id: 4, category: "Performance", title: "Feel the Real Power of a Bull", image: "./src/assets/Gallery Images/Image4.jpeg"},
        {id: 5, category: "Performance", title: "Awesome Suspensions and more", image: "./src/assets/Gallery Images/Image5.jpeg"},
        {id: 6, category: "Interior", title: "Feel the Comfort and the Power", image: "./src/assets/Gallery Images/Image6.jpeg"},
        {id: 7, category: "Details", title: "Feel The Real Neons", image: "./src/assets/Gallery Images/Image7.jpeg"},
        {id: 8, category: "Interior", title: "Interior Cockpit, Feel Like a Pilot", image: "./src/assets/Gallery Images/Image8.png"},
        {id: 9, category: "Life Styles", title: "Black Revuelto In The Dark Mode", image: "./src/assets/Gallery Images/Image9.jpg"},
        {id: 10, category: "Exterior", title: "Revielto On The Runway", image: "./src/assets/Gallery Images/Image10.jpg"},
        {id: 11, category: "Interior", title: "Digital Screens in The Cockpit", image: "./src/assets/Gallery Images/Image11.png"},
        {id: 12, category: "Life Styles", title: "One of The Biggest Celebrations", image: "./src/assets/Gallery Images/Image12.jpg"},
        
    ];

    const [filter, setFilter] = useState('All');

    // Filtering 
    const filterdImages = filter === 'All'
        ? images : images.filter((img) => img.category === filter);

    useEffect (() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return(
        <>
        <NavBar toggleTheme={toggleTheme} currentTheme={theme}/>
        
        <SubHero 
            backgroundImage="./src/assets/background-image.jpg"
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
            <a href="./src/assets/GalleryImages.zip" download>
                <NormalButton text="Download Full Image Pack"/>
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
