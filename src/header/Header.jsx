import React, { useState } from 'react';
import './Style_header.css';
import { Link, Route, Routes } from 'react-router-dom';
import Main from '../main/Main';
import Basket from '../basket/Basket';
import { routes } from '../routes/Routes';
import { useGetbasketQuery } from '../api/Basket';
import Searchitem from '../searchitem/Searchitem';


const Header = () => {
  const { data = [] } = useGetbasketQuery();
  const total_price_basket = data ? data.reduce((total, item) => total + item.price, 0) : 0;
  const [search, setSearch] = useState('');

  return (
    <>
      <div className='header'>
        <div style={{ display: 'flex', alignItems: 'center', padding: '50px' }}>
          <Link to='/'><img src="https://cdn-icons-png.flaticon.com/128/1334/1334205.png" alt="avatar" className='avatar' /></Link>
          <div style={{ paddingLeft: '25px' }}>
            <div style={{ fontSize: '24px' }}><b>REACT SNEAKERS</b></div>
            <div style={{ color: 'gray' }}>Магазин лучших кроссовок</div>
          </div>
        </div>
        <Searchitem onSearch = {setSearch}/>
        <div style={{ display: 'flex', alignItems: 'center', padding: '50px' }}>
          <Link to='/basket'><img src="https://cdn-icons-png.flaticon.com/128/1124/1124199.png" alt="" className='basket' /></Link>
          <div>{total_price_basket}  руб.</div>
        </div>
      </div>
      <Routes>
        <Route path={routes.main} element={<Main search = {search} />} />
        <Route path={routes.basket} element={<Basket />} />
      </Routes>
    </>
  );
};

export default Header;