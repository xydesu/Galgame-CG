import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const htmlExample = `<img src='https://galgame-cg.vercel.app/api/random-image'/>`;

const cssExample = `.background {
  background-image: url('https://galgame-cg.vercel.app/api/random-image');
}`;

// Icons
const ClipboardIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            className={styles.iconButton}
            onClick={handleCopy}
            title="Copy to clipboard"
        >
            {copied ? <CheckIcon /> : <ClipboardIcon />}
        </button>
    );
};

const Usage = () => {
    return (
        <div id="usage" className={styles.section}>
            <h2 className={styles.sectionTitle}>使用方法</h2>

            <div className={styles.cardGrid}>
                <div className={styles.glassCard}>
                    <h3 className={styles.cardTitle}>HTML 整合</h3>
                    <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>最簡單的使用方式，直接在 img 標籤中引用。</p>
                    <div className={styles.codeContainer}>
                        <span className={styles.codeLabel}>HTML</span>
                        <CopyButton text={htmlExample} />
                        <SyntaxHighlighter
                            language="html"
                            style={vscDarkPlus}
                            customStyle={{ borderRadius: '12px', padding: '20px', margin: 0 }}
                        >
                            {htmlExample}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div className={styles.glassCard}>
                    <h3 className={styles.cardTitle}>CSS 背景</h3>
                    <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>作為 CSS 背景圖片使用。</p>
                    <div className={styles.codeContainer}>
                        <span className={styles.codeLabel}>CSS</span>
                        <CopyButton text={cssExample} />
                        <SyntaxHighlighter
                            language="css"
                            style={vscDarkPlus}
                            customStyle={{ borderRadius: '12px', padding: '20px', margin: 0 }}
                        >
                            {cssExample}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usage;
