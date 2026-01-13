import { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';

const Background = () => {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!bgRef.current) return;

            const { clientX, clientY } = e;
            const x = (window.innerWidth - clientX * 2) / 100;
            const y = (window.innerHeight - clientY * 2) / 100;

            bgRef.current.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className={styles.fixedBackground}>
            <div ref={bgRef} className={styles.animatedBgContainer}>
                <img
                    src="/api/random-image"
                    alt="Background"
                    className={styles.bgImage}
                />
                <div className={styles.patternOverlay}></div>
            </div>
        </div>
    );
};

export default Background;
