import React from "react";
import { useGetbasketQuery, useRemoveToBasketMutation } from "../api/Basket";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/Routes";
import { useDispatch } from "react-redux";
const NotEmptyBasket = () => {
  const { data = [] } = useGetbasketQuery();
  const [removetobasket] = useRemoveToBasketMutation();
  const total_price_basket = data
    ? data.reduce((total, item) => total + item.price, 0)
    : 0;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToMain = () => {
    navigate(routes.main);
  };
  return (
    <div className="notEmptyBasket">
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "30px",
            paddingBottom: "50px",
          }}
        >
          <img
            src="https://cdn.icon-icons.com/icons2/1302/PNG/96/leftarrowsign_85800.png"
            alt=""
            style={{ width: "20px", height: "20px", paddingRight: "20px" }}
            onClick={goToMain}
          />
          <h2>Корзина</h2>
        </div>
        <div className="wrapper_basket">
          {data.map((item) => (
            <div key={item.id} className="productsBasket">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: "20px",
                }}
              >
                <div style={{ paddingBottom: "10px" }}>
                  Кросовки {item.name}
                </div>

                <div>
                  <div>
                    <b style={{ alignSelf: "flex-start" }}>
                      {item.price} <b>₽</b>
                    </b>
                  </div>
                </div>
                <img
                  src="https://cdn.icon-icons.com/icons2/1510/PNG/96/closecrossthincircularbutton_104665.png"
                  alt=""
                  onClick={() => removetobasket(item.id)}
                  style={{
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    padding: "15px 15px 0px 0px ",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "10px",
        }}
      >
        <div>Итого:</div>
        <div>
          <b>{total_price_basket} ₽</b>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
        }}
      >
        <button
          style={{
            background: "green",
            color: "white",
            border: "none",
            padding: "15px 105px",
            borderRadius: "5px",
          }}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
};
export default NotEmptyBasket;
