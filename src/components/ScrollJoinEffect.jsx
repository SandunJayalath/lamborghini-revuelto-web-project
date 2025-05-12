import { useEffect, useRef, useState } from "react";

function ScrollJoinEffect ({direction, children}) {
    
    const elementRef = useRef(null); // Reference to the element to observe
    const [isVisible, setIsVisible] = useState(false); // State to track visibility

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting); // When the element is in the viewport
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (elementRef.current) {
        observer.observe(elementRef.current); // Start observing the element
        }

        return () => {
        if (elementRef.current) observer.unobserve(elementRef.current); // Clean up observer
        };
    }, []);
    
    return (
        <>
        <div ref={elementRef} className={`${direction === "left" ? "from-left" : "from-right"} ${isVisible ? "visible" : ""}`} style={{display: "flex", justifyContent: "center"}}>
            {children}
        </div>
        </>
    );
}
export default ScrollJoinEffect;
