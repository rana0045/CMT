import { useRef, useState, useEffect } from "react";

const useScrollWithMouse = () => {
    const containerRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [scrollX, setScrollX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setScrollX(e.clientX);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;

        const deltaX = e.clientX - scrollX;
        containerRef.current.scrollLeft = scrollLeft - deltaX;
    };

    const handleMouseWheel = (e) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += e.deltaY;
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.addEventListener("wheel", handleMouseWheel);
        }
        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener("wheel", handleMouseWheel);
            }
        };
    }, [containerRef]);

    return { containerRef, handleMouseDown, handleMouseUp, handleMouseMove };
};

export default useScrollWithMouse;
