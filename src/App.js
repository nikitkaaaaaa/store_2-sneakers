import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { useSelector } from 'react-redux'
import './Style.css'
import NotEmptyBasket from './basket/NotEmptyBasket'
const App = () => {
  // const statusOfBasket = useSelector(state => state.statusOfBasket.statusOfBasket);
  
  return (
    // <div className={statusOfBasket ? 'basketStatusTrue' : 'basketStatusFalse'}>
    <div className='basketStatusFalse'>
      <NotEmptyBasket/>
      {/* <Header/>
      <Footer/> */}
    </div>
  )
}

export default App
