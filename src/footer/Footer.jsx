import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{display : 'flex', justifyContent : 'space-between',alignItems : 'center',padding : '0px 50px',marginTop : '20px',background : 'white'}}>
       <Link to='/'><img src="https://cdn-icons-png.flaticon.com/128/1334/1334205.png" alt="avatar" className='avatar'/></Link>
      <div style={{textAlign : 'center'}}>Developed by <span>Usufi</span></div>
      <div style={{display : 'flex',justifyContent : "space-between",paddingRight : '2%'}}>
        <div style={{paddingRight : '40%'}}><img src="https://cdn-icons-png.flaticon.com/128/14611/14611689.png" alt="" style={{width :'30px', height : '30px'}}/></div>
        <div><img src="https://cdn-icons-png.flaticon.com/128/15134/15134843.png" alt="" style={{width :'30px', height : '30px'}}/></div>
      </div>
    </div>
  )
}

export default Footer
