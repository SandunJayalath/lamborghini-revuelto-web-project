
function PerfomanceCard (props) {
    return (
        <>
        <div className="performance-row-card">
            <div className="col-lg-1 d-flex">
                <div>
                    {props.icon}
                </div>
            </div>
            <div className="m-1" style={{backgroundColor: "rgba(248, 248, 248, 0.56)", height: "90%", width: "1px"}}></div>
            <div className="col-lg-3 d-flex justify-content-center" style={{textAlign: "center"}}>
                <h4 className="d-flex justify-content-center align-items-center" style={{fontWeight: "bold"}}>{props.label}</h4>   
            </div>
            <div className="m-1" style={{backgroundColor: "rgba(248, 248, 248, 0.56)", height: "90%", width: "1px"}}></div>
            <div className="col-lg-7 d-flex" style={{flexDirection: "column", alignItems :"center"}}>
                <h5 className="d-flex justify-content-center align-items-center" style={{fontWeight: "100"}}>{props.value}</h5>
                <h6 className="d-flex justify-content-center align-items-center" style={{fontFamily: "Tilt Neon"}}>{props.subText}</h6>
            </div>
        </div>
        </>
    );
}
export default PerfomanceCard;
