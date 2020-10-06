import React, { useState , useEffect } from 'react';
import API from './API'
import UserInput from "./User/UserInput";
import UserText from "./User/UserText";

export default function App() {
    const [data, setData] = useState(null);

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


    //if(data == null) setData(d);

    return (
        <div>
            <UserInput load={post.bind(this)}/>
            <UserText data={data}/>
        </div>
    );
}