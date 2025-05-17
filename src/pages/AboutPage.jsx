import { useEffect, useRef, useState } from "react";

// Importing the Components
import NavBar from "../components/NavBar";
import SubHero from "../components/SubHero";
import MainTopic from "../components/MainTopic"
import Paragraphs from "../components/Paragraphs"
import NormalButton from "../components/NormalButton";
import TeamCard from "../components/TeamCard";
import TheFooter from "../components/TheFooter"

// Importing the icons
import { BatteryCharging } from 'lucide-react';
import { CircuitBoard } from 'lucide-react';
import { AudioWaveform } from 'lucide-react';
import { Framer } from 'lucide-react';
import { Quote } from 'lucide-react';

//Importing the images
import backgroundImage from '../assets/3.jpeg';
import Alessio from '../assets/Alessio Romano.png';
import Mia from '../assets/Mia Tanaka.jpg';
import Leonardo from '../assets/Leonardo Bianchi.png';
import Amara from '../assets/Amara Collins.png';
import Luca from '../assets/Luca Ferrero.jpg';
import Sophia from '../assets/Sophia Riedel.jpg';

function AboutPage() {

    // For switching the themes

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <>
        <NavBar toggleTheme={toggleTheme} currentTheme={theme}/>
        
        <SubHero 
            backgroundImage={backgroundImage}
            heading="Crafted with Purpose. Designed for the Future."
            paragraph="Discover the story, vision, and legacy behind the Lamborghini Revuelto — where iconic design meets hybrid innovation."
            button="Explore Our Masterpiece"
            buttonPath="/DetailPage"/>

        <div className="container-lg mb-5 d-flex justify-content-center" style={{flexDirection: "column", alignItems: "center"}}>
            <MainTopic title="Our Legacy"/>
            <Paragraphs paragraph="Founded in 2025, inspired by Formula E performance, Italian design heritage."/>
            <hr />

        <div className="row ">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 ">
                <div className="d-flex justify-content-center align-items=center p-3 ps-5" id="descript-card" style={{flexDirection: "column", borderRadius: "10px",  fontFamily: "Arial, sans-serif"}}>
                    <p className="pt-2">✅ The Revuelto marks the birth of a new chapter — a bold evolution rooted in Lamborghini's relentless pursuit of excellence.</p>
                        <div style={{width: "100%", height: "2px", backgroundColor: "rgb(6, 73, 15)"}}></div>
                    <p className="pt-3">✅ Drawing inspiration from Formula E technologies, our hybrid V12 machine embodies the fusion of sustainable power and motorsport-grade engineering.</p>
                        <div style={{width: "100%", height: "2px", backgroundColor: "rgb(6, 73, 15)"}}></div>
                    <p className="pt-2">✅ From the heart of Italy, every curve and contour of the Revuelto is a tribute to timeless design and future-forward innovation.</p>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex gap-4 justify-content-center align-items-center mt-md-4 mt-sm-4 mt-4 mt-lg-0 images-below-descript" id="image-next-texts" style={{display: "flex", flexDirection: "column", justifycontent: "center"}}>
                <img src="https://th.bing.com/th/id/OIP.Ii4Qys6oKCfQ2LlDX9bbdAHaD4?rs=1&pid=ImgDetMain" alt=""/>
                <img src="https://th.bing.com/th/id/OIP.F2qLZnol9A_i6sVCFtsMHAHaEw?rs=1&pid=ImgDetMain" alt=""/>
            </div>
        </div>    
        <div className="text-center mt-1 mt-lg-5 mt-xl-5 d-flex justify-content-center" style={{fontFamily: "Arial, Inter, sans-serif", fontWeight: "400", width: "100%", backgroundColor: "rgb(0, 74, 212)", padding: "20px",  borderRadius: "20px", border: "2px solid rgb(1, 43, 90)", color: "white"}}>
                <h2> <strong>" We Don't Follow Legacy, We Create It "</strong> </h2>
            </div>    
        </div>

        <div className="container-fluid mt-3 mb-2 " style={{backgroundColor: "rgba(63, 61, 61, 0.16)", padding: "20px 0px"}}>
            <div className="container">
                <MainTopic title="Design Philosophy"/>
                <Paragraphs paragraph="Where craftsmanship meets technology, and innovation meets tradition."/>
                <Paragraphs paragraph="Every Lamborghini is a symphony of engineering excellence and emotional design. The Revuelto pushes the boundaries of what’s possible, combining sculptural beauty with futuristic performance."/>
            </div>

            <div className="container d-flex justify-content-center gap-4 text-centering-md" style={{flexDirection: "column", alignItems: "center"}}>
            
            <div className="row hover-get-larger" style={{backgroundImage: "linear-gradient(to right, rgb(0, 86, 214), rgb(126, 28, 218))", borderRadius: "20px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="col-12 col-md-12 col-lg-6 col-xl-4 align-items-center">
                    <img src="https://th.bing.com/th/id/OIP.u1DxFd3ELYJ8G5MVOJl_rwHaFj?rs=1&pid=ImgDetMain" alt="" style={{borderRadius: "20px", width: "100%", height: "auto", padding: "10px 0px"}}/>
                </div>

                <div className="col-12 col-md-12 col-lg-6 col-xl-8 pt-md-4" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{width: "100%", color: "white"}}>
                        <h1><strong>Aerodynamics</strong></h1>
                        <p style={{fontFamily: "Tilt Neon, Arial"}}>Every curve and line of the Revuelto is not just for show. Designed for maximum performance and airflow efficiency, its sculpted surfaces work in harmony with its hybrid powertrain.</p>
                    </div>
                </div>
            </div>

            <div className="row hover-get-larger" style={{backgroundImage: "linear-gradient(to right, rgb(0, 86, 214), rgb(126, 28, 218))", borderRadius: "20px", width: "100%"}}>
                <div className="col-12 col-md-12 col-lg-6 col-xl-8 pt-md-4 pt-4 pb-0" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{width: "100%", color: "white"}}>
                        <h1><strong>Material Innovation</strong></h1>
                        <p style={{fontFamily: "Tilt Neon, Arial"}}>From carbon fiber to aluminum alloy, the lightweight materials used in the Revuelto make it not only strong but agile — a perfect fusion of form and function.</p>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-6 col-xl-4 d-flex justify-content-center align-items-center">
                    <img src="https://th.bing.com/th/id/OIP.H2EoDT40PREYJ1TZhYxqHgHaE8?rs=1&pid=ImgDetMain" alt="" style={{borderRadius: "20px", width: "100%", height: "auto", padding: "10px 0px"}}/>
                </div>
            </div>

            <div className="row hover-get-larger" style={{backgroundImage: "linear-gradient(to right, rgb(0, 86, 214), rgb(126, 28, 218))", borderRadius: "20px", width: "100%"}}>
                <div className="col-12 col-md-12 col-lg-6 col-xl-4 d-flex justify-content-center align-items-center">
                    <img src="https://th.bing.com/th/id/OIP.EWk-v0s7249gPTQKKOA_zwHaEK?rs=1&pid=ImgDetMain" alt="" style={{borderRadius: "20px", width: "100%", height: "auto", padding: "10px 0px"}}/>
                </div>

                <div className="col-12 col-md-12 col-lg-6 col-xl-8  p-lg-5 pb-md-3 pb-3 pt-3 pt-md-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{width: "100%", color: "white"}}>
                        <h1><strong>Interior Design</strong></h1>
                        <p style={{fontFamily: "Tilt Neon, Arial"}}>Inside, the cockpit feels like a racing car — every element tailored for both comfort and control, creating an immersive driving experience.</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-center">
                <NormalButton text="Discover The Power" path="/Detailpage"/>
            </div>

            </div>
        </div>

        <div className="container-fluid mb-5">
            <div className="container">
                <MainTopic title="Technology & Innovation"/>
                <Paragraphs paragraph="Where advanced engineering meets relentless performance."/>
            
            <div className="grid-container">
                <div className="row d-flex">

                <div className="col-12 col-md-6 col-lg-3 col-xl-3">
                    <div className="d-flex justify-content-center align-items-center feature-card hover-get-larger">
                        <BatteryCharging className="feature-icon"/>
                        <h3><strong>Hybrid Electric Drivetrain</strong></h3>
                        <p>Unleashes 1000+ horsepower with zero lag — powered by a fusion of V12 and electric torque</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 mt-sm-3 mt-md-0 mt-3 mt-lg-0">
                    <div className="d-flex justify-content-center align-items-center feature-card hover-get-larger">
                        <CircuitBoard className="feature-icon"/>
                        <h3><strong>Track Mode Intelligence</strong></h3>
                        <p>Adapts real-time performance based on your inputs, surroundings, and driving style.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 mt-md-3 mt-sm-3 mt-3 mt-lg-0">
                    <div className="d-flex justify-content-center align-items-center feature-card hover-get-larger">
                        <AudioWaveform className="feature-icon"/>
                        <h3><strong>Adaptive Suspension</strong></h3>
                        <p>Smooth in the city. Aggressive on the track. Reacts in milliseconds to every terrain.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 col-xl-3 mt-md-3 mt-sm-3 mt-3 mt-lg-0">
                    <div className="d-flex justify-content-center align-items-center feature-card hover-get-larger">
                        <Framer className="feature-icon"/>
                        <h3><strong>Next-Gen Carbon Frame</strong></h3>
                        <p>Engineered from ultra-light carbon fiber for precision, rigidity, and speed.</p>
                    </div>
                </div>

            </div>
            </div>
            <div className="mt-4 text-center">
                <NormalButton text="Explore the Tech Specs" path="/DetailPage"/>
            </div>

            </div>
        </div>

        <div className="container-fluid mt-3 mb-2 " style={{backgroundColor: "rgba(63, 61, 61, 0.16)", padding: "20px 0px"}}>
            <div className="container">
                <MainTopic title="The Team Behind Revuelto"/>
                <Paragraphs paragraph="Crafted by minds that dare to redefine performance."/>
            
            <div className="d-flex align-items-center scrollable-container p-4" style={{width: "100%", overflowX: "auto", justifyContent: "flex-start", flex: "0 0 auto"}}>
                <TeamCard 
                    image={Alessio}
                    name="Alessio Romano"
                    role="Chief Design Officer"
                    bio="Visionary behind Revuelto’s aerodynamic silhouette and aggressive stance."
                    location=" Sant’Agata Bolognese, Italy"
                    badge="20+ years at Lamborghini"
                    linkedinLink=""/>

                <TeamCard 
                    image={Mia}
                    name="Mia Tanaka"
                    role="Lead AI Systems Engineer"
                    bio="Developed the adaptive AI that powers Revuelto’s intelligent Track Mode."
                    location="Tokyo, Japan"
                    badge=" Ex-Formula E race tech team"
                    linkedinLink=""/>
                
                <TeamCard 
                    image={Leonardo}
                    name="Leonardo Bianchi"
                    role="Hybrid Powertrain Architect"
                    bio="Engineered the seamless blend of electric torque and V12 combustion."
                    location="Milan, Italy"
                    badge="Head of drivetrain innovation"
                    linkedinLink=""/>

                <TeamCard 
                    image={Amara}
                    name="Amara Collins"
                    role="Carbon Materials Specialist"
                    bio=" Pioneered Revuelto’s carbon-fiber chassis for ultra-light performance."
                    location="Detroit, USA"
                    badge="Ph.D. in Aerospace Composites"
                    linkedinLink=""/>


                <TeamCard 
                    image={Luca}
                    name="Luca Ferrero"
                    role=" Interior UX Designer"
                    bio="Created the digital cockpit experience, merging beauty with performance data."
                    location="Florence, Italy"
                    badge="iF Design Award winner"
                    linkedinLink=""/>

                <TeamCard 
                    image={Sophia}
                    name="Sophia Riedel"
                    role="Suspension & Dynamics Engineer"
                    bio="Designed the adaptive suspension system for any road, any speed."
                    location="Munich, Germany"
                    badge="7 years in high-performance vehicle dynamics"
                    linkedinLink=""/>
            </div>

            <div className="text-center d-flex justify-content-center mt-4 p-4 quote-animation" style={{ padding: "5px", backgroundImage: "linear-gradient(to bottom,  #00ff6a, #fff000)", borderRadius: "20px", flexDirection: "column", alignItems: "center"}}>
                <div className="d-flex justify-content-center" style={{flexDirection: "row", fontFamily: "Arial, Inter, sans-serif", color: "black", textAlign: "center", width: "100%"}}>
                    <Quote style={{transform: "rotate(180deg"}}/><h2 className="text-center" style={{textAlign: "center", width: "100%"}}>Engineering brilliance isn’t built alone — it’s forged by a team of innovators</h2><Quote/>
                </div>
                <h6>— Revuelto Project Team</h6>
            </div>    
        </div>
        </div>

        <TheFooter/>
        </>
    );
}
export default AboutPage;
