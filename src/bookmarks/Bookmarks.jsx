import React from 'react'
import { useGetBooksmarksQuery } from '../api/Booksmarks'

const Bookmarks = () => {
    const {data = []} = useGetBooksmarksQuery();
    return (
       <div style={{ background: "white", paddingTop: "50px"}}>
         <div  style={{
          width: "95%",
          margin: "auto",
          paddingBottom: "70px",
          background: "white",
        }}>
            <h1 style={{paddingBottom : '70px'}}>Мои закладки</h1>
        <div style={{ display: "flex",
              flexWrap: "wrap",
              gap: "50px 0px",
              justifyContent: "space-between",}}> 
        {data.map((item) => (
            <div key={item.id} className="products">
              <div
                style={{
                  width: "300px",
                  height: "300px",
                }}
              >
                <img src="https://cdn.icon-icons.com/icons2/2459/PNG/96/favourite_heart_button_like_icon_149069.png" alt="" style={{width : '30px', height : '30px'}}/>
                <img
                  src={item.image}
                  alt=""
                  className='productsImage'
                />
              </div>
              <div style={{ paddingLeft: "30px" }}>
                <b>Мужские кроссовки</b>
              </div>
              <div style={{ paddingLeft: "30px" }}>
                <b>{item.name}</b>
              </div>
              <br />
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <div style={{ color: "gray", paddingLeft: "30px" }}>
                    ЦЕНА:
                  </div>
                  <div style={{ paddingLeft: "30px" }}>
                    <b>{item.price} <b>₽</b></b>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
         </div>
       </div>
    )
}

export default Bookmarks
