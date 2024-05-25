import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../main/Main';

import { routes } from '../routes/Routes';
import { useGetbasketQuery } from '../api/Basket';
import Basket from '../basket/Basket';
import { useDispatch } from 'react-redux';
import { closebasket, openbasket } from '../redux/checkbasket';


const Header = () => {
  const { data = [] } = useGetbasketQuery();
  const total_price_basket = data ? data.reduce((total, item) => total + item.price, 0) : 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToBasket = () =>{
    navigate(routes.basket)
    dispatch(openbasket());
  }
  const goToMain = () => {
    navigate(routes.main);
    dispatch(closebasket());
  }
  return (
    <>
      <div className='header'>
        <div style={{ display: 'flex', alignItems: 'center', padding: '50px' }}>
        <img src="https://cdn-icons-png.flaticon.com/128/1334/1334205.png" alt="avatar" className='avatar' onClick={goToMain}/>
          <div style={{ paddingLeft: '25px' }}>
            <div style={{ fontSize: '24px' }}><b>REACT SNEAKERS</b></div>
            <div style={{ color: 'gray' }}>Магазин лучших кроссовок</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '50px' }}>
          <img src="https://cdn-icons-png.flaticon.com/128/1124/1124199.png" alt="" className='basket' onClick={goToBasket}/>
          <div>{total_price_basket} руб.</div>
        </div>
      </div>
      <Routes>
        <Route path={routes.main} element={<Main />} />
        <Route path={routes.basket} element={<Basket />} />
      </Routes>
    </>
  );
};

export default Header;