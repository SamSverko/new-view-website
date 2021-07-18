import { GlobalStyle } from '../styles/global-style'

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}
