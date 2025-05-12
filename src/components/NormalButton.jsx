
function NormalButton(props) {
    return (
        <>
        <a href={props.path}>
            <button className="normal-button">{props.text}</button>
        </a>
        </>
    );
}
export default NormalButton;
