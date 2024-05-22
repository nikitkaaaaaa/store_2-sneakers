import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Main from './main/Main'
const App = () => {
  return (
    <div style={{width : '90%', margin : 'auto'}}>
      <Header/>
      <Main/>
      {/* <Filter/> */}
      <Footer/>
    </div>
  )
}

export default App
