import React, { useState } from "react";
import { Transition } from "react-transition-group"; // Import Transition
import "./Filter.css";
// import a from "../../assets/svg/a.svg";
import a from "../../assets/svg/a.svg";

import b from "../../assets/svg/b.svg";
// import b from '../../assets/svg/b'
import Odejda from "../Odejda/Odejda";

function Filter() {
  const [btnImg, setBtnImg] = useState(a);
  const [filterImage, setFilterImage] = useState(false); // Define filterImage state

  const positionclick = () => {
    setBtnImg(btnImg === a ? b : a);
    setFilterImage(!filterImage);
  };

  const categoryHandler = (category) => {
    alert(category);
  };

  let category = ["Пальто", "Спорт", "Шорты", "Шляпа"];
  return (
    <section>
      <div className="container odejda-content">
        <button onClick={positionclick}>
          Фильт <img className="button-image" src={btnImg} alt="" />
        </button>

        <Transition in={filterImage} timeout={1000} mountOnEnter unmountOnExit>
          {(state) => (
            <div className={`filter-position ${state}`}>
              <div className="filter-header">
                <div className="filter-position-content">
                  <h1>Мужские</h1>
                  <div>
                    {category.map((item) => (
                      <p onClick={() => categoryHandler(item)}>{item}</p>
                    ))}
                  </div>
                </div>
                <div className="filter-position-content">
                  <h1>Женские</h1>
                  <div>
                    <p>Футболки</p>
                    <p>Худи</p>
                    <p>Кеды</p>
                    <p>Рубашка</p>
                    <p>Брюки</p>
                    <p>Юбки</p>
                    <p>Свитшоты</p>
                  </div>
                </div>
                <div className="filter-position-content">
                  <h1>Дети</h1>
                  <div>
                    <p>Футболки</p>
                    <p>Худи</p>
                    <p>Кеды</p>
                    <p>Рубашка</p>
                    <p>Юбки</p>
                    <p>Свитшоты</p>
                    <p>Брюки</p>
                    <p>Шорты</p>
                    <p>Бутсы</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>

        <div className="text-info-filter">
          <span style={{ display: "flex" }}>
            <h1 style={{ color: "#0D99FF" }}>Главная // </h1>
            <h1>Все товары </h1>
          </span>
          <span style={{ display: "flex" }}>
            <h1>Главная // </h1>
            <h1 style={{ color: "#0D99FF" }}>Все товары </h1>
          </span>
        </div>
      </div>
      {/* <Odejda/> */}
    </section>
  );
}

export default Filter;
