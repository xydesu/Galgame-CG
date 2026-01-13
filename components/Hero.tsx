import styles from '../styles/Home.module.css';

const Hero = () => {
    const scrollToUsage = () => {
        const element = document.getElementById('usage');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.hero}>
            {/* Background is now global in index.tsx */}

            <div className="fade-in">
                <h1 className={styles.title}>Galgame CG</h1>
                <p className={styles.subtitle}>
                    隨機 Galgame CG 圖片 API，為您的應用增添唯美視覺體驗。
                </p>
                <button className={styles.ctaButton} onClick={scrollToUsage}>
                    立即開始
                </button>
            </div>

            <div className={styles.scrollIndicator}>
                <span>SCROLL</span>
                <div className={styles.scrollArrow}></div>
            </div>
        </div>
    );
};

export default Hero;
