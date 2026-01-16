import styles from '../styles/Home.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Created by XingYan</p>
            <div style={{ marginTop: '1rem' }}>
                <a
                    href="https://github.com/xydesu/Galgame-CG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                >
                    GitHub
                </a>
                <span>•</span>
                <a
                    href="https://github.com/xydesu/Galgame-CG/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                >
                    Report Issue
                </a>
            </div>
        </footer>
    );
};

export default Footer;
