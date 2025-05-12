import { Linkedin } from 'lucide-react';
import { CircleSmall } from 'lucide-react';
import { Link } from 'react-router-dom';

function TeamCard (props) {
    return (
        <>
        <div id="team-card" className="d-flex justify-content-center align-items-center p-0 m-0" style={{maxWidth: "300px", minWidth: "300px", flexDirection: "column"}}>
            <div style={{display: "flex", justifyContent: "center", height: "200px", alignItems: "center"}}>
                <img src={props.image} alt="" className="profile-image"/>
            </div>
            <div className="pt-5 team-card-body">
                <h4><strong>{props.name}</strong></h4>
                <hr />
                <h6>{props.role}</h6>
                <div className="d-flex justify-content-center gap-2">
                <CircleSmall/><p>{props.bio}</p>
                </div>
                <h6>{props.location}</h6>
                <h6 style={{color: "rgb(248, 240, 196)", fontWeight: "bold"}}>{props.badge}</h6>
                <Link to={props.linkedinLink} className="linkedin-link">
                    <Linkedin className='linkedin'/>
                </Link>
            </div>
            </div>
        </>
    );
}
export default TeamCard;
