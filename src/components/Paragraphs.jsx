import { useState, useEffect } from "react";

function Paragraphs (props) {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth <= 600); // adjust threshold as needed
        };

        checkScreenSize(); // check on mount
        window.addEventListener("resize", checkScreenSize); // update on resize

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

   const paragraphLength = props.paragraph.length;

   const textStyle = {
    textAlign: isSmallScreen && paragraphLength > 70 ? "left" : "center",
   }

    return (
        <>
        <div className="paragraphs" style={{fontFamily: "sans-serif", fontWeight: "semi-bold", color: "var(--paragraph-color)"}}>
            <p style={textStyle}><strong>{props.paragraph}</strong></p>
        </div>
        </>
    );
}
export default Paragraphs;