import React from 'react';

// This gets called on every request
export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/user/request');
    const data = await response.json();
    const result = JSON.stringify(data);
    console.log(`Fetched place: ${result}`);
    return { props: { result } };
    /*
    const api = new API('http://localhost:3000/api');
    const result = api.get('/user/request')
        .then(data => {
            return JSON.stringify(data);
        });
    console.log(`Fetched place: ${result}`);
    return { props: { result } };
    */

}

export default function UserText(props){
    return <div>{props.data}</div>;
}