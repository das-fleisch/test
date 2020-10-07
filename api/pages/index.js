import Head from 'next/head'
import App from "./../components/App";
import API from "./../components/API";


export default function Home(props) {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
            </Head>
            <main>
                <App data={props.data}/>
            </main>
        </div>
    );
}

export async function getServerSideProps({ params, preview = null }) {
    const api = new API('http://localhost:3000/api');
    return api.get('/user/request')
        .then(data => {
            return { props: { data: JSON.stringify(data) }};
        });
}