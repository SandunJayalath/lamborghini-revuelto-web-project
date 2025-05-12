function KeyFeatureCard (props) {
    return (
        <>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4 mt-3">
            <div className="d-flex justify-content-center align-items-center p-3 key-feature-card">
                <div className="d-flex justify-content-center align-items-center" style={{maxHeight: "350px"}}>
                    <img src={props.src} alt="" className="key-feature-image"/>
                </div>
                <div className=" pt-4 text-left d-flex gap-3 d-flex " style={{flexDirection: "column", color: "black"}}>
                    <h3><strong>{props.feature}</strong></h3>
                    <h5>{props.description}</h5>
                </div>
            </div>
        </div>
        </>
    );
}
export default KeyFeatureCard;