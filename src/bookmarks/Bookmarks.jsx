import React from "react";
import { removeToBooksmarks, useGetBooksmarksQuery } from "../api/Booksmarks";
import Skeleton from "../skeleton/Skeleton";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useRemoveToBasketMutation } from "../api/Basket";

const Bookmarks = () => {
  const { isLoading, data = [] } = useGetBooksmarksQuery();
  const loaderArray = Array.from({ length: 5 }, (_, index) => index);
  const [removetoBooksmarks] = useRemoveToBasketMutation();
  const [parent, enableAnimations] = useAutoAnimate();
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
        <h1 style={{ paddingBottom: "70px" }}>Мои закладки</h1>
        {isLoading && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {loaderArray.map((index) => (
              <div style={{ width: "300px", height: "420px" }} key={index}>
                <Skeleton index={index} />
              </div>
            ))}
          </div>
        )}
        <div
          ref={parent}
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
                  src="https://cdn-icons-png.flaticon.com/128/14025/14025023.png"
                  alt=""
                  className="booksmarks"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img src={item.image} alt="" className="productsImage" />
                </div>
              </div>
              <div style={{ paddingLeft: "30px" }}>
                <b>Мужские кроссовки</b>
              </div>
              <div style={{ paddingLeft: "30px" }}>
                <b>{item.name}</b>
              </div>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div
                    style={{
                      color: "gray",
                      paddingLeft: "30px",
                    }}
                  >
                    ЦЕНА:
                  </div>
                  <div style={{ paddingLeft: "30px" }}>
                    <b>
                      {item.price} <b>₽</b>
                    </b>
                  </div>
                  <img
                    onClick={() => removetoBooksmarks(item.id)}
                    src="https://cdn.icon-icons.com/icons2/1510/PNG/96/closecrossthincircularbutton_104665.png"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      position: "absolute",
                      bottom: "35px",
                      right: "10px",
                      padding: "15px 15px 0px 0px ",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
