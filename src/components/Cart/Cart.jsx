import React, { useEffect, useState } from "react";
import { corzinaka } from "../../data";
import corzina from "../../assets/svg/corzina.svg";
import "./Cart.css";
import women01 from "../../assets/svg/women01.svg";
import deletebutton from "../../assets/svg/delete.svg";
import minus from "../../assets/svg/minus.svg";
import pilus from "../../assets/svg/pilus.svg";
import strelka from "../../assets/svg/strelka.svg";
import { Link } from "react-router-dom";
import { CgFormatUnderline } from "react-icons/cg";
function Cart() {
  const [count, setCount] = useState({});
  const [data, setData] = useState(corzinaka);
  const [toTalCount,setToTalPrice] = useState(0)

  const deleteHandler = (id) => {
    let filterDelete = data.filter((x) => x.id !== id);
    corzinaka.splice(
      corzinaka.findIndex((x) => x.id === id),
      1
    );
    setData(filterDelete);
  };

  useEffect(() => {
    let toTalCount = 0;
    data.forEach((item) => {
      toTalCount += (item.newPrice * count[item.id] || 0);
    });
    setToTalPrice(toTalCount);
  }, [count, data]);

  const increment = (id) => {
    setCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };
  const decrement = (id) => {
    if (count[id] > 0) {
     setCount((prev)=>({
        ...prev,
        [id]:(prev[id]||0)-1
     }))
    }
  };
  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-info">
          <div className="cart-image">
            <img src={corzina} alt="" />
          </div>
          <h1>Корзина</h1>
        </div>
        <h1>Всего: {toTalCount}$</h1>
      </div>

      <div className="cart-blocks">
        {data.map((item) => (
          <div className="cart-block">
            <div className="image-block-image">
              <img src={item.avatar} alt="" />
            </div>
            <div className="cart-content">
              <h1>{item.name}</h1>
              <p>Nike Sportswear Club+ Button-Down Short-Sleeve Gömlek</p>
              <h4>Price: {item.newPrice}$</h4>

              <div className="cart-decrament">
                <div className="in-dec">
                  <img onClick={() => decrement(item.id)} src={minus} alt="" />
                  <span>{count[item.id] || 0}</span>
                  <img onClick={() => increment(item.id)} src={pilus} alt="" />
                </div>
                <img
                  onClick={() => deleteHandler(item.id)}
                  src={deletebutton}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <Link to="/">
          <img src={strelka} alt="" />
        </Link>
        <div className="oformit">
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
