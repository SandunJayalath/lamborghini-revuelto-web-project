import { useState } from 'react'
import { CircleX } from 'lucide-react';
import { Download } from 'lucide-react';

function ImageCard ({image, title}) {

    const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

    return (
        <>
        <div onClick={() => setIsLightBoxOpen(true)} className="image-card">
            <div id="image-gallery-head">
            <img src={image} alt="" />
            </div>
            <h5>{title}</h5>
        </div>

        {isLightBoxOpen && (
        <div id='lightbox' className="lightbox">
            <a onClick={() => setIsLightBoxOpen(false)} className="close"><CircleX className='close'/></a>
            <img src={image} alt=""/>
            <a href={image} download>
                <button className='download-button'>Download Image <Download/></button>
            </a>
            <h2>{title}</h2>
            <p>Every image captures the spirit of innovation and performance that defines the Lamborghini Revuelto. Explore the details, feel the passion, and experience a masterpiece built for those who dare to dream.</p>
        </div>
        )}
        </>
    );
}
export default ImageCard;
