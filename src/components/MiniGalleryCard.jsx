import { useState } from 'react'
import NormalButton from "./NormalButton";
import { CircleX } from 'lucide-react';
import { Images } from 'lucide-react';

function MiniGalleryCard (props) {

    const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

    return(
        <>
        <div id="mini-gallery-card" className="d-flex justify-content-center align-items-start p-3 key-feature-card" style={{maxWidth: "300px", minWidth: "300px"}}>
                <div className="d-flex justify-content-center align-items-center" style={{height: "150px"}}>
                    <img src={props.image} alt="" className="key-feature-image"/>
                </div>
                <div className=" pt-4 text-left d-flex gap-3 mini-gallery-body" style={{flexDirection: "column", justifyContent: "center", color: "black"}}>
                    <h4><strong>{props.label}</strong></h4>
                    <h6>{props.caption}</h6>
                </div>
                <button className="normal-button" onClick={() => setIsLightBoxOpen(true)}>View More</button>
        </div>

        {isLightBoxOpen && (
             <div id="lightbox" className="view-more-box">
             <button onClick={() => setIsLightBoxOpen(false)}><CircleX className='close'/></button>
             <img src={props.image} alt="" />
             <a href={props.image} download>
                <button className='download-button'>View Image <Images/></button>
             </a>
             <h2>{props.label}</h2>
             <h5>{props.paragraph}</h5>
         </div>
        )}
        </>
    );
}
export default MiniGalleryCard;
