import React from 'react'
import { useGetbasketQuery, useRemoveToBasketMutation } from '../api/Basket'
import ContentLoader from "react-content-loader"
import { useNavigate } from 'react-router-dom';
import { routes } from '../routes/Routes';
import { useDispatch } from 'react-redux';
import { closebasket } from '../redux/checkbasket';
const NotEmptyBasket = () => {
    const {isLoading,data = []} = useGetbasketQuery();
    const [removetobasket] = useRemoveToBasketMutation();
    const loaderArray = Array.from({ length: 5 }, (_, index) => index);
    const total_price_basket = data ? data.reduce((total, item) => total + item.price, 0) : 0;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goToMain = () =>{
      navigate(routes.main);
      dispatch(closebasket());
    }
    return (
      <div className='notEmptyBasket'>
        <div
         
        >
        <div style={{display : 'flex',  alignItems : 'center',height : '30px',paddingBottom : '50px'}}>
          <img src="https://cdn.icon-icons.com/icons2/1302/PNG/96/leftarrowsign_85800.png" alt="" style={{width : '20px', height : '20px',paddingRight : '20px'}} onClick={goToMain}/>
          <h2>Корзина</h2>
        </div>
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
                <div style={{ width: "300px", height:    "420px" }} key={index}>
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
                flexDirection : 'column'
              }}
            >
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
                  <div style={{display : 'flex',flexDirection : 'column', justifyContent : 'center', paddingLeft : '20px'}}>
                  <div style={{paddingBottom : '10px'}}>
                    Кросовки {item.name}
                  </div>

                    <div >
                      <div>
                        <b style={{alignSelf : 'flex-start'}}>{item.price} <b>₽</b></b>
                      </div>
                  </div>
                  <img 
                      src="https://cdn.icon-icons.com/icons2/1510/PNG/96/closecrossthincircularbutton_104665.png" 
                      alt="" 
                      onClick={() => removetobasket(item.id)}
                      style={{
                        width: '20px', 
                        height: '20px',
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        padding : '15px 15px 0px 0px '
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
       <div style={{display : 'flex', justifyContent : 'space-between', paddingTop : '10px'}}>
        <div>Итого:</div>
        <div><b>{total_price_basket}  ₽</b></div>
       </div>
      </div>
    );
}
export default NotEmptyBasket
