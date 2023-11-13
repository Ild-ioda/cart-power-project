import "./styles.css";
import card from "./../../img/icons/productCard.png";
import star from "./../../img/icons/star.png";
import starHalf from "./../../img/icons/starHalf.png";
import addline from "./../../img/icons/addPlusSelection.svg";

const Product = () => {
  return (
    <section className="product">
      <div className="product__container">
        <h2 className="product__title">Для спальни</h2>
        <div className="product__cards">
          <div className="product__card-item">
            <img src={card} alt="cardImage" width="216px" height="216px" />
            <div className="product__img-group">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="starHalf" />
              <img src={starHalf} alt="starHalf" />
            </div>
            <h4 className="product__cards-title">Кровать «Триумф»</h4>
            <p className="product__cards-disprice">18000 ₽</p>
            <p className="product__cards-price">8 000 ₽</p>
            <button className="product__cards-button" type="button">
              <span className="product__button-text">В корзину</span>
              <img src={addline} alt="line" />
            </button>
          </div>
          <div className="product__card-item">
            <img src={card} alt="cardImage" width="216px" height="216px" />
            <div className="product__img-group">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="starHalf" />
              <img src={starHalf} alt="starHalf" />
            </div>
            <h4 className="product__cards-title">Кровать «Триумф»</h4>
            <p className="product__cards-disprice">18000 ₽</p>
            <p className="product__cards-price">8 000 ₽</p>
            <button className="product__cards-button" type="button">
              <span className="product__button-text">В корзину</span>
              <img src={addline} alt="line" />
            </button>
          </div>

          <div className="product__card-item">
            <img src={card} alt="cardImage" width="216px" height="216px" />
            <div className="product__img-group">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="starHalf" />
              <img src={starHalf} alt="starHalf" />
            </div>
            <h4 className="product__cards-title">Кровать «Триумф»</h4>
            <p className="product__cards-disprice">18000 ₽</p>
            <p className="product__cards-price">8 000 ₽</p>
            <button className="product__cards-button" type="button">
              <span className="product__button-text">В корзину</span>
              <img src={addline} alt="line" />
            </button>
          </div>
          <div className="product__card-item">
            <img src={card} alt="cardImage" width="216px" height="216px" />
            <div className="product__img-group">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="starHalf" />
              <img src={starHalf} alt="starHalf" />
            </div>
            <h4 className="product__cards-title">Кровать «Триумф»</h4>
            <p className="product__cards-disprice">18000 ₽</p>
            <p className="product__cards-price">8 000 ₽</p>
            <button className="product__cards-button" type="button">
              <span className="product__button-text">В корзину</span>
              <img src={addline} alt="line" />
            </button>
          </div>
          <div className="product__card-item">
            <img src={card} alt="cardImage" width="216px" height="216px" />
            <div className="product__img-group">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="starHalf" />
              <img src={starHalf} alt="starHalf" />
            </div>
            <h4 className="product__cards-title">Кровать «Триумф»</h4>
            <p className="product__cards-disprice">18000 ₽</p>
            <p className="product__cards-price">8 000 ₽</p>
            <button className="product__cards-button" type="button">
              <span className="product__button-text">В корзину</span>
              <img src={addline} alt="line" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
