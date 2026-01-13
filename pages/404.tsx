import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Custom404() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <div className={styles.hero}>
                <h1 className={styles.title}>
                    404 - 找不到頁面
                </h1>
                <p className={styles.subtitle}>
                    看起來你迷路了，這裡什麼都沒有。
                </p>
                <button onClick={() => router.back()} className={styles.ctaButton} style={{ opacity: 1, animation: 'none' }}>
                    返回上一頁
                </button>

                <div style={{ marginTop: '3rem' }}>
                    {/* Using api/random-image directly might be slow or cached, but keeping the concept */}
                    <img
                        src="/api/random-image"
                        alt="404 Random Illustration"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '400px',
                            borderRadius: '20px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    />
                </div>
            </div>
        </>
    );
}