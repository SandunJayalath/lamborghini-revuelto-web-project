import { useState, useEffect } from "react";

// Importing The Components
import NavBar from "../components/NavBar";
import SubHero from "../components/SubHero";
import MainTopic from "../components/MainTopic"
import Paragraphs from "../components/Paragraphs"
import TheFooter from  "../components/TheFooter"
import NormalButton from "../components/NormalButton";
import ReserveBox from "../components/ReserveBox";

// Importing The Icons
import { ChevronDown } from 'lucide-react';
import { Send } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { X } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

// Importing the images
import backgroundImage from '../assets/4.jpg';
import lamboLogo from '../assets/lambo-logo.png';

function ContactPage() {

    // For switching the themes

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    // Changing The Inquiry Type
    const [inquiryText, setInquiryText] = useState("Inquiry")

    // For the LightBox and The Reserving Box
    const [isReserveBoxOpen, setIsReserveBoxOpen] = useState(false)
    const [isCompletedBoxOpen, setIsCompletedBoxOpen] = useState(false)

    // For the sending messages area
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email && message) {
            setSent(true);
            setTimeout(() => {
                setSent(false);
            }, 4000);
            setError("");
            setName("");
            setEmail("");
            setMessage("");
        }
    }

    return (
        <>
        <NavBar toggleTheme={toggleTheme} currentTheme={theme} />

        <SubHero
            backgroundImage={backgroundImage}
            heading="Get in Touch with Us"
            paragraph="Have questions or ready to schedule a test drive? We’re here to assist you."
            button="Send Message" 
            buttonPath="#message"/>

        <div className="container-fluid">
            <div className="container-lg">
                <MainTopic title="Have Questions To Ask?" />
                <Paragraphs paragraph="Have questions or need assistance? We're here to help!" />

                <form onSubmit={handleSubmit}>
                <div id="message" className="messaging-container mb-4">

                    <div className="d-flex justify-content-center align-items-left pe-3" style={{ flexDirection: "column"}}>
                        <p style={{ fontSize: "40px", fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>FIll The Form</p>
                        <div style={{ width: "100%", height: "2px", backgroundColor: "rgba(116, 116, 116, 0.51)" }}></div>
                        
                            <input className="input-forms" placeholder="Enter The User Name" required type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                            <input className="input-forms" placeholder="Enter The E-Mail" type="text" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <div className="d-flex" style={{ width: "100%", position: "relative" }}>
                                <textarea className="input-forms" placeholder="Write your message here..." type="text" value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: "70%", minHeight: "140px", padding: "10px"}}/>
                                <div className="dropdown mt-4" style={{ position: "absolute", right: "0" }}>
                                    <button className="dropdown-btn inquiry-button">{inquiryText}<ChevronDown /></button>
                                    <div className="dropdown-content mt-1">
                                        <a onClick={() => setInquiryText("Sales")}>Sales</a>
                                        <a onClick={() => setInquiryText("Support")}>Support</a>
                                        <a onClick={() => setInquiryText("Media")}>Media</a>
                                        <a onClick={() => setInquiryText("Other")}>Other</a>
                                    </div>
                                </div>
                            </div>
                       
                        {sent && 
                        <>
                        <div className="sent-message">
                            <hr/>
                            <div id="icon">✅</div>
                            <h2>Message sent!</h2>
                            <p>Thank you for reaching out. We'll get back to you shortly.</p>
                            <hr />
                        </div>
                        </>}
                        {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

                    </div>

                    <div className="d-flex justify-content-center align-items-center ps-0 ps-md-4 ps-lg-4 ps-xl-4 gap-3 mt-sm-4 mt-4 mt-md-0 mt-lg-0 mt-xl-0" style={{ flexDirection: "column" }}>
                        <h4 style={{ fontFamily: "Tilt Neon", color: "var(--paragraph-color)" }}>Make sure that, all the information that you have given are correct before sending. We will give a reply soon</h4>
                        <button type="submit" className="sending-button">Send The Message<Send style={{ marginLeft: "6px", width: "30px" }} /></button>
                    </div>
                </div>
                 </form>

            </div>
        </div>

        <div className="container-fluid mt-3 mb-2 " style={{ backgroundColor: "rgba(63, 61, 61, 0.16)", padding: "20px 0px" }}>
            <div className="container">
                <MainTopic title="Prefer To Reach Us Directly?" />

                <div className="row d-flex gap-3 gap-lg-0 gap-xl-0" style={{ justifyContent: "center" }}>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 info-card" style={{ textAlign: "center", padding: "10px", borderRadius: "10px" }}>
                        <h4 style={{ color: "rgb(240, 96, 0)", fontWeight: "bold" }}>Phone Numbers</h4>
                        <hr />
                        <h5>+94-25987348 / +45-930487023</h5>
                    </div>

                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 info-card" style={{ textAlign: "center", padding: "10px", borderRadius: "10px" }}>
                        <h4 style={{ color: "rgb(240, 96, 0)", fontWeight: "bold" }}>Address</h4>
                        <hr />
                        <h5>📍 Sant'Agata Bolognese, Italy</h5>
                    </div>

                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 info-card" style={{ textAlign: "center", padding: "10px", borderRadius: "10px" }}>
                        <h4 style={{ color: "rgb(240, 96, 0)", fontWeight: "bold" }}>E-Mail</h4>
                        <hr />
                        <h5>lamboRevuelto2024@gmail.com</h5>
                    </div>
                </div>

                <div className="row d-flex justify-content-center mt-5" style={{ width: "100%", textAlign: "center" }}>
                    <h4 style={{ color: "var(--text-color)", fontWeight: "bold" }}>Social Media Links</h4>
                    <hr />
                    <div className="d-flex justify-content-center gap-4 gap-lg-5 gap-md-5">
                    <a href="" className="social-media-icons">
                        <Instagram size="35px" style={{color: "rgb(247, 31, 175)", margin: "10px"}}/>                            
                    </a>
                    <div style={{width: "3px", height: "50px", backgroundColor: "rgba(65, 65, 65, 0.61)"}}></div>
                    
                    <a href="" className="social-media-icons">
                        <Twitter size="35px" style={{color: "rgb(13, 163, 233)", margin: "10px"}}/>
                    </a>
                    <div style={{width: "3px", height: "50px", backgroundColor: "rgba(65, 65, 65, 0.61)"}}></div>
                    
                    <a href="" className="social-media-icons">
                        <Linkedin  size="35px" style={{color: "rgb(0, 37, 245)", margin: "10px"}}/>
                    </a>
                    <div style={{width: "3px", height: "50px", backgroundColor: "rgba(65, 65, 65, 0.61)"}}></div>
                    
                    <a href="" className="social-media-icons">
                        <Facebook  size="35px" style={{color: "rgb(31, 100, 247)", margin: "10px"}}/>
                    </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-lg">
            <MainTopic title="Thank You for Reaching Out!"/>
            <Paragraphs paragraph="We have received your message and will get back to you shortly."/>
        
            <div className="row d-flex justify-content-center mt-5 mb-5">
                <div className="col-12 col-ld-6 col-lg-6 col-xl-6 d-flex align-items-center justify-content-center lambo-logo">
                    <h1>✅</h1>
                    <img src={lamboLogo} alt=""/>
                </div>
                <div className="col-12 col-ld-6 col-lg-6 col-xl-6 ps-5 pe-5 d-flex justify-content-center align-items-start gap-4 mt-md-4 mt-sm-4 mt-4 mt-lg-0 mt-xl-0" style={{flexDirection: "column"}}>
                    <h3 className="topic" style={{margin: "0px", fontFamily: "Montserrat", fontWeight: "bold", fontSize: "25px", color: "var(--text-color)", textAlign: "center"}}>Ready to Ignite the Road?</h3>
                    <h4 style={{fontSize: "19px"}}>Be part of an elite few to experience the next chapter of supercar evolution. Submit a reservation now and we’ll get in touch to discuss the details.</h4>
                    <button onClick={() => setIsReserveBoxOpen(true)} className='rserve-button' style={{width: "200px", height: "50px"}}>Reserve Now</button>
                </div>
            </div>
        </div>
        <div className="row" style={{flexDirection: "column", width: "100%", alignItems: "center", textAlign: "center"}}>
            <h4 style={{fontFamily: "Tilt Neon", color: "var(--paragraph-color)"}}>In the meantime, feel free to explore more about the Lamborghini Revuelto.</h4>
            <NormalButton text="Discover More" path="/DetailPage"/>
        </div>

        {/* For the Reserving Box and The Message*/}
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
        <TheFooter/>
        </>
    );
}
export default ContactPage;
