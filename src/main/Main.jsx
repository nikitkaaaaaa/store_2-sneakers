import React, { useEffect, useState } from 'react';
import { useGetsneakersQuery } from '../api/Sneakers';
import { useAddbasketMutation } from '../api/Basket';
import Search from '../search/Search';
import Choise from '../choise/Choise';
import { filterproducts } from '../filterproducts/filterproducts';
import Skeleton from '../skeleton/Skeleton';
import { useAddBooksmarksMutation } from '../api/Booksmarks';

const Main = () => {
  const { isLoading, data = [] } = useGetsneakersQuery();
  const [addbasket] = useAddbasketMutation(); 
  const [addBooksmarks] = useAddBooksmarksMutation();
  const [filterdata, setfilterdata] = useState([]);
  const [search,setsearch] = useState('');
  const [choise,setchoise] = useState("smallPrice");
  const [cardStates, setCardStates] = useState(() => {
    const storedCardStates = localStorage.getItem('cardStates');
    return storedCardStates ? JSON.parse(storedCardStates) : {};
  });

  const addtobasket = (item, itemId) => {
    addbasket({ image: item.image, price: item.price, name: item.name });
    setCardStates(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  };

  const AddToBooksmarks = (item) => { 
    addBooksmarks({ image: item.image, price: item.price, name: item.name });
  }
  
  useEffect(() => {
    let filter = filterproducts(data, search, choise);
    setfilterdata(filter);
  }, [data, search, choise]);

  useEffect(() => {
    localStorage.setItem('cardStates', JSON.stringify(cardStates));
  }, [cardStates]);

  const loaderArray = Array.from({ length: 16 }, (_, index) => index);

  return (
    <div style={{ background: "black", paddingTop: "50px", opacity : '50%'}}>
      <div
        style={{
          width: "95%",
          margin: "auto",
          paddingBottom: "70px",
          background: "white",
        }}
      >
        <div style={{display : 'flex', alignItems : 'center',justifyContent : 'space-between',paddingBottom : '70px'}}>
          <h1>Все кросовки</h1>
          <div style={{display : 'flex'}}>
            <div style={{paddingRight : '15px'}}><Choise onChoise = {setchoise}/></div>
            <div><Search onSearch = {setsearch}/></div>
          </div>
        </div>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {loaderArray.map((index) => (
              <div style={{ width: "300px", height: "420px" }} key={index}>
               <Skeleton index = {index}/>
              </div>
            ))}
          </div>
        ) : (
            <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "50px 0px",
              justifyContent: "space-between",
            }}
          >
            {filterdata.map((item) => (
              <div key={item.id} className="products">
                <div
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                >
                  <img src="https://cdn.icon-icons.com/icons2/2459/PNG/96/favourite_heart_button_like_icon_149069.png" alt="" style={{width : '30px', height : '30px'}}
                   onClick={() => AddToBooksmarks(item)}/>
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
                  <div onClick={() => addtobasket(item, item.id)}>
                    {cardStates[item.id] ? (
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/8832/8832138.png"
                        className="basketTrue"
                      />
                    ) : (
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/8212/8212741.png"
                        className="basketFalse"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
