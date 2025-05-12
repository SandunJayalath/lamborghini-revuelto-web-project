import { Link } from "react-router-dom";

function NormalButton(props) {
    return (
        <>
        <Link to={props.path}>
            <button className="normal-button">{props.text}</button>
        </Link>
        </>
    );
}
export default NormalButton;
