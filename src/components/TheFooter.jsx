import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CircleX } from 'lucide-react';

// Importing The Social Media Icons
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';

// Importing the images
import logo from '../assets/main-logo.png';

function TheFooter () {

    const [isCookyPolicyBoxOpen, setIsCookyPolicyBoxOpen] = useState(false);
    const [isPrivacyBoxOpen, setIsPrivacyBoxOpen] = useState(false);
    const [isTermsBoxOpen, setIsTermBoxOpen] = useState(false);

    return (
        <>
        <div class="wave-top">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-opacity="1" d="M0,160L34.3,181.3C68.6,203,137,245,206,229.3C274.3,213,343,139,411,138.7C480,139,549,213,617,245.3C685.7,277,754,267,823,234.7C891.4,203,960,149,1029,128C1097.1,107,1166,117,1234,128C1302.9,139,1371,149,1406,154.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
        </div>
        <div className="cotnainer-fluid sticky-bottom-row pt-md-4 pb-md-4 pb-sm-4 pb-4 pb-lg-0 pb-xl-0" id="the-footer">
            <div className="container-lg d-flex justify-content-center align-items-center">
                <div className="row d-flex  justify-content-center align-items-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 d-flex justify-content-center align-items-center text-center mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-5" style={{flexDirection: "column"}}>
                    <Link className="" to="/" onClick={() => {navigate("/");}} style={{color: "white", textDecoration: "none", fontWeight: "bold"}}>
                        <img src={logo} width="100" height="auto" alt="Logo"/>
                        <h4 style={{textDecoration: "none", marginBottom: "20px"}}>Lamborghini Revuelto</h4>
                    </Link>
                    <p>The Lamborghini Revuelto is our boldest step into performance-driven electrification.</p>
                    </div>
                    <div className="col-4 col-sm-6 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center align-items-center mt-md-0 mt-5 mt-lg-0 mt-xl-0" style={{flexDirection: "column", textAlign: "left"}}>
                        <ul type="none" style={{textAlign: "left", margin: "0px"}}>
                            <h4><storng>Explore</storng></h4>
                            <li >
                                <Link className="footer-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li >
                                <Link className="footer-link" aria-current="page" to="/AboutPage">About</Link>
                            </li>
                            <li >
                                <Link className="footer-link" aria-current="page" to="/DetailPage">Car Details</Link>
                            </li>
                            <li >
                                <Link className="footer-link" aria-current="page" to="/GalleryPage">Gallery</Link>
                            </li>
                            <li >
                                <Link className="footer-link" aria-current="page" to="/ContactPage">Contact Us</Link>
                            </li>
                            <li >
                                <Link onClick={() => setIsTermBoxOpen(true)} className="footer-link" aria-current="page" style={{cursor: "pointer"}}>Terms and Condition</Link>
                            </li>
                        </ul>

                        {isTermsBoxOpen && (
                            <div className="policy-window">
                            <CircleX onClick={() => setIsTermBoxOpen(false)} className='close' style={{right: "30px"}}/>
                            <div className='policy-content term-condition-content' style={{paddingTop: "60px", paddingBottom:"60px"}}>
                                <h1>📜Terms and Conditions</h1>
                                <h6>Welcome to the Lamborghini Revuelto landing page. By accessing or using this website, you agree to be bound by the following Terms and Conditions:</h6>
                                <h5>1. Use of Website</h5>
                                    <p>This website is provided for informational and showcase purposes only. You may not use the content for any commercial purpose without explicit permission.</p>
                                
                                <h5>2. Intellectual Property Rights</h5>
                                    <p>All materials on this site, including logos, images, text, and designs, are either owned by or licensed to Lamborghini and are protected by intellectual property laws. Unauthorized use is prohibited.</p>
                                
                                <h5>3. User Conduct</h5>
                                <h6>You agree not to:</h6>
                                <ul>
                                    <li>Misuse the website by knowingly introducing viruses or other harmful material.</li>
                                    <li>Attempt to gain unauthorized access to the website or its server.</li>
                                </ul>

                                <h5>4. Accuracy of Information</h5>
                                    <p>While we strive to ensure all information is accurate and up-to-date, Lamborghini Revuelto makes no warranties about the completeness, reliability, or accuracy of the content provided.</p>
                                
                                <h5>5. External Links</h5>
                                    <p>This site may include links to external websites. We are not responsible for the content or practices of any linked sites.</p>

                                <h5>6. Limitation of Liability</h5>
                                    <p>Lamborghini Revuelto shall not be held liable for any direct, indirect, or consequential loss arising from the use of this website.</p>

                                <h5>7. Changes to Terms</h5>
                                    <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page and are effective immediately.</p>

                                <h5>Contact:</h5>
                                <h6>For questions regarding these Terms and Conditions, please contact us at terms@lamborghini.com.</h6>
                            </div>
                        </div>
                        )}

                    </div>

                    <div className="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center align-items-center  mt-lg-0 mt-xl-0 " style={{flexDirection: "column", textAlign: "left"}}>
                        <ul type="none" style={{textAlign: "left", margin: "0px"}}>
                            <h4><storng>Contact Us</storng></h4>
                            <li >
                                <p style={{fontFamily: "Arial, sans-serif"}} className="footer-link d-flex gap-2"><strong>Phone: </strong>+1 800-123-4567</p>
                            </li>
                            <li >
                                <p style={{fontFamily: "Arial, sans-serif"}} className="footer-link d-flex gap-2"><strong>Email:</strong> info@lamborghini.com</p>
                            </li>
                            <li >
                                <p className="footer-link d-flex gap-2" style={{lineHeight: "20px", fontFamily: "Arial, sans-serif"}}><strong>Address: </strong> Sant'Agata Bolognese, Italy</p>
                            </li>
                            <li >
                            <div className="d-flex gap-lg-4 gap-md-4 gap-1 justify-content-flex-start mt-3" style={{width: "100%"}}>
                                <Link to="" className='social-media-icons'>
                                    <Instagram size="30px" style={{color: "rgb(255, 255, 255)", margin: "10px"}}/>                            
                                </Link>
                                
                                <Link to="" className='social-media-icons'>
                                    <Twitter size="30px" style={{color: "rgb(255, 255, 255)", margin: "10px"}}/>
                                </Link>
                                
                                <Link to="" className='social-media-icons'>
                                    <Linkedin  size="30px" style={{color: "rgb(255, 255, 255)", margin: "10px"}}/>
                                </Link>
                                
                                <Link to="" className='social-media-icons'>
                                    <Facebook  size="30px" style={{color: "rgb(255, 255, 255)", margin: "10px"}}/>
                                </Link>
                            </div>  
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 d-flex  justify-content-center mt-5 mt-lg-0 mt-xl-0 mt-md-5 text-lg-center text-xl-center text-md-center text-sm-center" style={{flexDirection: "column"}}>
                        <ul type="none" style={{margin: "0px"}}>
                            <h5 style={{marginBottom: "9px"}}><storng>© 2025 Lamborghini S.p.A. All rights reserved.</storng></h5>
                            <li >
                                <Link onClick={() => setIsCookyPolicyBoxOpen(true)} className="footer-link" aria-current="page" path="/">Cookie Policy</Link>
                            </li>
                            <li >
                                <Link onClick={() => setIsPrivacyBoxOpen(true)} className="footer-link" aria-current="page" path="/">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Cookey Policy Content */}
        {isCookyPolicyBoxOpen && (
            <div className="policy-window">
                <CircleX onClick={() => setIsCookyPolicyBoxOpen(false)} className='close'/>
                <div className='policy-content' style={{paddingTop: "60px", paddingBottom:"60px"}}>
                    <h1>🍪 Cookie Policy</h1>
                    <h6>At Lamborghini Revuelto, we use cookies to enhance your browsing experience and deliver personalized content.</h6>
                    <h6>Cookies are small text files stored on your device that help us understand how you use our site, optimize performance, and provide tailored marketing communications.</h6>
                    <h5>Types of Cookies We Use:</h5>
                    <ul>
                        <li>Essential Cookies: Necessary for the operation of our website.</li>
                        <li>Performance Cookies: Help us analyze website traffic and usage.</li>
                        <li>Functional Cookies: Allow the site to remember your preferences.</li>
                        <li>Marketing Cookies: Deliver content tailored to your interests.</li>
                    </ul>
                    <h6>By continuing to use our website, you consent to our use of cookies in accordance with this policy. You can manage your cookie settings at any time through your browser preferences.</h6>
                    <h5>Learn more: For more information about cookies and how to manage them, please visit your browser’s help section.</h5>
                </div>
            </div>
        )}

        {/* Privacy Policy Content */}
        {isPrivacyBoxOpen && (
            <div className="policy-window" id="privacy-policy">
            <CircleX onClick={() => setIsPrivacyBoxOpen(false)} className='close'/>
            <div className='policy-content' style={{paddingTop: "60px", paddingBottom:"60px"}}>
                <h1>🔒 Privacy Policy</h1>
                <h6>At Lamborghini Revuelto, protecting your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website.</h6>
                <h5>Information We Collect:</h5>
                <ul>
                    <li>Personal Information: Name, Email, Phone Number (if you submit forms)</li>
                    <li>Browsing Data: IP address, browser type, and interaction data</li>
                </ul>
                <h5>How We Use Your Information:</h5>
                <ul>
                    <li>To improve your experience on our website</li>
                    <li>To send you marketing communications (only with your consent)</li>
                    <li>To respond to your inquiries and service requests</li>
                </ul>
                <h5>Your Rights:</h5>
                <ul>
                    <li>You can request access to, correction, or deletion of your personal data.</li>
                    <li>You can opt-out of marketing communications at any time.</li>
                </ul>
                <h6>We are committed to maintaining the highest standards of data protection and security.</h6>
                <h5>By using this website, you consent to the practices described in this Privacy Policy. Contact: If you have any questions, please contact us at <a href="" style={{textDecoration: "none"}}>privacy@lamborghini.com.</a></h5>
            </div>
        </div>
        )}

        </>
    );
}
export default TheFooter;