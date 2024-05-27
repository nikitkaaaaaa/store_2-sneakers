import React from "react";
import { useGetbasketQuery } from "../api/Basket";
import NotEmptyBasket from "./NotEmptyBasket";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/Routes";
import { useDispatch } from "react-redux";

const EmptyBasket = () => {
  const { data = [] } = useGetbasketQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToMain = () => {
    navigate(routes.main);
  };
  return (
    <div className="EmptyBasket">
      <div style={{ margin: "auto" }}>
        <img
          src="https://github.com/Archakov06/react-pizza-v2/blob/master/src/assets/img/empty-cart.png?raw=true"
          alt=""
          style={{ width: "200px", height: "200px", margin: "auto" }}
        />
        <h1 style={{ textAlign: "center" }}>Корзина пустая</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <button
            onClick={goToMain}
            style={{
              padding: "13px 25px",
              background: "white",
              border: "1px solid gray",
              borderRadius: "10px",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/10728/10728732.png"
              alt=""
              style={{ width: "10px", height: "10px", paddingRight: "5px" }}
            />
            Вернуться назад
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyBasket;

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { routes } from '../routes/Routes';
// import { openNavigation } from '../redux/checknavigation';

// const EmptyBasket = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const goToHome = () => {
//     dispatch(openNavigation());
//     navigate(routes.main);
//   };

//   return (
//     <div
//       style={{
//         padding: '50px 100px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}>
//       <img
//         src="https://github.com/Archakov06/react-pizza-v2/blob/master/src/assets/img/empty-cart.png?raw=true"
//         alt=""
//         style={{ width: '300px', height: '300px', paddingTop: '50px' }}
//       />
//       <div style={{ paddingBottom: '50px' }}>Корзина пустая</div>
//       <button
//         onClick={() => goToHome()}
//         style={{
//           padding: '13px 25px',
//           background: 'white',
//           border: '1px solid gray',
//           borderRadius: '10px',
//         }}>
//         <img
//           src="https://cdn-icons-png.flaticon.com/128/10728/10728732.png"
//           alt=""
//           style={{ width: '10px', height: '10px', paddingRight: '5px' }}
//         />
//         Вернуться назад
//       </button>
//     </div>
//   );
// };

// export default EmptyBasket;
