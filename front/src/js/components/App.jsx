import React, { useState , useEffect } from 'react';
import API from '../API'
import UserInput from "Components/User/UserInput";
import UserText from "Components/User/UserText";

export default function App(props) {
    const [data, setData] = useState(null);

    if(data == null && props.data) setData(props.data);

    const get = (path, params) => {
        const api = new API('http://localhost:3000/api');
        return api.get(path, params)
            .then(data => {
                setData(JSON.stringify(data));
            });
    };

    const post = (path, data) => {
        const api = new API('http://localhost:3000/api');
        return api.post(path, data)
            .then( data => {
                setData(JSON.stringify(data));
            })
    };

    if(data == null) get('/user/request');

    return (
        <div>
            <UserInput load={post.bind(this)}/>
            <UserText data={data}/>
        </div>
    );
}