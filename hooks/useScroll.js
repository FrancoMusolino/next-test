import { useEffect, useState } from 'react';

export const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const detectarScroll = () => {
            setScrollY(window.pageYOffset);
            if (scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener("scroll", detectarScroll);
        return () => window.removeEventListener("scroll", detectarScroll);
    }, [scrollY])

    return { isVisible };
}