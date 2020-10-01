import React, {useState} from 'react';

function UserInput(props) {
    const [query, setQuery] = useState('')
    return (
        <div>
            <input type="text" value={query} placeholder="Search..." onChange={e => setQuery(e.target.value)}  defaultValue={query}/>
            <button onClick={props.load.bind(this, '/user/request', {'query' : query})}>Загрузить</button>
        </div>
    );
}

export default UserInput;