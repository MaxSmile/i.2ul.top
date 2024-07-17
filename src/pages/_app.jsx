import Head from "next/head";
import about from "../data/about.json";
import '../styles/globals.css';
const App = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>Free URL Shortener - {about.name}</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App
