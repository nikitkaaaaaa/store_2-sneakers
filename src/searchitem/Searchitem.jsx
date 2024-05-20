import React, { useState } from 'react'

const Searchitem = ({ onSearch}) => {
    const [value,setvalue] = useState('');
    const searchInput = (event) => {
        setvalue(event.target.value);
        onSearch(event.target.value);
    }
  return (
    <div>
      <input type="text" value={value} onChange={searchInput} placeholder = 'Поиск ...'style={{padding : '5px 10px', outline : 'none',borderRadius : '5px',border : '1px solid gray'}}/>
    </div>
  )
}

export default Searchitem
