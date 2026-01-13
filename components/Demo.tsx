import { useState, useEffect, useRef, MouseEvent } from 'react';
import styles from '../styles/Home.module.css';

const Demo = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const cardRef = useRef<HTMLDivElement>(null);

    // 3D Tilt State
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Check if the API is working locally, otherwise fallback to external for demo consistency if needed.
        // Since we implemented the API, let's try local.
        // NOTE: In Next.js dev mode, 'public' folder is served at root.
        setImageUrl('/api/random-image');
    }, []);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const refreshImage = () => {
        setIsLoading(true);
        const newUrl = `/api/random-image?t=${new Date().getTime()}`;
        setImageUrl(newUrl);
    };

    // Tilt Logic
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (max +/- 10 degrees)
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotation({ x: 0, y: 0 }); // Reset
    };

    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>即時預覽</h2>
            <div className={styles.demoContainer}>
                <div
                    className={styles.demoImageWrapper}
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
                        transition: isHovering ? 'none' : 'transform 0.5s ease-out'
                    }}
                >
                    {/* Sheen Effect */}
                    <div
                        className={styles.sheen}
                        style={{ opacity: isHovering ? 0.3 : 0 }}
                    />

                    {isLoading && <div className={styles.loader}></div>}

                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt="Random Galgame CG"
                            className={styles.demoImage}
                            style={{ opacity: isLoading ? 0.3 : 1 }}
                            onLoad={handleImageLoad}
                        />
                    )}
                </div>
                <button
                    className={styles.refreshButton}
                    onClick={refreshImage}
                    disabled={isLoading}
                >
                    {isLoading ? '載入中...' : '換一張'}
                </button>
            </div>
        </div>
    );
};

export default Demo;
