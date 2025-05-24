import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importing The Components
import NavBar from "../components/NavBar";
import SubHero from "../components/SubHero";
import MainTopic from '../components/MainTopic';
import Paragraphs from '../components/Paragraphs';
import PerfomanceCard from '../components/PerfomanceCard';
import NormalButton from '../components/NormalButton';
import { DropDown, DropList } from '../components/DropDownComponent';
import TheFooter from '../components/TheFooter';

//  Importing the icons in used
import { Archive, CircleGauge, SprayCan } from 'lucide-react';
import { Zap } from 'lucide-react';
import { BatteryCharging } from 'lucide-react';
import { RefreshCw } from 'lucide-react';
import { Cog } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Quote } from 'lucide-react';

// Importing the images
import lamborghiniOrange from '../assets/Colors Changed Images/lamborghiniOrange.png'
import neonGreen from '../assets/Colors Changed Images/neonGreen.png'
import electricGreen from '../assets/Colors Changed Images/electricGreen.png'
import signatureYellow from '../assets/Colors Changed Images/signatureYellow.png'
import skyBlue from '../assets/Colors Changed Images/skyBlue.png'
import tealBlue from '../assets/Colors Changed Images/tealBlue.png'
import pearlPurple from '../assets/Colors Changed Images/pearlPurple.png'
import glossyWhite from '../assets/Colors Changed Images/glossyWhite.png'
import darkGray from '../assets/Colors Changed Images/darkGray.png'
import lamborghiniBlack from '../assets/Colors Changed Images/lamborghiniBlack.png'
import brightRed from '../assets/Colors Changed Images/brightRed.png'
import babyBlue from '../assets/Colors Changed Images/babyBlue.png'
import Altanero from '../assets/Colors Changed Images/Altanero.jpg'
import Venacio from '../assets/Colors Changed Images/Venacio.jpg'
import suedeInterior from '../assets/Colors Changed Images/suedeInterior.jpg'
import leatherInterior from '../assets/Colors Changed Images/leatherInterior.jpg'
import carbonInterior from '../assets/Colors Changed Images/carbonInterior.jpg'

// Importing the images
import backgroundImage from '../assets/2.jpeg';

function DetailPage () {

    // For switching the themes

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    const domRef = useRef();
        const [isVisible, setIsVisible] = useState(false);
    
        useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setIsVisible(entry.isIntersecting));
            });
    
            observer.observe(domRef.current);
    
        return () => observer.disconnect();
        }, []);

    // Image Changing Section

    const [selectedCar, setSelectedCar] = useState(lamborghiniOrange);
    const [loading, setLoading] = useState(false);

    const handelColorChange = (src) => {
        if (src === selectedCar) return;
        setLoading(true);
        setSelectedCar(src);
    };

    const handleImageLoaded =() => {
        setLoading(false);
    };

     // Scrolling section for the driving modes
     const containerRef = useRef(null)

     const handleScroll = () => {
         if (containerRef.current) {
             containerRef.current.scrollBy({
                 top: 150,
                 behavior: 'smooth'
             })
         }
     }

    // Getting Scrolled to the Customization Page

    const location = useLocation();
    
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
        }
    }, [location]);

    // Changing The Rim Types Texts
    const [rimText, setRimText] = useState("Rims")

    // Creating The Interior Texts
    const [intrText, setIntrText] = useState("Interior")

    // For the tab container (Driving Modes container)
    const tabs = [
        {id: "tab1", drivingMode: 'STRADA Mode', content: 'Strada mode offers a comfortable, relaxed drive with softened suspension and a calm throttle response — perfect for everyday journeys without losing Lamborghini’s edge.'},
        {id: "tab2", drivingMode: 'SPORT Mode', content: 'In Sport mode, the Revuelto sharpens up. Faster shifts, a louder exhaust, and a more playful chassis make every drive thrilling and full of character.'},
        {id: "tab3", drivingMode: 'CORSA Mode', content: 'Corsa mode unlocks maximum performance. With precise handling and full manual control, it’s built for the track and those who demand pure adrenaline.'},
        {id: "tab4", drivingMode: 'RECHARGE Mode', content: 'Recharge mode optimizes energy recovery, recharging the hybrid system while delivering a smooth, efficient drive through city streets or cool-down laps.'},
    ]

    const [activeTab, setActiveTab] = useState('tab1');
    const currentTab = tabs.find(tab => tab.id === activeTab);

    return (
        <>
        <NavBar toggleTheme={toggleTheme} currentTheme={theme}/>
        
        <SubHero 
            backgroundImage={backgroundImage}
            heading="Unleash the Power of Precision"
            paragraph="Experience the perfect blend of performance, design, and innovation. Dive into the details of your dream ride — crafted to turn heads and built to dominate every road."
            button="Explore Our Legacy"
            buttonPath="/AboutPage"/>
        
        <div className="container-lg mt-5 mb-5">        
        <div className='performance-grid-container'>
            <div className='d-flex justify-content-center justify-content-lg-flex-end' style={{flexDirection: "column", height: "100%", alignItems: "center"}}>
                <p className='fs-1' style={{fontFamily: "Inter , Montserrat", fontWeight: "600", textAlign: "center"}}>Performance Stats</p>
                <h4 style={{fontFamily: "Tilt Neon", color: "var(--paragraph-color)"}}>Raw numbers. Pure adrenaline.</h4>
                
                <div id="speedometer-icon">
                    <div id="speed-line"></div>
                    <div className="needle"></div>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center' style={{flexDirection: "column"}}>
                <PerfomanceCard
                    icon={<CircleGauge className='perfomance-icon'/>}
                    label="Top Speed"
                    value="350+ km/h"
                    subText="Electronically limited"/>

                <PerfomanceCard
                    icon={<Zap className='perfomance-icon'/>}
                    label="0–100 km/h"
                    value="2.5 seconds"
                    subText="In Launch Control mode"/>

                <PerfomanceCard
                    icon={<BatteryCharging className='perfomance-icon'/>}
                    label="	Electric Range"
                    value="30 km (EV mode)"
                    subText="Pure electric (city cycle)"/>

                <PerfomanceCard
                    icon={<RefreshCw className='perfomance-icon'/>}
                    label="The Torque"
                    value="725 Nm"
                    subText="Instant torque delivery"/>

                <PerfomanceCard
                    icon={<Cog className='perfomance-icon'/>}
                    label="Drivetrain"
                    value="AWD Hybrid V12"
                    subText="AI-assisted power split"/>
            </div>
        </div>
        </div>

        <div id="customize-section" className="container-fluid" style={{backgroundColor: "rgba(63, 61, 61, 0.16)", padding: "20px 0px"}}>
            <div className="container-fluid" style={{maxWidth: "1700px"}}>
                <MainTopic title="Configurator Preview"/>
                <Paragraphs paragraph="Personalize your Revuelto — color, rims, interior"/>

            <div className="container d-flex justify-content-center" style={{maxWidth: "1400px"}}>
            <div className="row d-flex justify-content-center" style={{marginTop: "40px", width: "100%"}}>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex align-items-center justify-content-center">
                    <div className="image-wrapper d-flex align-items-center justify-content-center" id="color-changing-image">
                    {loading && (
                        <div className="loader">
                            <div className="spinner"></div>
                        </div>
                    )}
                        <img src={selectedCar} alt="" className={`car-image ${loading ? "hidden" : "fade-in"}`} style={{width: "100%", height :"auto"}} onLoad={handleImageLoaded}/>
                    </div>
               </div>

               <div className="col-12 col-md-12 col-lg-6 col-xl-6  d-flex justify-content-center align-items-center" style={{flexDirection :"column"}}>
                <div style={{fontFamily: "Inter , Montserrat, sans-serif", fontWeight: "600", fontSize: "30px", textAlign: "center"}}>
                    <p>Craft Your Perfect Revuelto</p>
                </div>
                        
                <div className='mb-3' style={{width: "80%", height: "2px", backgroundColor: "rgb(155, 153, 153)"}}></div>
                <div className='d-flex justify-content-center' style={{width: "100%"}}>
                <div className="d-flex gap-1 gap-lg-2 gap-xl-2 gap-md-2 gap-sm-1 justify-content-center align-items-center mb-5 mt-3 color-circles-container">
                    <div onClick={() => handelColorChange(lamborghiniOrange)} className='color-circles' style={{backgroundColor: " #FF5C00"}}></div>
                    <div onClick={() => handelColorChange(neonGreen)} className='color-circles' style={{backgroundColor: " #00FF00"}}></div>
                    <div onClick={() => handelColorChange(electricGreen)} className='color-circles' style={{backgroundColor: " #6DF52E"}}></div>
                    <div onClick={() => handelColorChange(signatureYellow)} className='color-circles' style={{backgroundColor: "#FFD700"}}></div>
                    <div onClick={() => handelColorChange(skyBlue)} className='color-circles' style={{backgroundColor: "#3A5BA0"}}></div>
                    <div onClick={() => handelColorChange(tealBlue)} className='color-circles' style={{backgroundColor: "#008CBA"}}></div>
                    <div onClick={() => handelColorChange(pearlPurple)} className='color-circles' style={{backgroundColor: "#800080"}}></div>
                    <div onClick={() => handelColorChange(glossyWhite)} className='color-circles' style={{backgroundColor: "#F2F2F2"}}></div>
                    <div onClick={() => handelColorChange(darkGray)} className='color-circles' style={{backgroundColor: "#4B4B4B"}}></div>
                    <div onClick={() => handelColorChange(lamborghiniBlack)} className='color-circles' style={{backgroundColor: "#1A1A1A"}}></div>
                    <div onClick={() => handelColorChange(brightRed)} className='color-circles' style={{backgroundColor: "#FF0000"}}></div>
                    <div onClick={() => handelColorChange(babyBlue)} className='color-circles' style={{backgroundColor: "#8FD8F8"}}></div>
                </div>
                </div>
                   
                <div style={{display: "flex", gap: "30px", flexDirection: "row", width: "100%", justifyContent: "center"}}>

                    <div className="dropdown">
                        <button className="dropdown-btn">{rimText}<ChevronDown/></button>
                    <div className="dropdown-content">
                        <a onClick={() => {
                            handelColorChange(Altanero);
                            setRimText("Altanero");}}>Altanero</a>
                        
                        <a onClick={() => {
                            handelColorChange(Venacio);
                            setRimText("Venacio")}}>Venacio</a>
                    </div>
                    </div> 

                    <div className="dropdown">
                        <button className="dropdown-btn">{intrText}<ChevronDown/></button>
                    <div className="dropdown-content">
                        <a onClick={() => {
                            handelColorChange(suedeInterior);
                            setIntrText("Suede") }}>Suede</a>
                        <a onClick={() =>{ 
                            handelColorChange(leatherInterior);
                            setIntrText("Leather")}}>Leather</a>
                        <a onClick={() => {
                            handelColorChange(carbonInterior);
                            setIntrText("Exposed Carbon")}}>Exposed Carbon</a>
                    </div>
                    </div>

                    </div>
               </div>
               </div>
               </div>
               </div>
        </div>

        <div className="container-fluid m-0">
            <div className="container-lg p-0 m-o">
                <MainTopic title="Interior Highlights"/>
                <Paragraphs paragraph="Where performance meets precision and luxury."/>
            </div>
            <div className="container-lg d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
                <div className='d-flex justify-content-center interior-image' style={{ borderRadius: "10px", backgroundImage: "url(https://premiergt.com/images/36/1/16801932666425b6f2174e1_new-lamborghini-revuelto-cabin.jpeg)", backgroundSize: "cover", backgroundPosition: "center", position: "relative"}}>
                        
                    <div className="d-flex gap-0 gap-lg-5 gap-md-3 justify-content-center" style={{position: "absolute", bottom: "30px", width: "100%"}}>
                        <div ref={domRef} id="interior-tag" className={`from-left ${isVisible ? 'visible' : ''}`} style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", fontWeight: "bold"}}>
                            <h4><strong>Driver Focused</strong></h4>
                        </div>
                        <div id="interior-tag" className='middle-interior-tag' style={{display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", fontWeight: "bold"}}>
                            <h4><strong>Carbon Fiber Design</strong></h4>
                        </div>
                        <div ref={domRef} id="interior-tag" className={`from-right ${isVisible ? 'visible' : ''}`} style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", fontWeight: "bold"}}>
                            <h4><strong>Digital Cockpit</strong></h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-lg mt-4">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-4 col-lg-2 col-xl-2">
                    <div id="feature-interior-card" className="d-flex justify-content-center" style={{flexDirection: "column", alignItems: "center", borderRadius: "10px"}}>
                        <h5> Steering Wheel</h5>
                        <h6>Flat-bottom with carbon fiber inserts & paddle shifters</h6>
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-2 col-xl-2">
                    <div id="feature-interior-card" className="d-flex justify-content-center" style={{flexDirection: "column", alignItems: "center", borderRadius: "10px"}}>
                        <h5>Digital Cockpit</h5>
                        <h6>12.3” fully digital cluster with performance modes</h6>
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-2 col-xl-2">
                    <div id="feature-interior-card" className="d-flex justify-content-center" style={{flexDirection: "column", alignItems: "center", borderRadius: "10px"}}>
                        <h5>  Center Console</h5>
                        <h6>Touch-enabled controls, drive mode selector</h6>
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-2 col-xl-2">
                    <div id="feature-interior-card" className="d-flex justify-content-center" style={{flexDirection: "column", alignItems: "center", borderRadius: "10px"}}>
                        <h5>Sports Seats</h5>
                        <h6>Alcantara racing seats with contrast stitching</h6>
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-2 col-xl-2">
                    <div id="feature-interior-card" className="d-flex justify-content-center" style={{flexDirection: "column", alignItems: "center", borderRadius: "10px"}}>
                        <h5> Ambient Lighting</h5>
                        <h6>Adaptive RGB lighting with mood presets</h6>
                    </div>
                </div>
                
            </div>
            </div>
        </div>

        <div className="cotnainer-fluid mt-3"  style={{backgroundColor: "rgba(63, 61, 61, 0.16)", padding: "10px 0px"}}>
            <div className="container-lg">
                <MainTopic title="Tech & Infotainment"/>
                <Paragraphs paragraph="Smart. Seamless. Supercar-ready."/>
            </div>
            <hr />

            <div className="container">
            <div className="row d-flex justify-content-center" style={{marginTop: "40px", width: "100%"}}>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6  d-flex justify-content-center align-items-center" style={{flexDirection :"column"}}>
                    <div>
                    <h4 style={{fontFamily: "Tilt Neon", color: "var(--paragraph-color)"}}>Command center meets cockpit. Every pixel engineered for performance and precision.</h4>
                    <hr />
                    <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                    <div style={{fontFamily: "Inter , Montserrat", fontWeight: "600", fontSize: "20px", textAlign: "left"}}>
                        <p>8.4” HD Touchscreen interface ✅</p>
                        <p>Multi-touch gesture controls ✅ </p>
                        <p>Real-time vehicle telemetrye ✅ </p>
                        <p>Wireless Apple CarPlay & Android Auto ✅ </p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center ms-4 ms-md-0 ms-lg-0 ms-xl-0 dashboard-image-changer" id="image-next-texts">
                    
                </div>
            </div>

            <div className=" d-flex mt-1 scrollable-container" style={{width: "100%", overflowX: "auto", justifyContent: "flex-start", flex: "0 0 auto", padding: "10px"}}>
                <div id="tech-card" className="d-flex justify-content-center" style={{flexDirection: "column", alignItems: "center", borderRadius: "10px"}}>
                    <img src="https://th.bing.com/th/id/OIP.8FnfGd3NrNSha6H4b7tjFAHaEK?rs=1&pid=ImgDetMain" alt="" style={{width: "100%", marginBottom: "8px", borderRadius: "9px"}}/>
                    <h5 className='m-3'>HD Touchscreen</h5>
                    <h6>Central 8.4” display with intuitive UI</h6>
                </div>
            
                <div id="tech-card" className="d-flex justify-content-center" style={{flexDirection: "column", alignItems: "center", borderRadius: "10px"}}>
                    <img src="https://th.bing.com/th/id/OIP.jPURenA71pe8BMy6BViZtAHaE8?rs=1&pid=ImgDetMain" alt="" style={{width: "100%", marginBottom: "8px", borderRadius: "9px"}}/>
                    <h5 className='m-3'> Sound System</h5>
                    <h6>Lamborghini Audio Lab surround system</h6>
                </div>
            
                <div id="tech-card" className="d-flex justify-content-center" style={{flexDirection: "column", alignItems: "center", borderRadius: "10px"}}>
                    <img src="https://media.zigcdn.com/media/model/2023/Mar/full-dashboard-center-503851838_930x620.jpg" alt="" style={{width: "100%", marginBottom: "8px", borderRadius: "9px"}}/>
                    <h5 className='m-3'> Heads-Up Display</h5>
                    <h6>Real-time HUD with speed, nav & rpm</h6>
                </div>
            
                <div id="tech-card" className="d-flex justify-content-center" style={{flexDirection: "column", alignItems: "center", borderRadius: "10px"}}>
                    <img src="https://www.topgear.com/sites/default/files/2024/05/3-Lamborghini-Revuelto-review-UK-2024.jpg?w=1784&h=1004" alt="" style={{width: "100%", marginBottom: "8px", borderRadius: "9px"}}/>
                    <h5 className='m-3'>Drive Modes</h5>
                    <h6>Strada, Sport, Corsa & EV-only mode with AI tuning</h6>
                </div>
            </div>
            </div>

        <div className="container mt-5">
            <MainTopic title="Check Out Various Driving Modes"/>
        
        <div className="row  tab-container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className="col-12 col-md-4 col-lg-4 col-xl-4  tab-buttons">
                {tabs.map(tab => (
                    <button 
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? `active` : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >{tab.drivingMode}</button>
                ))}
            </div>

            <div className="col-12 col-md-8 col-lg-8 col-xl-8 gear-container">
                <h2>{currentTab.drivingMode}</h2>
                <p>{currentTab.content}</p>
            </div>
        </div>

        </div>

        <div className="mt-4 text-center">
            <NormalButton text="Learn How It Is Made" path="/AboutPage"/>
        </div>

        <div className="container d-flex justify-content-center align-items-center">
        <div className="text-center d-flex justify-content-center mt-4 p-4 quote-animation" style={{ width: "100%", padding: "5px", backgroundImage: "linear-gradient(to bottom,rgb(0, 0, 0),rgb(4, 21, 97))", borderRadius: "20px", flexDirection: "column"}}>
            <div className="d-flex" style={{flexDirection: "row", fontFamily: "Arial, Inter, sans-serif", color: "white", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "rgb(241, 241, 241)",justifyContent: "center"}}>
                <Quote style={{transform: "rotate(180deg"}}/><h2 className="mx-3"> <strong>Tailor your thrill. Explore how each mode transforms the ride.</strong> </h2><Quote/>
            </div>
        </div> 
        </div>
        </div>

        <TheFooter/>
        </>
    );
}
export default DetailPage;

