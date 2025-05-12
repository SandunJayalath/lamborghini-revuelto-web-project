import { CircleX } from 'lucide-react';
import { useState } from 'react';

function ReserveBox({closingFunction, submitFunction}) {

    // For the DropDown
    const[PreferDealer, setPreferDealer] = useState("Prefer Dealer")

    return (
        <>
         <div className="policy-window d-flex justify-content-center align-items-center" id="reserve-form">
                <CircleX onClick={closingFunction} className='close'/>
                <h1>Reserve Your Lamborghini Revuelto</h1>
                <h6>Experience the power of the future. Limited reservations available. Submit your details and a Lamborghini representative will contact you.</h6>
                <div className="row d-flex mt-4 mb-4">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <input className='reserving-inputs' type="text" placeholder="Enter Your Full Name" required/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-3 mt-md-0 mt-lg-0 mt-xl-0">
                        <input className='reserving-inputs' type="text" placeholder="Enter Your E-Mail Address" required/>
                    </div>
                     <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                        <input className='reserving-inputs' type="text" placeholder="Enter Your Phone Number" required/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                        <button className="dropdown-nav dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{PreferDealer}</button>
                        <ul className="dropdown-menu" style={{backgroundColor: "rgb(207, 207, 207)"}}>
                            <li><a className="dropdown-item" onClick={() => setPreferDealer("USA Dealers")}>USA Dealers</a></li>
                            <li><a className="dropdown-item" onClick={() => setPreferDealer("Dubai Dealers")}>Dubai Dealers</a></li>
                            <li><a className="dropdown-item" onClick={() => setPreferDealer("Australians Sealers")}>Australians Sealers</a></li>
                            <li><a className="dropdown-item" onClick={() => setPreferDealer("London Dealers")}>London Dealers</a></li>
                        </ul>
                    </div>
                        <div className="row mt-4 d-flex justify-content-center align-items-center">
                            <div className="col-12 col-md-8 col-lg-8 col-xl-8 d-flex justify-content-center align-items-center">
                                <h5 className='ms-3'>Select The Preferred Contact Method</h5>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/><div style={{fontSize: "15px", marginLeft: "10px"}}>E-Mail</div>
                                <input className="form-check-input ms-4" type="checkbox" value="" id="flexCheckDefault"/><div style={{fontSize: "15px", marginLeft: "10px"}}>Phone</div>
                            </div>
                        </div>
                    <div className="col-12 mt-4">
                        <textarea className='reserving-inputs' type="text" placeholder="Please schedule my test drive in Next Month..." style={{minWidth: "95%", minHeight: "200px", padding: "10px"}} />
                    </div>
                </div>
                <h6>We respect your privacy. Your contact information will only be used to fulfill your reservation request and will not be shared with any third parties.</h6>
                <button onClick={submitFunction} className='submit-button'>Submit</button>  
            </div>
        </>
    );
}
export default ReserveBox;
