import React, { useEffect, useState } from 'react';
import { useGetsneakersQuery } from '../api/Sneakers';
import './Style_main.css';
import { useAddbasketMutation } from '../api/Basket';
import ContentLoader from "react-content-loader";

import Filter from '../filter/Filter';

const Main = () => {
  const { isLoading, data = [] } = useGetsneakersQuery();
  const [addbasket] = useAddbasketMutation(); 
  const [cardStates, setCardStates] = useState({});
  const [filterdata, setfilterdata] = useState([]);
  const addtobasket = (item, itemId) => {
    addbasket({ image: item.image, price: item.price, name: item.name });
    setCardStates(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  };
  const loaderArray = Array.from({ length: 16 }, (_, index) => index);
  return (
    <div style={{ background: "white", paddingTop: "50px"}}>
      <div
        style={{
          width: "95%",
          margin: "auto",
          paddingBottom: "70px",
          background: "white",
        }}
      >
        <Filter/>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "50px 0px",
              justifyContent: "space-between",
            }}
          >
            {loaderArray.map((index) => (
              <div style={{ width: "300px", height: "420px" }} key={index}>
                <ContentLoader
                  key={index}
                  speed={2}
                  width={400}
                  height={460}
                  viewBox="0 0 400 460"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="0" y="0" rx="2" ry="2" width="300" height="300" />
                  <rect x="0" y="315" rx="2" ry="2" width="300" height="15" />
                  <rect x="0" y="341" rx="2" ry="2" width="225" height="15" />
                  <rect x="0" y="370" rx="2" ry="2" width="125" height="25" />
                  <rect x="261" y="370" rx="2" ry="2" width="41" height="25" />
                </ContentLoader>
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
            {data.map((item) => (
              <div key={item.id} className="products">
                <div
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
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
                      <b>{item.price} руб.</b>
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