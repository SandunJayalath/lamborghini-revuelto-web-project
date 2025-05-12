import { useEffect, useRef, useState } from "react";

// Importing the Components
import NavBar from "../components/NavBar";
import MainTopic from '../components/MainTopic';
import Paragraphs from '../components/Paragraphs';
import KeyFeatureCard from '../components/KeyFeatureCard';
import NormalButton from "../components/NormalButton";
import ScrollJoinEffect from "../components/ScrollJoinEffect";
import MiniGalleryCard from "../components/MiniGalleryCard";
import TheFooter from "../components/TheFooter";

//  Importing the icons in used
import { SprayCan } from 'lucide-react';
import { Headset } from 'lucide-react';
import { PencilRuler } from 'lucide-react';

function Home () {

    // For the Header Image
    const backgroundImages = [
        "url('./src/assets/1.jpg')",
        "url('./src/assets/2.jpeg')",
        "url('./src/assets/3.jpeg')",
        "url('./src/assets/4.jpg')"
    ]

    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      }, 3000);
  
      return () => clearInterval(interval); 
    }, []);

    // For switching the themes

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    // For the Animations

    const domRef = useRef();
        const [isVisible, setIsVisible] = useState(false);
    
        useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setIsVisible(entry.isIntersecting));
            });
    
            observer.observe(domRef.current);
    
        return () => observer.disconnect();
        }, []);

        // Second Animation
        const domRef2 = useRef();
        const [isVisible2, setIsVisible2] = useState(false);
    
        useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setIsVisible2(entry.isIntersecting));
            });
    
            observer.observe(domRef2.current);
    
        return () => observer.disconnect();
        }, []);

        // Forth Animation
        const domRef3 = useRef();
        const [isVisible3, setIsVisible3] = useState(false);
    
        useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setIsVisible3(entry.isIntersecting));
            });
    
            observer.observe(domRef3.current);
    
        return () => observer.disconnect();
        }, []);


    return (
        <>
        <NavBar toggleTheme={toggleTheme} currentTheme={theme}/>
        
        <div id="hero" className="d-flex align-items-center" style={{flexDirection: "column", position: "relative",  backgroundImage: backgroundImages[index]}}>
            <div className="d-flex align-items-center gap-3" style={{flexDirection: "column", marginTop: "180px"}}>
                <h1>Lamborghini Revuelto</h1>
                <h3>Unleash the Future of Power.</h3>
                <div className="d-flex gap-4 mt-3 cta-buttons">
                    <a href="./GalleryPage">
                        <button>Check Gallery</button>
                    </a>
                    <a href="./DetailPage">
                        <button>Explore Features</button>
                    </a>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center hero-card-container" style={{position: "absolute", bottom: "40px"}}>
                <div ref={domRef} id="card" className={`from-left ${isVisible ? 'visible' : ''}`} style={{display: "flex", justifyContent: "center", textAlign: "center", fontWeight: "bold"}}>
                    <h4>⚡ Hybrid V12 Power</h4>
                    <h6>1001 HP from a new V12 + 3 electric motors. Instant torque meets classic Lambo roar.</h6>
                </div>
                <div ref={domRef} id="card" className={`from-right ${isVisible ? 'visible' : ''}`} style={{ display: "flex", justifyContent: "center", textAlign: "center", fontWeight: "bold"}}>
                    <h4>🛡️ Carbon Chassis</h4>
                    <h6>30% lighter, 25% stiffer. Race-grade carbon for sharper handling and speed.</h6>
                </div>
            </div>
        </div>

        <div className="container-lg">
            <MainTopic title="Key Features"/>
            <Paragraphs paragraph="Discover what makes the Revuelto a revolutionary supercar."/>
            
            <div className="row d-flex justify-content-center">
                
                <KeyFeatureCard
                    src="https://th.bing.com/th/id/OIP.iHg0t6EZUGiiZNLYtNpimwHaE8?rs=1&pid=ImgDetMain"
                    feature="Hybrid V12 Power"
                    description="1001 HP from V12 + 3 e-motors. Insane speed and response."
                    />
               
               <KeyFeatureCard
                    src="https://th.bing.com/th/id/OIP.H2EoDT40PREYJ1TZhYxqHgHaE8?rs=1&pid=ImgDetMain"
                    feature="Carbon Chassis"
                    description="30% lighter. Tracks like a jet with carbon monocoque."
                    />

                <KeyFeatureCard
                    src="https://th.bing.com/th/id/OIP.0aD4e1k5FX8QgjY_bInCxQHaE7?rs=1&pid=ImgDetMain"
                    feature="EV Drive Mode"
                    description="Fully electric option for city cruising."
                    />

                <KeyFeatureCard
                    src="https://th.bing.com/th/id/OIP.ZX5SMjsfq0Rl3AX9i8FVUwHaEK?rs=1&pid=ImgDetMain"
                    feature="0–100 km/h in 2.5s"
                    description="Brutal acceleration in mere seconds."
                    />

                <KeyFeatureCard
                    src="https://th.bing.com/th/id/OIP.u1DxFd3ELYJ8G5MVOJl_rwHaFj?rs=1&pid=ImgDetMain"
                    feature="Aerodynamic Design"
                    description="Active aero adapts in real time for better handling."
                    />

                <KeyFeatureCard
                    src="https://th.bing.com/th/id/OIP.EWk-v0s7249gPTQKKOA_zwHaEK?rs=1&pid=ImgDetMain"
                    feature="Futuristic Cockpit"
                    description="Digital displays + fighter-jet controls."
                    />
               
            </div>
        </div>

        <div className="container-fluid mt-3 mb-2 " style={{backgroundColor: "rgba(63, 61, 61, 0.16)", padding: "20px 0px"}}>
            <div className="container">
            <MainTopic title="Meet the Lamborghini Revuelto"/>
            <Paragraphs paragraph="Where iconic design meets electrified innovation."/>
            <hr />
            <div className="row d-flex justify-content-center" style={{marginTop: "40px", width: "100%"}}>
               
                <div ref={domRef2} className={`from-left ${isVisible2 ? 'visible' : ''} col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center`} id="image-next-texts" style={{position: "relative"}}>
                        <img src="./src/assets/transparent_Car.png" alt="" style={{width: "80%", height :"auto"}}/>
                    <span id="tooltip-section">
                        <a href="/DetailPage#customize-section"><div className="customize-icon" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"><PencilRuler className="pencil-icon"/></div></a>
                        <span id="tooltip-text">Customize your Revuelto</span>
                    </span>
                </div>
               
                <div ref={domRef3} className={`from-right ${isVisible3 ? 'visible' : ''} col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center`} style={{flexDirection :"column"}}>
                    <div>
                    <h4 style={{fontFamily: "Tilt Neon", color: "var(--paragraph-color)"}}>The Revuelto is Lamborghini’s leap into the electrified era a hybrid V12 beast with a carbon-fiber core, built for fierce, future-ready performance.</h4>
                    <hr />
                    <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                    <div className="fs-lg-1 fs-xl-1 fs-3" style={{fontFamily: "Inter , Montserrat", fontWeight: "600", textAlign: "left"}}>
                        <p>⚙️ 1001 HP Powertrain ✅</p>
                        <p>🧠 Active Aero Design ✅ </p>
                        <p>🛡️ Carbon-Fiber Core ✅ </p>
                    </div>
                    <div className="mt-4">
                        <NormalButton text="Discover The Power" path="./DetailPage"/>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>

        <div className="container-lg mb-1">
            <MainTopic title="Revuelto in Motion"/>
            <Paragraphs paragraph="Get a glimpse of power, precision, and presence."/>
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{justifyContent: "center", flexDirection: "row", maxWidth: "1300px", width: "100%"}}> 
        <div className="d-flex mb-5 p-2 gap-2 scrollable-container" style={{ display: "flex", justifyContent: "flex-start", overflowX: "auto", width: "100%", flex: "0 0 auto"}}>
            <MiniGalleryCard image="https://th.bing.com/th/id/OIP.H2EoDT40PREYJ1TZhYxqHgHaE8?rs=1&pid=ImgDetMain"
                label="Exterior"
                caption="Revuelto’s aerodynamic design in matte grey, sculpted for performance."
                paragraph="The Lamborghini Revuelto boasts a breathtaking exterior that perfectly blends aggressive aerodynamics with bold Italian artistry. Every angle of its sculpted body is designed for both beauty and performance — from the sharply contoured front fascia with its signature Y-shaped headlights, to the powerful, muscular lines that sweep back toward the aerodynamic rear. The carbon-fiber monocoque frame is not just lightweight but also visually striking, giving the Revuelto a futuristic, almost spacecraft-like presence on the road. With large air intakes, a dramatic rear diffuser, and an active rear wing, every detail serves a purpose, making the Revuelto as functional as it is mesmerizing. Finished with Lamborghini’s iconic palette of vivid colors and exposed carbon fiber elements, the Revuelto looks fast even when it’s standing still."/>
        
            <MiniGalleryCard image="https://th.bing.com/th/id/OIP.EWk-v0s7249gPTQKKOA_zwHaEK?rs=1&pid=ImgDetMain"
                label="Interior"
                caption="Fighter jet-inspired cockpit with digital cluster and carbon trim."
                paragraph="The interior of the Lamborghini Revuelto is a perfect fusion of futuristic design and race-inspired functionality. Stepping inside, you're greeted by a driver-focused cockpit featuring a striking Y-shaped dashboard, sculpted surfaces, and premium materials like carbon fiber, Alcantara, and fine leather. The layout is sleek and aggressive, with a fully digital 12.3-inch instrument cluster, a vertical 8.4-inch center touchscreen, and a 9.1-inch passenger display — creating a triple-screen experience that keeps both driver and passenger connected to the car’s heartbeat. Hexagonal patterns, ambient lighting, and customizable driving modes emphasize the Revuelto’s cutting-edge spirit, while deeply bolstered seats offer a perfect balance of luxury and support for high-performance driving."/>
            
            <MiniGalleryCard image="https://th.bing.com/th/id/OIP.tP7zK3H8grGR1EH3TFIyXQHaEK?rs=1&pid=ImgDetMain"
                label="Details"
                caption="Lamborghini’s hybrid V12 engine exposed beneath carbon slats."
                paragraph="The Lamborghini Revuelto marks a new era for the iconic brand, blending revolutionary design with electrifying performance. As Lamborghini's first High Performance Electrified Vehicle (HPEV), the Revuelto pairs a naturally aspirated 6.5-liter V12 engine with three electric motors, delivering a breathtaking combined output of over 1000 horsepower. This cutting-edge hybrid system not only boosts acceleration, launching the Revuelto from 0 to 100 km/h in just 2.5 seconds, but also enhances agility and efficiency. The design is a masterpiece of aerodynamics, featuring sharp lines, aggressive Y-shaped LED lighting, and a futuristic yet unmistakably Lamborghini silhouette. Inside, the cabin is a fusion of luxury and technology, offering a fully digital cockpit with a new 12.3-inch driver’s display, a central 8.4-inch touchscreen, and extensive customization options. Every detail of the Revuelto is crafted to deliver an intense, thrilling driving experience while setting a bold new standard for the future of supercars."/>
            
            <MiniGalleryCard image="https://images.hdqwalls.com/download/lamborghini-revuelto-5k-h2-1920x1200.jpg"
                label="Action Shot"
                caption="Revuelto cruising neon-lit streets — raw power in the dark."
                paragraph="The Lamborghini Revuelto marks a new era for the iconic brand, blending revolutionary design with electrifying performance. As Lamborghini's first High Performance Electrified Vehicle (HPEV), the Revuelto pairs a naturally aspirated 6.5-liter V12 engine with three electric motors, delivering a breathtaking combined output of over 1000 horsepower. This cutting-edge hybrid system not only boosts acceleration, launching the Revuelto from 0 to 100 km/h in just 2.5 seconds, but also enhances agility and efficiency. The design is a masterpiece of aerodynamics, featuring sharp lines, aggressive Y-shaped LED lighting, and a futuristic yet unmistakably Lamborghini silhouette. Inside, the cabin is a fusion of luxury and technology, offering a fully digital cockpit with a new 12.3-inch driver’s display, a central 8.4-inch touchscreen, and extensive customization options. Every detail of the Revuelto is crafted to deliver an intense, thrilling driving experience while setting a bold new standard for the future of supercars."/>
            
            <MiniGalleryCard image="https://cimg3.ibsrv.net/ibimg/hgm/1920x1080-1/100/885/lamborghini-revuelto_100885579.jpg"
                label="Suspensions"
                caption="Close-up of carbon ceramic brakes and forged alloy rims."
                paragraph="The Lamborghini Revuelto boasts a cutting-edge suspension system designed to provide exceptional handling and comfort. Featuring a fully independent suspension with double wishbones at both the front and rear, this system ensures precise control over the vehicle’s dynamics. The Revuelto is equipped with adaptive dampers that adjust in real-time to changing road conditions, offering a seamless balance between comfort and performance. The advanced suspension geometry ensures optimal contact with the road, even during aggressive cornering or high-speed maneuvers. This technology, combined with active anti-roll bars, minimizes body roll and enhances stability, allowing the driver to experience unparalleled confidence behind the wheel. The result is a driving experience that is both exhilarating and controlled, characteristic of Lamborghini's engineering excellence."/>
        
            <MiniGalleryCard image="https://robbreport.com/wp-content/uploads/2023/09/revuelto01.jpg?w=1000"
                label="Performance"
                caption="Captured mid-turn at high speed — precision and grip unleashed."
                paragraph="The Lamborghini Revuelto redefines performance with an electrifying fusion of raw power and cutting-edge innovation. Powered by a naturally aspirated 6.5-liter V12 engine paired with three electric motors, it delivers a staggering combined output of over 1,000 horsepower. This hybrid supercar launches from 0 to 100 km/h (0–62 mph) in just 2.5 seconds, achieving a top speed of more than 350 km/h (217 mph). Advanced aerodynamics, a lightweight carbon fiber chassis, and an all-wheel-drive system ensure razor-sharp handling and stability, while the sophisticated hybrid setup enhances both responsiveness and efficiency. The Revuelto marks a bold evolution of Lamborghini's DNA, offering an unparalleled driving experience that blends brutal speed with futuristic technology."/>

        </div>
        </div>
        <div className="text-center"><NormalButton text="View Our Gallery" path="./GalleryPage"/></div>

        <div className="container-fluid mt-3 mb-2 " style={{backgroundColor: "rgba(63, 61, 61, 0.16)", padding: "20px 0px"}}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6  d-flex justify-content-center align-items-center" id="image-next-texts" style={{flexDirection :"column"}}>
                    <MainTopic title="Ready to Drive the Revolution?"/>
                    <Paragraphs paragraph="Be the first to experience Lamborghini’s electrified legacy."/>
                    <div className="fs-lg-1 fs-xl-1 fs-3" style={{fontFamily: "Inter , Montserrat", fontWeight: "600", textAlign: "left"}}>
                        <p>🛞 Test Drive Availability ✅</p>
                        <p>📍 Nearest Dealer Locator ✅ </p>
                        <p>🕐 Coming Soon Badge ✅ </p>
                    </div>
                </div>              
                <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex gap-2 d-flex justify-content-center align-items-center">
                    <a className=" d-flex text-center" id="cta-anchor-tags" href="./DetailPage">
                        <SprayCan style={{width: "100px", height: "auto"}}/>
                        <h4 className="fs-lg-1 fs-xl-1 fs-6"><strong>Explore The Full Specs</strong></h4>
                    </a>
                    <div className="row" style={{width: "5px", height: "100px", backgroundColor: "rgb(63, 63, 63)"}}></div>
                    <a id="cta-anchor-tags" className="d-flex text-center" href="./ContactPage">
                        <Headset style={{width: "100px", height: "auto"}}/>
                        <h4 className="fs-lg-1  fs-6"><strong>Contact Us</strong></h4>
                    </a>
                </div>
            </div>
        </div>        
        </div>

        <TheFooter/>
        </>
    );
}
export default Home;
