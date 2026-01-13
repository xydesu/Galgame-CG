import Head from 'next/head'
import Hero from '../components/Hero'
import Demo from '../components/Demo'
import Usage from '../components/Usage'
import Docs from '../components/Docs'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Galgame CG | 隨機美圖 API</title>
                <meta name="description" content="隨機顯示一張 Galgame CG 圖片，提供 API 呼叫。" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Background is now in _app.tsx */}

            <main className={styles.main}>
                <Hero />
                <Demo />
                <Usage />
                <Docs />
                <Footer />
            </main>
        </>
    )
}
