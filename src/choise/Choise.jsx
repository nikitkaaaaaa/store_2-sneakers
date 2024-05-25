import React from 'react'

const Choise = ({ onChoise }) => {
    const choise = (event) => {
        onChoise(event.target.value);
    }
  return (
    <div>
      <select name="" id="" onChange={choise} style={{padding : '7px 15px',width : '150px', borderRadius : '5px',outline : 'none'}}>
        <option value="price">По цене</option>
        <option value="rating">По рейтенгу</option>
      </select>
    </div>
  )
}

export default Choise
