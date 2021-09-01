import styles from '../styles/Scroll.module.css'
import { useScroll } from "../hooks/useScroll"

const Scroll = () => {
    const { isVisible } = useScroll();

    let estilos = {
        visibility: "visible",
        bottom: "1.5rem"
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {isVisible ? <span style={estilos} onClick={scrollToTop} className={styles.scrolltop}>
                <i className={styles.scrolltop__icon}>X</i>
            </span> : <span onClick={scrollToTop} className={styles.scrolltop}>
                <i className={styles.scrolltop__icon}>X</i>
            </span>}

        </>
    );
}
export default Scroll;