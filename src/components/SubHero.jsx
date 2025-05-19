import {Link} from 'react-router-dom'

function SubHero({backgroundImage, heading, paragraph, button, buttonPath}) {

    const imageStyles = {
        backgroundImage: `url(${backgroundImage})`,
    }

    return (
        <>
        <div className="container-fluid sub-hero" style={imageStyles}>
            <div className="container-lg p-4">
            <div className="d-flex align-items-left sub-hero-content" style={{flexDirection: "column"}}>
                <h1>{heading}</h1>
                <h4>{paragraph}</h4>
                <div className="d-flex gap-4 cta-buttons">
                    <Link to={buttonPath}>
                        <button>{button}</button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
export default SubHero;
