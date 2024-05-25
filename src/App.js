import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { useSelector } from 'react-redux'
import './Style.css'
import NotEmptyBasket from './basket/NotEmptyBasket'
const App = () => {

  const checkbasket = useSelector(state => state.checkbasket.checkbasket);
  return (

    <div className='basketStatusFalse'>
      {/* <NotEmptyBasket/> */}
      {checkbasket + '1'}
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
