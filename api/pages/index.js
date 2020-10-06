import Head from 'next/head'
import App from "./components/App";


export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
            </Head>
            <main>
                <App/>
            </main>
        </div>
    );
}