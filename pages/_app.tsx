import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Background from '../components/Background'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Background />
            <Component {...pageProps} />
        </>
    )
}