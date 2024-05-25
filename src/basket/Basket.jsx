import React from 'react'
import NotEmptyBasket from './NotEmptyBasket'
import EmptyBasket from './EmptyBasket'
import { useGetbasketQuery } from '../api/Basket'
import Main from '../main/Main'
const Basket = () => {
    const {data = []} = useGetbasketQuery();
  return (
    <div>
      <Main/>
      {data.length >= 1 ? <NotEmptyBasket/> : <EmptyBasket/>}
    </div>
  )
}
export default Basket
