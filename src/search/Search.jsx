import React, { useState } from 'react'

const Search = ({ onSearch }) => {
    const [value,setvalue] = useState('');
    const searchinput = (event) => {
        onSearch(event.target.value);
        setvalue(event.target.value);
    }
    return (
        <div>
             <input type="text" placeholder='Поиск...' value={value} onChange={searchinput} style={{
                outline : 'none',padding : '7px 15px',width : '150px',borderRadius : '5px', border : '1px solid gray'}}/>
        </div>
    )
}

export default Search
