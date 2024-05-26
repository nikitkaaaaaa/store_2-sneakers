import React from 'react'

const Choise = ({ onChoise }) => {
    const choise = (event) => {
        onChoise(event.target.value);
    }
  return (
    <div>
      <select name="" id="" onChange={choise} style={{padding : '7px 15px',width : '190px', borderRadius : '5px',outline : 'none'}}>
        <option value="rating">По рейтенгу</option>
        <option value="smallPrice">{'По цене (маленькая)' }</option>
        <option value="bigPrice">{'По цене (дорогая)' }</option>
      </select>
    </div>
  )
}

export default Choise
