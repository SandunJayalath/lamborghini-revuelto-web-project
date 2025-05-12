import { useEffect, useRef, useState } from "react";

function MainTopic (props) {

    const domRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });

        observer.observe(domRef.current);

    return () => observer.disconnect();
    }, []);

    return (
        <>
        <div className={`main-topic ${isVisible ? 'visible' : ''}`} ref={domRef} style={{fontFamily: "Montserrat", fontWeight: "bold", color: "var(--text-color)", textAlign: "center"}}>
            <p><strong>{props.title}</strong></p>
        </div>
        </>
    );
}
export default MainTopic;