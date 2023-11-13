import "./styles.css";
import card from "./../../img/icons/productCard.png";
import star from "./../../img/icons/star.png";
import starHalf from "./../../img/icons/starHalf.png";
import checkbox from "./../../img/icons/checkboxSelection.svg";
import checkboxE from "./../../img/icons/checkboxEmptySelection.svg";
import addLine from "./../../img/icons/addPlusSelection.svg";

const Selection = () => {
  return (
    <section className="selection">
      <div className="container__selection">
        <h2 className="selection__title">Подборка один</h2>
        <div className="selection__wrapper">
          <div className="selection__group">
            <ul className="selection__group-list">
              <li className="selection__group-item">
                <h2 className="selection__group-title">Кровать «Триумф» 160</h2>
                <p className="selection__group-price">8000 ₽</p>
                <img
                  className="selection__group-icon"
                  src={checkbox}
                  alt="checkbox"
                />
              </li>
              <li className="selection__group-item">
                <h2 className="selection__group-title">Матрас средний</h2>
                <p className="selection__group-price">10000 ₽</p>
                <img
                  className="selection__group-icon"
                  src={checkbox}
                  alt="checkbox"
                />
              </li>
              <li className="selection__group-item">
                <h2 className="selection__group-title tumba">
                  Тумба прикроватная
                </h2>
                <p className="selection__group-price tumba-price">2000 ₽</p>
                <img
                  className="selection__group-icon"
                  src={checkboxE}
                  alt="checkbox"
                />
              </li>
              <li className="selection__group-item">
                <h2 className="selection__group-title">Шкаф 4-дверный</h2>
                <p className="selection__group-price">10000 ₽</p>
                <img
                  className="selection__group-icon"
                  src={checkbox}
                  alt="checkbox"
                />
              </li>
              <li className="selection__group-item">
                <h2 className="selection__group-title">Комод</h2>
                <p className="selection__group-price">2000 ₽ </p>
                <img
                  className="selection__group-icon"
                  src={checkbox}
                  alt="checkbox"
                />
              </li>
              <li className="selection__group-item">
                <h2 className="selection__group-title">Зеркало</h2>
                <p className="selection__group-price">2000 ₽ </p>
                <img
                  className="selection__group-icon"
                  src={checkbox}
                  alt="checkbox"
                />
              </li>
              <li className="selection__group-item">
                <h2 className="selection__group-title">Пуф</h2>
                <p className="selection__group-price">2000 ₽ </p>
                <img
                  className="selection__group-icon"
                  src={checkbox}
                  alt="checkbox"
                />
              </li>
              <hr
                className="selection__line"
                style={{ width: "360", size: "1" }}
              />

              <li className="selection__group-item">
                <h2 className="selection__group-title">Итого</h2>
                <p className="selection__group-price">2 000 ₽ </p>
                <img
                  className="selection__group-icon"
                  src={checkbox}
                  alt="checkbox"
                />
              </li>
            </ul>
            <button className="selection__button">
              <span className="selection__button-text1">
                Добавить товары в корзину
              </span>
              <img src={addLine} alt="addPlus" />
            </button>
          </div>
          <div className="selection__cards">
            <div className="selection__card-item">
              <img className="selection__card-img" src={card} alt="Card" />
              <div className="selection__group-img">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={starHalf} alt="star" />
              </div>
              <h4 className="selection__cards-title">Кровать «Триумф»</h4>
              <p className="selection__cards-price">8 000 ₽</p>
              <button className="selection__cards-button" type="button">
                <span className="selection__button-text">В корзину</span>
                <img src={addLine} alt="addPlus" />
              </button>
            </div>
            <div className="selection__card-item">
              <img className="selection__card-img" src={card} alt="Card" />
              <div className="selection__group-img">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={starHalf} alt="star" />
              </div>
              <h4 className="selection__cards-title">Кровать «Триумф»</h4>
              <p className="selection__cards-price">8 000 ₽</p>
              <button className="selection__cards-button" type="button">
                <span className="selection__button-text">В корзину</span>
                <img src={addLine} alt="addPlus" />
              </button>
            </div>
            <div className="selection__card-item">
              <img className="selection__card-img" src={card} alt="Card" />
              <div className="selection__group-img">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={starHalf} alt="star" />
              </div>
              <h4 className="selection__cards-title">Кровать «Триумф»</h4>
              <p className="selection__cards-price">8 000 ₽</p>
              <button className="selection__cards-button" type="button">
                <span className="selection__button-text">В корзину</span>
                <img src={addLine} alt="addPlus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Selection;
