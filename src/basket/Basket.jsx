import React from 'react'
import { useGetbasketQuery, useRemoveToBasketMutation } from '../api/Basket'
import { Link } from 'react-router-dom';
import { routes } from "../routes/Routes";
import ContentLoader from "react-content-loader"
const Basket = () => {
    const {isLoading,data = []} = useGetbasketQuery();
    const [removetobasket] = useRemoveToBasketMutation();
    const loaderArray = Array.from({ length: 5 }, (_, index) => index);
    return (
      <div style={{ background: "white", paddingTop: "50px" }}>
        <div
          style={{
            width: "95%",
                  margin: "auto",
            paddingBottom: "70px",
            background: "white",
          }}
        >
          <h1>Мои товары</h1>
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
                    speed={2}
                    width={400}
                    height={460}
                    viewBox="0 0 400 460"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"

                  >
                    <rect x="0" y="0" rx="2" ry="2" width="300" height="300" /> 
                    <rect x="0" y="315" rx="2" ry="2" width="300" height="15" /> 
                    <rect x="0" y="340" rx="2" ry="2" width="225" height="15" /> 
                    <rect x="0" y="365" rx="2" ry="2" width="125" height="25" />
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
                    <b>Мужские кросовки</b>
                  </div>
                  <div style={{ paddingLeft: "30px" }}>
                    <b>{item.name}</b>
                  </div>
                  <br />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{}}>
                      <div style={{ color: "gray", paddingLeft: "30px" }}>
                        ЦЕНА:
                      </div>
                      <div style={{ paddingLeft: "30px" }}>
                        <b>{item.price} руб.</b>
                      </div>
                     <div style={{}}><img src="https://cdn-icons-png.flaticon.com/128/7709/7709786.png" alt="" onClick={() => removetobasket(item.id)}
                      style={{width : '20px', height : '20px',position : "relative",left : '250px',bottom : '23px'}}/></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
}
export default Basket
