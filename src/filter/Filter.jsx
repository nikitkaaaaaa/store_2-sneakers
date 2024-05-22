import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Choise from '../filterproducts/Choise'
import Searchproducts from '../filterproducts/Searchproducts'
import { routes } from '../routes/Routes';
import Main from '../main/Main';
import Basket from '../basket/Basket';
const Filter = () => {
    const [search,setSearch] = useState('');
    const [choise,setchoise] = useState('rating');
  return (
    <div>
       <div style={{border : '1px solid',display : 'flex', justifyContent : 'space-between',alignItems : 'center' }}>
          <h1>Все кросовки</h1>
          <Searchproducts onSearch = {setSearch}/>
          <Choise />
        </div>
        <Routes>
            <Route path={routes.main} element={<Main />} />
            <Route path={routes.basket} element={<Basket />} />
       </Routes>
    </div>
  )
}

export default Filter
